import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Page from '../components/Page';
import { GoogleAnalytics } from '@next/third-parties/google';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          #1 Pharmacy for Workers&apos; Compensation & Personal Injury | Your
          Prescription for Health Begins With Us
        </title>
      </Head>
      <Page>
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-0EMZRVZ7LZ" />
      </Page>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
