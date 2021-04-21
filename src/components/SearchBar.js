import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(event) => this.onFormSubmit(event)}
        >
          <div className="field">
            <input
              placeholder="Press enter for search"
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
          <button
            className="ui toggle button"
            onClick={(event) => this.onFormSubmit(event)}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
