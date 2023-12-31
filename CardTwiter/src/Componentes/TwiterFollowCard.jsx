import { useState } from "react";

export function TwiterFollowCard({ userName = "cshica", children }) {
  const [isFollowing, setIsFolowing] = useState(false);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const btnClassName = isFollowing
    ? "cs-follow-card-btn is-following"
    : "cs-follow-card-btn";

  const handleClick = () => {
    setIsFolowing(!isFollowing);
  };

  return (
    <article className="cs-follow-card">
      <header className="cs-follow-card-header">
        <img
          className="cs-follow-card-avatar"
          alt="El Programador"
          src={`https://unavatar.io/youtube/${userName}`}
        />
        <div className="cs-follow-card-info">
          <strong>{children}</strong>
          <span className="cs-follow-card-username">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={btnClassName} onClick={handleClick}>
          <span className="cs-follow-card-text">{text}</span>
          <span className='cs-follow-card-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
