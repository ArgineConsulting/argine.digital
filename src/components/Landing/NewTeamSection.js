import React from "react";

import alex from "../../images/newAlex.png";
import dan from "../../images/newDan.png";
import facebook from "../../images/facebook.svg";
import amazon from "../../images/amazon.svg";
import twitch from "../../images/twitch.svg";
import kabam from "../../images/kabam.svg";
import canon from "../../images/canon.svg";
import microsoft from "../../images/microsoft.svg";
import gigster from "../../images/gigster.svg";

const userData = [
  {
    username: "Alexandr Ronalds",
    iconList: [
      {
        alt: "facebook",
        img: facebook,
      },
      {
        alt: "amazon",
        img: amazon,
      },
      {
        alt: "twitch",
        img: twitch,
      },
      {
        alt: "kabam",
        img: kabam,
      },
    ],
    avatar: alex,
    description:
      "Alex Ronalds is the chief executive officer & co-founder of Argine Consulting, a business consulting firm that helps companies drive business impact through continuous innovation.",
    title: "CEO",
  },
  {
    username: "Daniil Demchenko",
    iconList: [
      {
        alt: "gigster",
        img: gigster,
      },
      {
        alt: "microsoft",
        img: microsoft,
      },
      {
        alt: "canon",
        img: canon,
      },
    ],
    avatar: dan,
    description:
      "Daniil Demchenko is the chief product officer & co-founder of Argine Consulting. Daniil has over a decade of experience working with dozens of multinational corporations delicately crafting software that drive user value.",
    title: "CPO",
  },
];

const NewTeamSection = () => {
  return (
    <section className="new-team" id="team">
      <div className="container">
        <h1>Our Team</h1>
        <div className="new-team__members">
          {userData.map((user, idx) => (
            <div className="new-team__member">
              <div className="new-team-photo">
                <img src={user.avatar} alt="userPhoto" />
                <div className="new-team-count">{user.title}</div>
              </div>
              <div className="new-team__content">
                <div className="new-team-name">{user.username}</div>
                <div className="new-team-descr">
                  <p
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: user.description,
                    }}
                  ></p>
                  <div className="new-team-social">
                    {user.iconList.map((itm, key) => (
                      <img key={key} src={itm.img} alt={itm.alt} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewTeamSection;
