import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onFormSubmit = async (searchTerm) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: searchTerm,
        per_page: 30,
        orientation: "landscape",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="c-app-wrapper">
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
