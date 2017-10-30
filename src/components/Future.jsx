// @flow

import React from 'react';

export default () => (
  <section className="section" id="future">
    <div className="container">
      <header className="section-header">
        <small>The Future</small>
        <h2>Coming Soon</h2>
        <hr />
        <p className="lead">
              We’re working hard to bring new features online for you
              in the next couple of months!
        </p>
      </header>

      <div className="row gap-y">

        <div className="col-12 col-md-4 feature-1">
          <p className="feature-icon text-warning"><i className="icon-linegraph" /></p>
          <h5>Employee Options</h5>
          <p>Enter your employee incentive plan and track it over time.</p>
        </div>


        <div className="col-12 col-md-4 feature-1">
          <p className="feature-icon text-danger"><i className="icon-telescope" /></p>
          <h5>Investment Scenarios</h5>
          <p>
                Plan investment rounds by simulating their effect on the cap table.
          </p>
        </div>


        <div className="col-12 col-md-4 feature-1">
          <p className="feature-icon text-success"><i className="icon-profile-female" /></p>
          <h5>Shareholder Login</h5>
          <p>
                Your shareholders can see all their investments anytime on Ledgy.
          </p>
        </div>


      </div>
    </div>
  </section>

);
