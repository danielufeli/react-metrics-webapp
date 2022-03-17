import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import map from './world-map.png';
import map1 from './img2.png';

const Home = () => (
  <>
    <div className="card bg-primary body-bg border-0 rounded-0">
      <div className="row g-0">
        <div className="col-6">
          <img className="w-100" src={map1} alt="" />
        </div>
        <div className="col-6 align-self-center">
          <div className="card-body">
            <h5 className="card-title text-white">EUROPE</h5>
            <p className="card-text text-white">6,458 Views</p>
          </div>
        </div>
      </div>
    </div>
    <div className="body-bg text-white px-2">
      <strong>
        STATS BY COUNTRY
      </strong>
    </div>
    <div>
      <div className="row row-cols-2 row-cols-md-3 g-4 m-0">
        <div className="col p-0 m-0">
          <NavLink to="/details">
            <div className="card bg-primary body-bg border-0 rounded-0">
              <img className="w-100" src={map} alt="" />
              <div className="card-img-overlay text-end">
                <h5 className="card-title text-white"><FaRegArrowAltCircleRight /></h5>
                <div className="card-text text-white align-bottom mt-5">
                  <h4>CZECH REPUBLIC</h4>
                  <strong>954</strong>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col p-0 m-0">
          <div className="card bg-primary body-bg border-0 rounded-0">
            <img className="w-100" src={map} alt="" />
            <div className="card-img-overlay text-end">
              <h5 className="card-title text-white"><FaRegArrowAltCircleRight /></h5>
              <div className="card-text text-white align-bottom mt-5">
                <h4>CZECH REPUBLIC</h4>
                <strong>954</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="card bg-primary body-bg border-0 rounded-0">
            <img className="w-100" src={map} alt="" />
            <div className="card-img-overlay text-end">
              <h5 className="card-title text-white"><FaRegArrowAltCircleRight /></h5>
              <div className="card-text text-white align-bottom mt-5">
                <h4>CZECH REPUBLIC</h4>
                <strong>954</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="card bg-primary body-bg border-0 rounded-0">
            <img className="w-100" src={map} alt="" />
            <div className="card-img-overlay text-end">
              <h5 className="card-title text-white"><FaRegArrowAltCircleRight /></h5>
              <div className="card-text text-white align-bottom mt-5">
                <h4>CZECH REPUBLIC</h4>
                <strong>954</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
