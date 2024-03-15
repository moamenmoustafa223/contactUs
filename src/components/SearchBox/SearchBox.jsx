import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const queryObj = {};

    if (search.length > 0) {
      queryObj.search = search;
    }

    const queryString = new URLSearchParams(queryObj).toString();

    if (queryString.length > 0) {
      navigate(`/cars?${queryString}`);
    }else {
      navigate(`/cars`);
    }
  };

  return (
    <>
      <div className={`${styles.SearchBox} input-group `}>
        <input
          type="text"
          className="form-control ps-2 pe-3"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="SEARCH FOR CARS.."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btnCustom btnFilled rounded-end px-3"
          onClick={handleSearch}
          type="button"
          id="button-addon2"
        >
                    <div className={`${styles.icon}`}><i className="fa-solid fa-magnifying-glass"></i></div>
          <div className={`${styles.text}`}>SEARCH</div>

        </button>
      </div>
    </>
  );
};

export default SearchBox;
