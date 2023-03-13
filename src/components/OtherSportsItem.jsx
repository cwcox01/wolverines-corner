import React from "react";

export default function OtherSportsItem({ otherSportsText, otherSportsUrl }) {
  return (
    <button type="button">
      <a href={otherSportsUrl} target="_blank" rel="noreferrer">
        <span>{otherSportsText}</span>
      </a>
    </button>
  );
}
