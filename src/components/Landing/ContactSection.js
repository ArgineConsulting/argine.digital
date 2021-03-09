import React from "react";
import bcg from "../../images/contact-img.svg";
import btnArrow from "../../images/btn-arrow.svg";

const ContactSection = () => (
  <section className="contact">
    <img src={bcg} alt="bcg" />
    <div className="container">
      <h1>Contact Us</h1>
      <p className="text">
        We work with ambitious leaders who want to define the future, not hide
        from it. Together, we achieve extraordinary outcomes.
      </p>
      <h5>Ready to talk?</h5>
      <p className="text">I want to talk to your experts in:</p>
      <div className="contact__form">
        <select>
          <option value="" default selected>
            Select an industry
          </option>
        </select>
        <input placeholder="E-mail" type="email" name="email" />
        <textarea
          placeholder="Message (optional)"
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">
          Send message
          <img src={btnArrow} alt="btnArrow" />
        </button>
      </div>
    </div>
  </section>
);
export default ContactSection;
