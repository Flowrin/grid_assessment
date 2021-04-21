import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

import Form from './Form';
class Insert extends React.Component {
  state = { images: [], selectedImage: '' };
  getLink = (link) => {
    this.setState({ selectedImage: link });
  };

  onSearchSubmit = async (term) => {
    const perPage = 15;
    const res = await unsplash.get('/search/photos', {
      params: { query: term, per_page: perPage },
    });
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <Form imageLink={this.state.selectedImage} />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} imageLink={this.getLink} />
      </div>
    );
  }
}
export default Insert;
