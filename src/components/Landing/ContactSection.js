import React from "react";
import { ArrRight } from "../Common/icons";

const ContactSection = () => (
  <section className="contact">
    <div className="container">
      <div>
        <h1>Contact Us</h1>
        <p className="text">
          We work with ambitious leaders who want to define the future, not hide
          from it. Together, we achieve extraordinary outcomes.
        </p>
        <h5>Ready to talk?</h5>
        <p className="text">I want to talk to your experts in:</p>
        <div className="contact__form">
          <label htmlFor="value">
            <select defaultValue="Select an industry" id="value" name="value">
              <option>Select an industry</option>
            </select>
          </label>
          <input placeholder="E-mail" type="email" name="email" />
          <textarea
            placeholder="Message (optional)"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">
            Send message
            <ArrRight />
          </button>
        </div>
      </div>
    </div>
  </section>
);
export default ContactSection;
