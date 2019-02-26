import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListSearchForm extends Component {
  render() {
    const { query, handleInput, handleSelectBtn } = this.props;
    return (
      <div className="col-md-2 m-3">
        <div className="mb-3">
          <label htmlFor="list-search">Search:</label>
          <input
            type="text"
            name="list-search"
            id="list-search"
            value={query}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className="mr-3" htmlFor="list-sort">Sort by: </label>
          <select name="" id="list-sort" onChange={handleSelectBtn}>
            <option value="alphabetical">Alphabetical</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ListSearchForm;
