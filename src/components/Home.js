import React, { Component } from 'react';
import ItemList from './ItemList';
import SearchBar from './SearchBar';
import { items } from '../util/items';

class Home extends Component {
  state = {
    items: items,
    searchTerm: '',
    itemsPerPage: 5,
    currentPage: 1,
  };

  onSearchSubmit = (searchTerm) => {
    const result = !searchTerm
      ? items
      : items.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    this.setState({ currentPage: 1 });
    this.setState({ items: result });
  };
  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };
  render() {
    const { items, currentPage, itemsPerPage } = this.state;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item) => item);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ItemList items={renderItems} home={true} />
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </>
    );
  }
}
export default Home;
