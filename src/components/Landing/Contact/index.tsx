import React, { FC, SyntheticEvent, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { ArrRight } from '../../Common/icons'
import { StaticImage } from 'gatsby-plugin-image'
import contactBcgImg from '../../../images/contact-img.webp'
import axios from 'axios'
import { CircleLoader } from 'react-spinners'

const ContactSection: FC = () => {
  const [isSent, setIsSent] = useState<boolean>(false)
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [goal, setGoal] = useState<string>('Choose Your Objective')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault()

    try {
      setIsWaiting(true)

      const formData = {
        subject: goal,
        email,
        message,
      }

      const response = await axios.post('/.netlify/functions/mail', formData, {
        headers: { 'Content-Type': 'application/json' },
      })

      setIsWaiting(false)

      if (response.status === 200) {
        setIsSent(true)
      } else {
        throw new Error(
          'Message not sent, please reload the page and try again, or try again later',
        )
      }
    } catch (error) {
      console.error('Message not sent', error)
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
          ) : isWaiting ? (
            <div className="loader">
              <CircleLoader size="150" />
            </div>
          ) : (
            <div className="send">
              <h5 className="text">What are your business goals?</h5>
              <form className="contact__form" onSubmit={submitHandler}>
                <div className="contact__form-field">
                  <label htmlFor="value">
                    <select
                      id="value"
                      name="value"
                      value={goal}
                      onChange={e => setGoal(e.target.value)}
                    >
                      <option value="Choose Your Objective" disabled>
                        Choose Your Objective
                      </option>
                      <option value="Boost Revenue">Boost Revenue</option>
                      <option value="Improve Strategic Direction">
                        Improve Strategic Direction
                      </option>
                      <option value="Perform User Research">Perform User Research</option>
                      <option value="Co-develop Custom Software">Co-develop Custom Software</option>
                      <option value="Develop or Improve CRM System">
                        Develop or Improve CRM System
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
