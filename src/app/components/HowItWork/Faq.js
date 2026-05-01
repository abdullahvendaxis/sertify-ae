export default function Faq() {
  return (
 <>
<section>
  <div className="container">
    <div className="section-head">
      <span className="eyebrow"><span className="dot" />FAQ</span>
      <h2>Good to <span className="gradient-text">know.</span></h2>
    </div>
    <div className="faq-grid">
      <div className="faq-item open">
        <div className="faq-q">
          <span>Do I need to pay before the service is completed?</span>
          <span className="plus">+</span>
        </div>
        <div className="faq-a">You pay at booking, but the funds are held in escrow by Sertify until your provider completes the service. If anything goes wrong, you are fully refunded.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">
          <span>What happens if I need to cancel or reschedule?</span>
          <span className="plus">+</span>
        </div>
        <div className="faq-a">You can cancel or reschedule directly from the app. Cancellations made before work begins are refunded in full. Late cancellations may incur a partial fee.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">
          <span>Are my documents safe on Sertify?</span>
          <span className="plus">+</span>
        </div>
        <div className="faq-a">Yes. All documents and chats are encrypted in transit and at rest, and access is limited to you and your chosen provider. You can delete documents anytime.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">
          <span>Can I use Sertify for urgent, same-day services?</span>
          <span className="plus">+</span>
        </div>
        <div className="faq-a">Yes. Many providers offer express slots. Filter by "Same day" or "Express" and you will see only providers who can handle urgent requests.</div>
      </div>
      <div className="faq-item">
        <div className="faq-q">
          <span>Which emirates does Sertify cover?</span>
          <span className="plus">+</span>
        </div>
        <div className="faq-a">Sertify operates across all seven emirates, with the largest network in Dubai, Abu Dhabi, and Sharjah. Expansion across the GCC is planned.</div>
      </div>
    </div>
  </div>
</section>

 </>
  );
}