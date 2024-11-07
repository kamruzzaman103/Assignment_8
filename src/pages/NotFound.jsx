import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>{`Gadget Heaven | No data found`}</title>
      </Helmet>
      <div className="not-found hero bg-base-200 max-w-[400px] m-auto my-14 shadow-slate-700 rounded-xl">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <button className="btn btn-primary rounded-full mt-5 text-[14px] ">
              <Link to="/">Go Back to Home</Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
