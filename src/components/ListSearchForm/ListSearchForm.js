import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListSearchForm extends Component {
  render() {
    const { query, handleInput, handleSelectBtn } = this.props;
    return (
      <div className="mx-auto justify-content-center w-75 m-3 d-flex align-items-center">
        <div className="w-50 mr-3">
          <input
            className="w-100 px-2 py-1"
            type="text"
            name="list-search"
            id="list-search"
            value={query}
            onChange={handleInput}
            placeholder="Search:"
          />
        </div>
        <div className="">
          <label className="mr-2 my-0" htmlFor="list-sort">Sort by: </label>
          <select className="px-2 py-1 bg-transparent" name="" id="list-sort" onChange={handleSelectBtn}>
            <option value="alphabetical">Alphabetical</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ListSearchForm;
