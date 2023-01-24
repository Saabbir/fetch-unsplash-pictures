import React from "react";

const ImageList = ({ images }) => {
  const imgs = images.map((image) => (
    <div className="c-image-wrapper">
      <img
        className="c-image"
        src={image.urls.thumb}
        alt={image.alt_description}
      />
    </div>
  ));

  return <div className="c-images-wrapper">{imgs}</div>;
};

export default ImageList;
