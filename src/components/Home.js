import React from 'react';
import { useSelector } from 'react-redux';
import map1 from './img2.png';
import ListItem from './ListItem';

const Home = () => {
  const countries = useSelector((state) => state.countries);
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
            countries.map((country) => (
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
