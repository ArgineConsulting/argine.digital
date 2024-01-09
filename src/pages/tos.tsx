import React, { FC, useEffect } from 'react'
import '../styles/main.sass'

export const Head = () => <title>Argine Digital / ToS</title>

const TermsOfUse: FC = () => {
  useEffect(() => {
    // Добавить класс к body при монтировании компонента
    document.body.classList.add('black-bg')

    // Удалить класс при размонтировании компонента
    return () => {
      document.body.classList.remove('black-bg')
    }
  }, [])

  return (
    <div className="background">
      <section className="tos container">
        <h1 id="terms-of-service-for-argine-digital">Terms of Service for Argine.digital</h1>

        <h2 id="last-updated-october-24-2023">Last Updated: October 24, 2023</h2>

        <p>
          <strong>Company Name:</strong> Argine LLC
          <br />
          <strong>Address:</strong> 4617 Norris Ave, Sacramento, Postal code 95841, United States
        </p>

        <h2 id="introduction">Introduction</h2>

        <p>
          By accessing and using the Argine.digital website, you agree to comply with and be bound
          by the following terms and conditions.
        </p>

        <h2 id="acceptance-of-terms">Acceptance of Terms</h2>
        <p>Your use of our website constitutes your acceptance of these Terms of Service.</p>

        <h2 id="user-conduct">User Conduct</h2>
        <p>
          You agree to use the website in a manner consistent with any and all applicable laws and
          regulations.
        </p>

        <h2 id="copyright-and-intellectual-property">Copyright and Intellectual Property</h2>
        <p>
          All content on this website is the property of Argine LLC and is protected by copyright
          laws. Unauthorized reproduction is prohibited.
        </p>

        <h2 id="disclaimers">Disclaimers</h2>
        <p>
          The website and its content are provided &quot;as is&quot; without warranties of any kind,
          either express or implied.
        </p>

        <h2 id="limitation-of-liability">Limitation of Liability</h2>
        <p>
          Argine LLC will not be liable for any damages arising from the use or inability to use the
          website or any of its content.
        </p>

        <h2 id="changes-to-terms">Changes to Terms</h2>
        <p>
          Argine LLC reserves the right to modify these Terms at any time. Changes will be posted on
          the Argine.digital website.
        </p>

        <h2 id="governing-law">Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of the United States and the State of
          California.
        </p>

        <h2 id="contact-us">Contact Us</h2>
        <p>
          For questions or concerns about these Terms, please contact us at company@argine.digital
        </p>
      </section>
    </div>
  )
}

export default TermsOfUse
