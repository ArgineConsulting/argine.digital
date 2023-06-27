import React, { useState, useEffect } from "react";

export default function TeamMember({
  iconList,
  username,
  avatar,
  description,
  title,
  idx,
  onUpdate,
}) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const truncatedDescription = description.replace(/<\/?br[^>]*?>.*$/i, "");

  const handleReadMore = () => {
    setExpanded(true);
  };

  useEffect(() => {
    // Callback function to run after myState has updated
    // Perform any desired actions here
    onUpdate();
  }, [expanded]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <p
          className="text"
          dangerouslySetInnerHTML={{
            __html: expanded ? description : truncatedDescription,
          }}
        ></p>
        {isMobile && !expanded && (
          <span onClick={handleReadMore} className="read-more-button">
            Read more...
          </span>
        )}
        <div className="team__member-count">
          <span>0{idx}</span>
          {title}
        </div>
      </div>
    </div>
  );
}
