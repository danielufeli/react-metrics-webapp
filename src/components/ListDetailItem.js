import React from 'react';
import { PropTypes } from 'prop-types';
import map1 from './img2.png';
import Stats from './Stats';

const ListDetailItem = ({ country }) => {
  const {
    name,
    totalConfirmedCases,
    todayDeaths,
    todayNewConfirmed,
    todayNewDeaths,
    todayNewOpenCases,
    todayNewRecovered,
    todayRecovered,
    yesterdayConfirmed,
    yesterdayDeaths,
    yesterdayOpenCases,
    yesterdayRecovered,
  } = country;
  return (
    <>
      <div className="card bg-primary body-bg border-0 rounded-0">
        <div className="row g-0">
          <div className="col-6">
            <img className="w-100" src={map1} alt="" />
          </div>
          <div className="col-6 align-self-center">
            <div className="card-body">
              <h5 className="card-title text-white">{name}</h5>
              <p className="card-text text-white">
                {`${totalConfirmedCases} Cases`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-bg text-white p-2">
        <strong>
          COVID-19 STATS FOR TODAY
        </strong>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-12 g-4 m-0">
          <Stats id={0} title="Total Confirmed" stat={`${totalConfirmedCases} Cases`} />
          <Stats id={1} title="Total Deaths" stat={`${todayDeaths} Deaths`} />
          <Stats id={2} title="Today New Confirmed" stat={`${todayNewConfirmed} Cases`} />
          <Stats id={3} title="Total New Deaths" stat={`${todayNewDeaths} Deaths`} />
          <Stats id={4} title="Today New Open Cases" stat={`${todayNewOpenCases} Cases`} />
          <Stats id={5} title="Today New Recovered" stat={`${todayNewRecovered} Cases`} />
          <Stats id={6} title="Total Recovered" stat={`${todayRecovered} Cases`} />
          <Stats id={7} title="Yesterday Confirmed" stat={`${yesterdayConfirmed} Cases`} />
          <Stats id={8} title="Yesterday Deaths" stat={`${yesterdayDeaths} Deaths`} />
          <Stats id={9} title="Yesterday Open Cases" stat={`${yesterdayOpenCases} Cases`} />
          <Stats id={10} title="Yesterday Recovered" stat={`${yesterdayRecovered} Cases`} />
        </div>
      </div>
    </>
  );
};

ListDetailItem.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
};

export default ListDetailItem;
