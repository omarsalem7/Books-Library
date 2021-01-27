import React from "react";
class SearchInput extends React.Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    const val = event.target.value;
    this.setState({ value: val }, () => {
      this.props.onSearch(val);
    });
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          autoFocus
          placeholder="Search by title or author"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchInput;
