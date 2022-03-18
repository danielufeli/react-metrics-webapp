import React from 'react';
import { PropTypes } from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Stats = ({ id, title, stat }) => (
  <>
    <div className="col p-0 m-0">
      <div className={id % 2 === 0 ? 'card bg-primary body-bg border-0 rounded-0' : 'card bg-primary tab-bg border-0 rounded-0'}>
        <div className={id % 2 === 0 ? 'row text-white p-0 m-0 body-bg' : 'row text-white p-0 m-0 tab-bg'}>
          <div className="col-6 mt-4 mb-4">{title}</div>
          <div className="col-6 mt-4 mb-4 text-end">
            {stat}
            <span className="mx-3"><FaRegArrowAltCircleRight /></span>
          </div>
        </div>
      </div>
    </div>
  </>
);

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Stats;
