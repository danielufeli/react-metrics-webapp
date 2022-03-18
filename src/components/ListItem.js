import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import map from './world-map.png';

const ListItem = ({ country }) => {
  const { id, name, totalConfirmedCases } = country;
  return (
    <>
      <div className="col p-0 m-0" id={id}>
        <NavLink to={`/details/${name}`}>
          <div className={id % 2 === 0 ? 'card border-0 rounded-0 body-bg' : 'card border-0 rounded-0 tab-bg'}>
            <img className="img-fluid" src={map} alt="" />
            <div className="card-img-overlay text-end">
              <h5 className="card-title text-white"><FaRegArrowAltCircleRight /></h5>
              <div className="card-text text-white align-bottom mt-5">
                <h4>{name}</h4>
                <strong>{totalConfirmedCases}</strong>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

ListItem.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
};

export default ListItem;
