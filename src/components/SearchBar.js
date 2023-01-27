import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="c-form-wrapper">
        <form className="c-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="c-search-image-input" className="c-form__label">
            Search Unsplash Images
          </label>
          <input
            id="c-search-image-input"
            type="text"
            className="c-form__input"
            placeholder="Nature"
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
