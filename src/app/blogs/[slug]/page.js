import Header from "../../components/Header";
import Footer from "../../components/Footer";
import css from "@/app/blog.css";
import { getArticleBySlug, getPublishedArticles } from "@/services/articleService";
import { SITE_URL } from "../../lib/site";

const BACKEND_URL =
  process.env.VITE_BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.VITE_BACKEND_API?.replace(/\/api\/?$/, "") ||
  process.env.NEXT_PUBLIC_BACKEND_API?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getText = (item, key) =>
  item?.[`${key}_en`] || item?.[key] || item?.[`${key}_ar`] || "";

const getCategoryName = (article) =>
  article?.category?.title_en ||
  article?.category?.name ||
  (typeof article?.category === "string" ? article.category : "") ||
  article?.tags?.[0] ||
  "Article";

const getAuthorName = (article) =>
  article?.author?.full_name ||
  article?.author_name ||
  (article?.author_type === "provider" ? "Verified Provider" : "Sertify Legal Team");

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "SL";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const resolveImage = (src) => {
  if (!src) return "";
  if (/^(https?:|data:)/i.test(src)) return src;
  if (src.startsWith("/uploads")) return `${BACKEND_URL}${src}`;
  if (src.startsWith("/")) return src;
  return `${BACKEND_URL}${src.startsWith("/") ? "" : "/"}${src}`;
};

const getArticleFromResponse = (response) =>
  response?.article ||
  response?.data?.article ||
  response?.articles?.[0] ||
  response?.data?.articles?.[0] ||
  null;

export async function generateStaticParams() {
  try {
    const response = await getPublishedArticles({
      limit: 100,
      offset: 0,
      sort: "recent",
      lean: true,
    });

    const articles = response.articles || response.data?.articles || [];
    return articles.filter((article) => article.slug).map((article) => ({ slug: article.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const response = await getArticleBySlug(slug);
    const article = getArticleFromResponse(response);
    if (!article) return { title: "Article | Sertify" };

    const title = getText(article, "meta_title") || getText(article, "title");
    const description = getText(article, "meta_description") || getText(article, "excerpt");
    const image = resolveImage(article.cover_image);

    return {
      title,
      description,
      alternates: {
        canonical: `${SITE_URL}/blogs/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/blogs/${slug}`,
        type: "article",
        images: image ? [{ url: image, alt: title }] : undefined,
      },
    };
  } catch {
    return { title: "Article | Sertify" };
  }
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  let article = null;
  let error = null;

  try {
    const response = await getArticleBySlug(slug);
    article = getArticleFromResponse(response);
  } catch (loadError) {
    error = loadError.message || "Unable to load article.";
  }

  const title = getText(article, "title");
  const excerpt = getText(article, "excerpt");
  const bodyHtml = getText(article, "body_html");
  const bodyText = getText(article, "body_text");
  const image = resolveImage(article?.cover_image);
  const authorName = article ? getAuthorName(article) : "";
  const publishedAt = formatDate(article?.published_at || article?.createdAt);
  const readTime = article?.reading_time || article?.reading_minutes;

  return (
    <>
      <Header />
      <main className="article-detail-page">
        <div className="container">
          <a className="article-back-link" href="/blogs">Back to blogs</a>

          {error || !article ? (
            <div className="blog-empty-state">
              <h1>Article not found.</h1>
              <p>{error || "This article may have been removed or is no longer published."}</p>
            </div>
          ) : (
            <article className="article-detail">
              <div className="article-detail-hero">
                <div className="article-detail-kicker">{getCategoryName(article)}</div>
                <h1>{title}</h1>
                {excerpt ? <p className="article-detail-lead">{excerpt}</p> : null}
                <div className="post-meta article-detail-meta">
                  <div className="post-author">{getInitials(authorName)}</div>
                  <span className="name">{authorName}</span>
                  {publishedAt ? (
                    <>
                      <div className="sep" />
                      <span>{publishedAt}</span>
                    </>
                  ) : null}
                  {readTime ? (
                    <>
                      <div className="sep" />
                      <span>{readTime} min read</span>
                    </>
                  ) : null}
                </div>
              </div>

              {image ? (
                <div className="article-detail-cover">
                  <img src={image} alt={title} crossOrigin="anonymous" />
                </div>
              ) : null}

              <div className="article-detail-content">
                {bodyHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
                ) : (
                  <p>{bodyText}</p>
                )}
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
