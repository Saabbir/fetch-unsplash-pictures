import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const first10images = images.slice(0, 10);
  const second10images = images.slice(10, 20);
  const last10images = images.slice(20, 30);

  const first10imagesHtml = first10images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  const second10imagesHtml = second10images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  const last10imagesHtml = last10images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return (
    <div className="c-images-wrapper">
      <div className="c-image-column c-first-images-column">
        {first10imagesHtml}
      </div>
      <div className="c-image-column c-second-images-column">
        {second10imagesHtml}
      </div>
      <div className="c-image-column c-last-images-column">
        {last10imagesHtml}
      </div>
    </div>
  );
};

export default ImageList;
