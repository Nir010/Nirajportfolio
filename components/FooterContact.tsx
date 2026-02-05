'use client';

import React from 'react';

export default function FooterContact() {
  return (
    <footer
      className="site-footer"
      id="contact"
      style={{ padding: '3rem 1rem', background: '#0f1724', color: '#e6eef8' }}
    >
      <div className="container contact-section" style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2>Send me an email</h2>

        <form
          className="contact-form"
          action="https://formspree.io/f/meeljaoj"
          method="POST"
          aria-label="Contact form"
        >
          <label htmlFor="contact-email" style={{ display: 'flex', flexDirection: 'column', fontSize: '0.95rem' }}>
            Your email
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              style={{
                padding: '.6rem',
                borderRadius: 6,
                border: '1px solid rgba(255,255,255,.12)',
                background: 'rgba(255,255,255,.03)',
                color: 'inherit',
              }}
            />
          </label>

          <label htmlFor="contact-message" style={{ display: 'flex', flexDirection: 'column', fontSize: '0.95rem' }}>
            Your message
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="Hi — I'd like to get in touch about..."
              style={{
                padding: '.6rem',
                borderRadius: 6,
                border: '1px solid rgba(255,255,255,.12)',
                background: 'rgba(255,255,255,.03)',
                color: 'inherit',
              }}
            />
          </label>

          <input type="hidden" name="_subject" value="New message from portfolio" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <button
            type="submit"
            className="btn"
            style={{
              marginTop: '.5rem',
              padding: '.6rem .9rem',
              borderRadius: 6,
              border: 'none',
              background: '#06b6d4',
              color: '#012',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Send
          </button>

          <p className="form-note" style={{ marginTop: '.5rem', fontSize: '.9rem', color: 'rgba(230,238,248,.85)' }}>
            Thanks — I’ll reply as soon as I can.
          </p>

          <p className="form-credit" aria-hidden="true" style={{ marginTop: '.25rem', fontSize: '.8rem', color: 'rgba(230,238,248,.6)' }}>
            Form added by GitHub Copilot (@copilot)
          </p>
        </form>
      </div>
    </footer>
  );
}
