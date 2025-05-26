import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import "./contact-styles.css"

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form submitted");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      setStatus('Message sent successfully!');
      e.target.reset();
      setTimeout(() => setStatus(''), 4000);
    }, (error) => {
      console.log(error.text);
      setStatus('Failed to send message, please try again.');
      setTimeout(() => setStatus(''), 4000);
    });
  };

  return (
    <div id='Contact' className='contact'>
      <div className='bg-circle1'></div>
      <div className='contact-container'>
        <h1><span>INTERESTED IN WORKING WITH</span> ME<span>?</span></h1>

        <div className='contact-form'>
          <form ref={form} className="form" onSubmit={sendEmail}>
            <input name="title" type="text" placeholder="How can I help you?" required />
            <input name="email" type="email" placeholder="Your email address" required />
            <textarea name="message" placeholder="Type your message..." required />
            <button type="submit">Send Email</button>
          </form>

          {status && <p className="status-message">{status}</p>}

          <div className='alternative-contact'>
            <h2>OR</h2>
            <h2><span>Use Social Media</span> Link<span>s</span></h2>
            <div className="social-icons">
              <a href="https://wa.me/2348164919003" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <FaWhatsapp size={40} color="#25D366" />
              </a>
              <a href="https://t.me/Trust447" target="_blank" rel="noopener noreferrer" title="Telegram">
                <FaTelegram size={40} color="#0088cc" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-circle2'></div>
    </div>
  );
};

export default Contact;
