import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], isLoading: true };

  onFormSubmit = async (searchTerm) => {
    this.setState({ isLoading: true });

    const response = await unsplash.get("/search/photos", {
      params: {
        query: searchTerm,
        per_page: 30,
        orientation: "landscape",
      },
    });

    this.setState({ images: response.data.results, isLoading: false });
    localStorage.setItem(
      "unsplash-images",
      JSON.stringify(response.data.results)
    );
  };

  async componentDidMount() {
    const localData = JSON.parse(localStorage.getItem("unsplash-images"));
    if (localData) {
      this.setState({ images: localData, isLoading: false });
    } else {
      const response = await unsplash.get("/search/photos", {
        params: {
          query: "nature",
          per_page: 30,
          orientation: "landscape",
        },
      });

      this.setState({ images: response.data.results, isLoading: false });
    }
  }

  render() {
    return (
      <div className="c-app-wrapper">
        <SearchBar onSubmit={this.onFormSubmit} />
        {!this.state.isLoading && <ImageList images={this.state.images} />}
        {this.state.isLoading && (
          <p className="c-is-loading-text">Is loading...</p>
        )}
      </div>
    );
  }
}

export default App;
