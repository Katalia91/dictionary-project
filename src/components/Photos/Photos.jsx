import React from "react";
import "./Photos.scss";

export default function Photos({ photos }) {
  console.log(photos);
  if (photos) {
    return (
      <div className="photos-wrapper">
        {photos.map((photo, index) => (
          <a
            key={index}
            href={photo.src.original}
            target="_blank"
            rel="noreferrer"
          >
            <figure>
              <img src={photo.src.original} alt={photo.alt} />
            </figure>
          </a>
        ))}
      </div>
    );
  } else {
    // if we haven't searched for anything, it will by default return nothing
    return null;
  }
}
