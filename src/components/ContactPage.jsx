// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';

const Header = () => (
  <header className="header text-white bg-ledgy">
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1><Trans>Let’s Get In Touch</Trans></h1>
          <p>
            <Trans>
              Here are the ways you can contact us with any questions you have
            </Trans>
          </p>
        </div>
      </div>
    </div>
  </header>
);

class Map extends React.Component<{}> {
  componentDidMount() {
    if (window.page && window.google) {
      window.page.initMap();
    }
  }
  render() {
    return (<div
      id="map"
      className="h-400"
      data-provide="map"
      data-lat="47.3627638"
      data-lng="8.5579592"
      data-marker-lat="47.3627638"
      data-marker-lng="8.5579592"
      data-zoom="14"
    />);
  }
}

const IndexPage = (props: Object) => {
  const { i18n } = props;
  return (
    <div>
      <Header {...props} />

      <main className="main-content">

        <div className="section">
          <div className="container">

            <div className="row gap-y">
              <div className="col-12 col-md-6">

                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="form-group">
                    <input className="form-control form-control-lg" type="text" name="name" placeholder={i18n.t`Your name`} />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" type="email" name="email" placeholder={i18n.t`Your email`} />
                  </div>

                  <div className="form-group">
                    <textarea className="form-control form-control-lg" name="message" rows="4" placeholder={i18n.t`Your message`} />
                  </div>


                  <button className="btn btn-lg btn-primary btn-block" type="submit">{i18n.t`Send enquiry`}</button>
                </form>

              </div>


              <div className="col-12 col-md-5 offset-md-1">
                <div className="bg-gray h-full p-5">
                  <p>
                    <Trans>
                      Give us a call or stop by our door anytime. We
                      will do our best to answer all enquiries
                      within 24 hours on business days.
                    </Trans>
                  </p>

                  <hr className="w-80" />

                  <p className="lead">Ledgy AG<br />Forchstrasse 60<br /><Trans>8008 Zurich, Switzerland</Trans></p>

                  <div>contact@ledgy.com</div>
                  <div>+41 44 585 21 23</div>

                </div>
              </div>
            </div>


          </div>
        </div>

        <Map />
      </main>
    </div>
  );
};

export default withI18n()(IndexPage);
