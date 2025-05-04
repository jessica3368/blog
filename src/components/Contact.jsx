import React from 'react';

export function Contact() {
  return (
    <section id="contact">
      <h2>Connect With Me</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:example@example.com">jessica.santos13235@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890">0991 775 2259 </a></p>
        <div className="social-links">
          <a href="hhttps://web.facebook.com/warsoulvince.adora"><i className="fab fa-facebook"></i></a>
          <a href="https://github.com/jessica3368"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jessica-santos-89776b340"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}