import React from 'react'

export default function TeamMember({ iconList, username, avatar, description, title, idx }) {
    return (
        <div className="team__member">
            <div className="team__member-photo">
                <div className="team__member-name">{username}</div>
                <div className="team__member-social">
                    {iconList.map((itm, key) => (
                        <img key={key} src={itm.img} alt={itm.alt} />
                    ))}
                </div>
                <img src={avatar} alt="userPhoto" />
            </div>
            <div className="team__member-descr">
                <p className="text" dangerouslySetInnerHTML={{
                    __html: description
                }}></p>
                <div className="team__member-count">
                    <span>0{idx}</span>
                    {title}
                </div>
            </div>
        </div>
    )
}
