export default function Footer() {
  return (
 <>
<footer>
  <div className="container">
    <div className="footer-grid">
      <div className="footer-about">
        <div className="logo">
          <img src="logo.jpg" alt="Sertify" />
          <span>Sertify</span>
        </div>
        <p>UAE's first digital legal services marketplace. Built to connect individuals and businesses with verified legal professionals across the Emirates, and soon across the GCC.</p>
        <div className="socials" style={{marginTop: 20}}>
          <a href="#" aria-label="LinkedIn"><svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
          <a href="#" aria-label="Twitter"><svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
          <a href="#" aria-label="Instagram"><svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={2} y={2} width={20} height={20} rx={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
        </div>
      </div>
      <div>
        <h4>Platform</h4>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#how">How it Works</a></li>
          <li><a href="#ai">AI Assistant</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
      <div>
        <h4>For Providers</h4>
        <ul>
          <li><a href="#providers">Become a Provider</a></li>
          <li><a href="#">Provider Dashboard</a></li>
          <li><a href="#">Publish Articles</a></li>
          <li><a href="#">Partner Program</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div>© 2026 Sertify. All rights reserved.</div>
      <div>Dubai, United Arab Emirates</div>
    </div>
  </div>
</footer>

 </>
  );
}