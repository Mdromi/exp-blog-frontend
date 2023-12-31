import React from 'react';

const SearchInput: React.FC = () => (
  <div className="form-control">
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered w-24 md:w-auto"
    />
  </div>
);

export default SearchInput;
