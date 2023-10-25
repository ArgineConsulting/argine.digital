import React, { FC, useEffect } from 'react'
import '../styles/main.sass'

export const Head = () => <title>Argine Digital / Privacy policy</title>

const PrivacyPolicy: FC = () => {
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
      <section className="privacy container">
        <h1 id="privacy-policy-for-argine-digital">Privacy Policy for Argine.digital</h1>

        <h2 id="effective-date-october-24-2023">Effective Date: October 24, 2023</h2>
        <p>
          <strong>Company Name:</strong> Argine LLC
          <br />
          <strong>Address:</strong> 4617 Norris Ave, Sacramento, Postal code 95841, United States
        </p>
        <h2 id="introduction">Introduction</h2>
        <p>
          Welcome to Argine.digital. This Privacy Policy explains how we collect, use, and protect
          your personal information when you visit our website.
        </p>
        <h2 id="information-we-collect">Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal identifiers like your name and email address</li>
          <li>Usage data, such as the pages you visit within our site</li>
          <li>Cookies to improve your user experience</li>
        </ul>
        <h2 id="how-we-use-information">How We Use Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, improve, and personalize our services</li>
          <li>Analyze user behavior to enhance user experience</li>
          <li>
            Communicate with you for marketing and promotional purposes, if you&#39;ve given consent
          </li>
        </ul>
        <h2 id="sharing-of-information">Sharing of Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties
          unless we have your explicit consent.
        </p>
        <h2 id="security">Security</h2>
        <p>
          We take reasonable precautions to protect your information by using industry-standard
          encryption and firewall technology.
        </p>
        <h2 id="changes-to-privacy-policy">Changes to Privacy Policy</h2>
        <p>
          Argine LLC reserves the right to change this Privacy Policy at any time. The new policy
          will be effective immediately upon being posted on the Argine.digital website.
        </p>
        <h2 id="contact-us">Contact Us</h2>
        <p>
          For any questions or concerns regarding this Privacy Policy, please contact us at
          info@argineconsulting.com.
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
