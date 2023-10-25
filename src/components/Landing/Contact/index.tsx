import React, { FC, SyntheticEvent, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { ArrRight } from '../../Common/icons'
import { StaticImage } from 'gatsby-plugin-image'
import contactBcgImg from '../../../images/contact-img.webp'
import axios from 'axios'

const ContactSection: FC = () => {
  // Local state
  const [isSent, setIsSent] = useState<boolean>(false)
  const [goal, setGoal] = useState<string>('Select an industry')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault()
    const SELECTOR_VALUE = goal
    const MAIL_VALUE = email
    const MESSAGE_VALUE = message

    // Prepare the data to send
    const formData = {
      subject: SELECTOR_VALUE,
      email: MAIL_VALUE,
      message: MESSAGE_VALUE,
    }

    try {
      const response = await axios.post('/api/mail', formData, {
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.status === 200) {
        // Handle success, e.g., show a success message
        setIsSent(true)
      } else {
        throw Error('Message not sent, try again later')
      }
    } catch (error) {
      throw Error('Message not sent' + error)
    }
  }

  return (
    <section className="contact" id="contact-us">
      <div className="container">
        <div className="contact__bcg">
          <Parallax translateY={[-20, 0]}>
            <div
              className="contact__bcg-img"
              style={{
                backgroundImage: `url(${contactBcgImg})`,
              }}
            />
          </Parallax>
        </div>

        <div>
          <h1>Contact Us</h1>

          {isSent ? (
            <>
              <h5 className="sent">Your message has been sent</h5>
              <p className="text">
                We work with ambitious leaders who want to define the future, not hide from it.
                Together, we achieve extraordinary outcomes.
              </p>
              <StaticImage
                className="sent"
                src="../../../images/message-sent.svg"
                alt="messageSent"
                placeholder="blurred"
              />
            </>
          ) : (
            <div className="send">
              <h5>Ready to talk?</h5>
              <p className="text">What are your business goals?</p>
              <form className="contact__form" onSubmit={(e: any) => submitHandler(e)}>
                <div className="contact__form-field">
                  <label htmlFor="value">
                    <select
                      id="value"
                      name="value"
                      value={goal}
                      onChange={e => setGoal(e.target.value)}
                      required
                    >
                      <option value="Grow your revenue" hidden>
                        Select a Goal
                      </option>
                      <option value="Grow your revenue">Grow your revenue</option>
                      <option value="Improve your strategic direction">
                        Improve your strategic direction
                      </option>
                      <option value="Co-develop custom software">Co-develop custom software</option>
                      <option value="Increase LTV">Increase LTV</option>
                      <option value="Create or enhance a call center">
                        Create or enhance a call center
                      </option>
                      <option value="Create on enhance a Salesforce instance or another ERP software.">
                        Create on enhance a Salesforce instance or another ERP software
                      </option>
                    </select>
                  </label>
                </div>
                <div className="contact__form-field">
                  <input
                    className="contact__form-email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="contact__form-field is-textarea">
                  <textarea
                    className="contact__form-textarea"
                    placeholder="Message (optional)"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    cols={30}
                    rows={10}
                    required
                  ></textarea>
                </div>
                <button type="submit">
                  Send message
                  <ArrRight />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default ContactSection
