import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import alex from "../../images/alexandr-ronalds.svg";
import dan from "../../images/dan-demchenko.svg";
import facebook from "../../images/facebook.svg";
import amazon from "../../images/amazon.svg";
import twitch from "../../images/twitch.svg";
import kabam from "../../images/kabam.svg";
import canon from "../../images/canon.svg";
import microsoft from "../../images/microsoft.svg";
import gigster from "../../images/gigster.svg";

import "swiper/swiper.scss";
import TeamMember from "../Common/TeamMember";
import { ArrLeft, ArrRight } from "../Common/icons";

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
      "Alex Ronalds is the chief executive officer & co-founder of Argine Consulting, a business consulting firm that helps companies drive business impact through continuous innovation. </br> </br> Previously Alex created Amazon / Twitch’s flagship Pulse product which launched on the front page of Twitch.tv to 100s of millions of gamers creating a new type of social discourse amongst them. Prior to that Alex managed Facebook’s multi-Billion dollar web gaming business, an ecosystem for developers to upload their own games & apps giving them a way to leverage Facebook’s viral distribution. Most notable however Alex built & sold Balanced Worlds to Kabam, an industry leader in the social gaming space, who was later wholly acquired by Netmarble for 800 million dollars. </br> </br> Alex is passionate about anthropology & games and in his spare time runs a non-profit geared towards recording the rich cultural history of an entirely new generation of gamers, Clanet.",
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
      "Daniil Demchenko is the chief product officer & co-founder of Argine Consulting. </br> </br>Daniil has over a decade of experience working with dozens of multinational corporations delicately crafting software that drive user value. Previously, Daniil was on the product team for Gigster, a service based company that acted as the digital arm of some of the worlds largest brands. Some of his projects included “My Om Nom” which was the #1 grossing iOS kids’ app in the USA and a photography marketplace for Canon, the world’s largest camera brand. Most notably however, Daniil worked on the “Microsoft Casual Games Suite” where he contributed to 120% growth in daily active users and worked on the “Microsoft Solitaire Collection” which is the most played computer game of all time. </br> </br>In his spare time, Daniil enjoys helping people improve their general health and wellbeing through online digital classes. Daniil has a masters degree in Criminal Law.",
    title: "CPO",
  },
];

const TeamSection = () => {
  const [swiperInstance, setSwiper] = useState(null);
  return (
    <section className="team" id="team">
      <div className="container">
        <h1>Our Team</h1>
        <div className="team__members">
          <Swiper slidesPerView={1} onSwiper={setSwiper}>
            {userData.map((user, i) => (
              <SwiperSlide key={i}>
                <TeamMember {...user} idx={i + 1} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="team__nav">
            <div
              className="team__nav-item"
              onClick={() => swiperInstance.slidePrev()}
            >
              <ArrLeft />
            </div>
            <div
              className="team__nav-item"
              onClick={() => swiperInstance.slideNext()}
            >
              <ArrRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamSection;
