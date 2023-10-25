import React, { FC } from 'react'
import { NEWS_TEAM_TEXT_MEDIA } from './constants'
import htmlParse from 'react-html-parser'

const TeamSection: FC = () => (
  <section className="new-team" id="team">
    <div className="container">
      <h1>Our Team</h1>

      <div className="new-team__members">
        {NEWS_TEAM_TEXT_MEDIA.map((user, index) => (
          <div key={user.username + index} className="new-team__member">
            <div className="new-team-photo">
              <img src={user.avatar} alt="userPhoto" />
              <div className="new-team-count">{user.title}</div>
            </div>

            <div className="new-team__content">
              <div className="new-team-name">{htmlParse(user.username)}</div>
              <div className="new-team-descr">
                <p
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: user.description,
                  }}
                ></p>
                {user.username === 'Dan Demchenko' ? (
                  <div className="new-team-social">
                    {user.iconList.map((item, key) => (
                      <img key={key} src={item.img} alt={item.alt} />
                    ))}
                  </div>
                ) : (
                  <div className="new-team-social">
                    {user.iconList.map((item, key) => (
                      <img key={key} src={item.img} alt={item.alt} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TeamSection
