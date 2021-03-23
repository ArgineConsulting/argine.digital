import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import photo from "../../images/alexandr-ronalds.svg";
import facebook from "../../images/facebook.svg";
import amazon from "../../images/amazon.svg";
import twitch from "../../images/twitch.svg";
import kabam from "../../images/kabam.svg";

import 'swiper/swiper.scss';
import TeamMember from "../Common/TeamMember";
import { ArrLeft, ArrRight } from "../Common/icons";

const userData = [{
  username: 'Alexandr Ronalds',
  iconList: [{
    alt: 'facebook',
    img: facebook,
  }, {
    alt: 'amazon',
    img: amazon,
  }, {
    alt: 'twitch',
    img: twitch,
  }, {
    alt: 'kabam',
    img: kabam,
  }],
  avatar: photo,
  description: "Alex Ronalds is the chief executive officer & co-founder of Argine Consulting, a business consulting firm that helps companies drive business impact through continuous innovation. </br> </br> Previously Alex created Amazon / Twitch’s flagship Pulse product which launched on the front page of Twitch.tv to 100s of millions of gamers creating a new type of social discourse amongst them. Prior to that Alex managed Facebook’s multi-Billion dollar web gaming business, an ecosystem for developers to upload their own games & apps giving them a way to leverage Facebook’s viral distribution. Most notable however Alex built & sold Balanced Worlds to Kabam, an industry leader in the social gaming space, who was later wholly acquired by Netmarble for 800 million dollars. </br> </br> Alex is passionate about anthropology & games and in his spare time runs a non-profit geared towards recording the rich cultural history of an entirely new generation of gamers, Clanet.",
  title: "CEO"
}, {
  username: 'Alexandr Ronalds',
  iconList: [{
    alt: 'facebook',
    img: facebook,
  }, {
    alt: 'amazon',
    img: amazon,
  }, {
    alt: 'twitch',
    img: twitch,
  }, {
    alt: 'kabam',
    img: kabam,
  }],
  avatar: photo,
  description: "Alex Ronalds is the chief executive officer & co-founder of Argine Consulting, a business consulting firm that helps companies drive business impact through continuous innovation. </br> </br> Previously Alex created Amazon / Twitch’s flagship Pulse product which launched on the front page of Twitch.tv to 100s of millions of gamers creating a new type of social discourse amongst them. Prior to that Alex managed Facebook’s multi-Billion dollar web gaming business, an ecosystem for developers to upload their own games & apps giving them a way to leverage Facebook’s viral distribution. Most notable however Alex built & sold Balanced Worlds to Kabam, an industry leader in the social gaming space, who was later wholly acquired by Netmarble for 800 million dollars. </br> </br> Alex is passionate about anthropology & games and in his spare time runs a non-profit geared towards recording the rich cultural history of an entirely new generation of gamers, Clanet.",
  title: "CEO"
}]

const TeamSection = () => {
  const [swiperInstance, setSwiper] = useState(null);
  return (
    <section className="team" id="team">
      <div className="container">
        <h1>Our Team</h1>
        <div className="team__members">
          <Swiper
            slidesPerView={1}
            onSwiper={setSwiper}>
            {userData.map((user, i) => (
              <SwiperSlide key={i}>
                <TeamMember {...user} idx={i + 1} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="team__nav">
            <div className="team__nav-item" onClick={() => swiperInstance.slidePrev()}><ArrLeft /></div>
            <div className="team__nav-item" onClick={() => swiperInstance.slideNext()}><ArrRight /></div>
          </div>
        </div>
      </div>
    </section>
  )
};
export default TeamSection;
