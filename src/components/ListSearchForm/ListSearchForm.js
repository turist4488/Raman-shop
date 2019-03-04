import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListSearchForm.scss';

class ListSearchForm extends Component {
  render() {
    const { query, handleInput, handleSelectBtn } = this.props;
    return (
      <div className="search-form mx-auto justify-content-center w-75 m-3 d-flex align-items-center">
        <div className="w-50 mr-3">
          <input
            className="w-100 px-2 py-1 search-form__input"
            type="text"
            name="list-search"
            id="list-search"
            value={query}
            onChange={handleInput}
            placeholder="Search:"
          />
        </div>
        <div className="search-form__criteria">
          <select
            className="px-2 py-2 bg-transparent search-form__criteria-select"
            name=""
            onChange={handleSelectBtn}
          >
            <option className="search-form__criteria-option" value="alphabetical">Alphabetical</option>
            <option className="search-form__criteria-option" value="newest">Newest</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ListSearchForm;
