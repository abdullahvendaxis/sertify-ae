"use client";

import { useEffect, useState } from "react";
import { listFaqs } from "@/services/faqs";

const getQuestion = (faq) =>
  faq?.question_en || faq?.question || faq?.title_en || faq?.title || "Question";

const getAnswer = (faq) =>
  faq?.answer_en || faq?.answer || faq?.body_en || faq?.body || "";

const flattenFaqGroups = (groups = []) =>
  groups.flatMap((group) => group.faqs || group.items || []);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    const loadFaqs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await listFaqs({ audience: "client" });
        if (!isCurrent) return;

        const nextFaqs = response.faqs?.length
          ? response.faqs
          : flattenFaqGroups(response.groups);

        setFaqs(nextFaqs);
        setOpenIndex(nextFaqs.length ? 0 : null);
      } catch (loadError) {
        if (!isCurrent) return;
        setFaqs([]);
        setError(loadError.message || "Unable to load FAQs.");
      } finally {
        if (isCurrent) setLoading(false);
      }
    };

    loadFaqs();

    return () => {
      isCurrent = false;
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <span className="dot" /> FAQ
          </span>
          <h2>
            Good to <span className="gradient-text">know.</span>
          </h2>
        </div>

        {loading ? (
          <div className="faq-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="faq-item faq-skeleton" key={index}>
                <span />
                <span />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="faq-empty-state">
            <h3>FAQs could not load.</h3>
            <p>{error}</p>
          </div>
        ) : faqs.length ? (
          <div className="faq-grid">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.id || index}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="faq-q"
                    onClick={() => toggleFAQ(index)}
                    type="button"
                  >
                    <span>{getQuestion(faq)}</span>
                    <span className="plus">{isOpen ? "-" : "+"}</span>
                  </button>

                  <div className={`faq-a-wrapper ${isOpen ? "open" : ""}`}>
                    <div className="faq-a">{getAnswer(faq)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="faq-empty-state">
            <h3>No FAQs found.</h3>
            <p>Check back soon for more answers.</p>
          </div>
        )}
      </div>
    </section>
  );
}
