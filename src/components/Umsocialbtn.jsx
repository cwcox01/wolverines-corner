import React from "react";

// importing smaller component
import SocialMediaItem from "./SocialMediaItem";

export default function Umsocialbtn() {
  return (
    <div>
      <SocialMediaItem
        socialMediaUrl="https://google.com"
        socialMediaText="Google"
      />
    </div>
  );
}
