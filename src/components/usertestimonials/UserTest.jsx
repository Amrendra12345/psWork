"use client";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const photos = [
  { src: "/assets/preview_thumb.png", width: 800, height: 600 },
  { src: "/assets/preview_thumb.png", width: 800, height: 600 },
  { src: "/assets/preview_thumb.png", width: 800, height: 600 },
];

export default function UserTest() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos}
        index={index}
      />
    </>
  );
}
