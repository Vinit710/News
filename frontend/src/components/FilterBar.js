import React from 'react';

const FilterBar = () => {
  return (
    <div className="filter-bar my-3">
      <h5>Filter News</h5>
      <div className="d-flex gap-3">
        <select className="form-select">
          <option>Category</option>
          <option>Technology</option>
          <option>Business</option>
        </select>
        <select className="form-select">
          <option>Sort By</option>
          <option>Date</option>
          <option>Popularity</option>
        </select>
        <button className="btn btn-primary">Apply</button>
      </div>
    </div>
  );
};

export default FilterBar;
