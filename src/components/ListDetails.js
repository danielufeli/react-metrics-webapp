import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import map1 from './img2.png';

const ListDetails = () => (
  <>
    <div className="card bg-primary body-bg border-0 rounded-0">
      <div className="row g-0">
        <div className="col-6">
          <img className="w-100" src={map1} alt="" />
        </div>
        <div className="col-6 align-self-center">
          <div className="card-body">
            <h5 className="card-title text-white">CZECH REPUBLIC</h5>
            <p className="card-text text-white">954 Views</p>
          </div>
        </div>
      </div>
    </div>
    <div className="tab-bg text-white p-2">
      <strong>
        CITY/TOWN BREAKDOWN
      </strong>
    </div>
    <div>
      <div className="row row-cols-1 row-cols-md-12 g-4 m-0">
        <div className="col p-0 m-0">
          <div className="card bg-primary body-bg border-0 rounded-0">
            <div className="row text-white p-0 m-0 body-bg">
              <div className="col-6 mt-4 mb-4">456 views</div>
              <div className="col-6 mt-4 mb-4 text-end">
                456 views
                <span className="mx-3"><FaRegArrowAltCircleRight /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="card bg-primary tab-bg border-0 rounded-0">
            <div className="row text-white p-0 m-0 tab-bg">
              <div className="col-6 mt-4 mb-4">456 views</div>
              <div className="col-6 mt-4 mb-4 text-end">
                456 views
                <span className="mx-3"><FaRegArrowAltCircleRight /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="card bg-primary body-bg border-0 rounded-0">
            <div className="row text-white p-0 m-0 body-bg">
              <div className="col-6 mt-4 mb-4">456 views</div>
              <div className="col-6 mt-4 mb-4 text-end">
                456 views
                <span className="mx-3"><FaRegArrowAltCircleRight /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="card bg-primary tab-bg border-0 rounded-0">
            <div className="row text-white p-0 m-0 tab-bg">
              <div className="col-6 mt-4 mb-4">456 views</div>
              <div className="col-6 mt-4 mb-4 text-end">
                456 views
                <span className="mx-3"><FaRegArrowAltCircleRight /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="card bg-primary body-bg border-0 rounded-0">
            <div className="row text-white p-0 m-0 body-bg">
              <div className="col-6 mt-4 mb-4">456 views</div>
              <div className="col-6 mt-4 mb-4 text-end">
                456 views
                <span className="mx-3"><FaRegArrowAltCircleRight /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ListDetails;
