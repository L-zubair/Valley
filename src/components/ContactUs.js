import React from "react";
import "./ContactUs.css";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
    <div className="contact-us-container">
      <div className="contact-form-section">
        <h2 className="contact-title">
          Get in <span className="highlight">touch</span>
        </h2>
        <p className="contact-subtitle">
          Reach out to us for any queries or collaboration opportunities.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Contact Name" className="form-input" />
          <input type="text" placeholder="Street" className="form-input" />
          <div className="form-row">
            <input type="text" placeholder="City" className="form-input-half" />
            <input
              type="text"
              placeholder="Postcode"
              className="form-input-half"
            />
          </div>
          <input
            type="tel"
            placeholder="Contact Phone"
            className="form-input"
          />
          <input type="email" placeholder="E-mail" className="form-input" />
          <textarea
            placeholder="Let's talk about your idea"
            className="form-textarea"
          ></textarea>
          <label htmlFor="file-upload" className="file-upload-label">
            Upload Additional File
            <input type="file" id="file-upload" className="file-upload" />
          </label>
          <div className="form-check">
            <input type="checkbox" id="nda" className="checkbox" />
            <label htmlFor="nda">I want to protect my data by signing an NDA</label>
          </div>
          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </div>
      <div className="map-section">
        <div className="map-info">
          <h3>Headquarters</h3>
          <p>Company s.r.o.</p>
          <p>Street, 51</p>
          <p>100 00 Prague</p>
        </div>
        <iframe  title="Google Maps Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7373501542565!2d75.01460057517694!3d34.05060791781755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e227446c3079df%3A0x2b95fb1abed1c754!2sValley%20Cement%20Industries!5e0!3m2!1sen!2sin!4v1737305349859!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
