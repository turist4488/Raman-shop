import React, { Component } from 'react';

class ListSearchForm extends Component {
  render() {
    const { query, handleInput, handleSelectBtn} = this.props;
    return (
      <div className="col-md-2">
        <div>
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
          <label htmlFor="list-sort">Sort by: </label>
          <select
            name=""
            id="list-sort"
            onChange={handleSelectBtn}
          >
            <option value="alphabetical">Newest</option>
            <option value="newest">Alphabetical</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ListSearchForm;
