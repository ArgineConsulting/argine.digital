import React from "react";
import photo from "../../images/alexandr-ronalds.svg";
import facebook from "../../images/facebook.svg";
import amazon from "../../images/amazon.svg";
import twitch from "../../images/twitch.svg";
import kabam from "../../images/kabam.svg";

const TeamSection = () => (
  <section className="team">
    <div className="container">
      <h1>Our Team</h1>
      <div className="team__members">
        <div className="team__member">
          <div className="team__member-photo">
            <div className="team__member-name">
              <h2>Alexandr Ronalds</h2>
            </div>
            <div className="team__member-social">
              <img src={facebook} alt="facebook" />
              <img src={amazon} alt="amazon" />
              <img src={twitch} alt="twitch" />
              <img src={kabam} alt="kabam" />
            </div>
            <img src={photo} alt="photo" />
          </div>
          <div className="team__member-descr">
            <p className="text">
              Alex Ronalds is the chief executive officer & co-founder of Argine
              Consulting, a business consulting firm that helps companies drive
              business impact through continuous innovation.
            </p>
            <p className="text">
              Previously Alex created Amazon / Twitch’s flagship Pulse product
              which launched on the front page of Twitch.tv to 100s of millions
              of gamers creating a new type of social discourse amongst them.
              Prior to that Alex managed Facebook’s multi-Billion dollar web
              gaming business, an ecosystem for developers to upload their own
              games & apps giving them a way to leverage Facebook’s viral
              distribution. Most notable however Alex built & sold Balanced
              Worlds to Kabam, an industry leader in the social gaming space,
              who was later wholly acquired by Netmarble for 800 million
              dollars.
            </p>
            <p className="text">
              Alex is passionate about anthropology & games and in his spare
              time runs a non-profit geared towards recording the rich cultural
              history of an entirely new generation of gamers, Clanet.
            </p>
            <div className="team__member-count">
              <p>
                <span>01</span>CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default TeamSection;
