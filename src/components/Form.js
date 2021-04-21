import React, { Component } from 'react';
import { items } from '../util/items';
import Link from '../util/Link';
 class Form extends Component {
  state = {
    selectedImage: '',
    title: '',
    description: '',
  };

  componentDidMount() {
    window.addEventListener('click', () => {
      this.setState({ selectedImage: this.props.imageLink });
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    items.unshift({
      title: this.state.title,
      description: this.state.description,
      imagePath: this.state.selectedImage,
    });
  };

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Image Link</label>
            <input
              type="text"
              placeholder="Search for something in the search bar and click on it"
              value={this.state.selectedImage}
              onChange={(e) => {
                this.setState({ selectedImage: e.target.value });
              }}
            />
          </div>
          <Link href="/">
            <button
              className="ui button"
              type="submit"
              onClick={(e) => {
                this.onSubmit(e);
              }}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
export default Form