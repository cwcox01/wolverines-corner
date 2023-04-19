import React from "react";

// importing smaller component
import SocialMediaItem from "./SocialMediaItem";

export default function Umsocialbtn() {
  return (
    <div className="pt-3 um-social-media-btn">
      <SocialMediaItem
        socialMediaUrl="https://www.instagram.com/umichathletics/"
        socialMediaText="UofM Athletics"
      />
      <SocialMediaItem
        socialMediaUrl="https://www.instagram.com/umichbball/"
        socialMediaText="Basketball"
      />
      <SocialMediaItem
        socialMediaUrl="https://www.instagram.com/umichfootball/"
        socialMediaText="Football"
      />
      <SocialMediaItem
        socialMediaUrl="https://www.instagram.com/umichbaseball/"
        socialMediaText="Baseball"
      />
      <SocialMediaItem
        socialMediaUrl="https://twitter.com/umichwbball"
        socialMediaText="Women's Basketball"
      />
      <SocialMediaItem
        socialMediaUrl="https://www.instagram.com/umichsoftball/"
        socialMediaText="Softball"
      />
    </div>
  );
}
