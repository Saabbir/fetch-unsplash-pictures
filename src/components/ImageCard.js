import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 1 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      const imageHeight = this.imageRef.current.clientHeight;
      const gridAutoRowsSize = 10; // this value used for grid-auto-rows in css
      const spans = Math.ceil(imageHeight / gridAutoRowsSize);
      this.setState({ spans });
    });
  }

  render() {
    const { urls, alt_description, links } = this.props.image;

    return (
      <a
        href={links.html}
        target="_blank"
        rel="noreferrer"
        className="c-image-wrapper"
      >
        <img
          ref={this.imageRef}
          className="c-image"
          src={urls.regular}
          alt={alt_description}
        />
      </a>
    );
  }
}

export default ImageCard;
