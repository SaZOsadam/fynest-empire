import { useState } from 'react';
import './CTA.css';
import Testimonials from './Testimonials';

const WA_LINK = "https://wa.me/2349130911276?text=Hi%20I'm%20interested%20in%20your%20products%20from%20Fynest%20Empire";

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name} — Fynest Empire`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:igboerifaith80@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {sent && (
        <p className="contact-form-success">
          ✦ Your email client has opened — send the message to reach us!
        </p>
      )}
      <div className="cf-row">
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-name">Your Name</label>
          <input
            id="cf-name"
            className="cf-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Amaka"
            required
          />
        </div>
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-email">Email Address</label>
          <input
            id="cf-email"
            className="cf-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>
      </div>
      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          className="cf-input cf-textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for..."
          rows={5}
          required
        />
      </div>
      <button type="submit" className="cf-submit">Send Message</button>
    </form>
  );
}

export default function CTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg-img">
          <img
            src="/Product-images/bags/bagProduct6.jpg"
            alt="CTA Background"
            onError={e => { e.target.src = 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80'; }}
          />
          <div className="cta-overlay"></div>
        </div>
        <div className="cta-content">
          <p className="section-label cta-label">Limited Time</p>
          <h2 className="cta-title">Ready to Upgrade<br/><em>Your Style?</em></h2>
          <p className="cta-text">
            Browse our collection and place your order easily via WhatsApp.
            We're here to help you look your best.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      <Testimonials />

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <p className="section-label">Reach Out</p>
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-sub">
              Have questions or ready to place an order? Reach out to us today.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
