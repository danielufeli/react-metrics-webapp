import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import map1 from './img2.png';
import ListItem from './ListItem';

const Home = () => {
  const [searchCountries, setSearchCountries] = useState('');
  const countries = useSelector((state) => state.countries);
  const filteredCountries = countries.filter((country) => Object
    .values(country)
    .join('')
    .toLowerCase()
    .includes(searchCountries.toLowerCase()));

  return (
    <>
      <div className="card bg-primary body-bg border-0 rounded-0">
        <div className="row g-0">
          <div className="col-6">
            <img className="w-100" src={map1} alt="" />
          </div>
          <div className="col-6 align-self-center">
            <div className="card-body">
              <h5 className="card-title text-white">WORLD</h5>
              <p className="card-text text-white">
                {countries.length > 1 ? countries[0].totalGlobalCases : ''}
                {' '}
                Cases
              </p>
            </div>
          </div>
          <form className="form px-5 mb-3">
            <input value={searchCountries} onChange={(e) => setSearchCountries(e.target.value)} className="form-control w-100" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
      <div className="body-bg text-white px-2 tab-bg">
        <strong>
          COVID-19 CASES BY COUNTRY
        </strong>
      </div>
      <div>
        <div className="row row-cols-2 row-cols-md-6 g-4 m-0">
          {
            filteredCountries.map((country) => (
              <ListItem
                country={country}
                key={country.id}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Home;
