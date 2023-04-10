import React from "react";

export default function SocialMediaItem({ socialMediaText, socialMediaUrl }) {
  return (
    <button type="button" className="social-sports-btn">
      <a href={socialMediaUrl} target="_blank" rel="noreferrer">
        <span>{socialMediaText}</span>
      </a>
    </button>
  );
}
