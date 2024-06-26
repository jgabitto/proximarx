'use client'; // This is a client component 👈🏽

/* eslint-disable react/display-name */
import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import createCache from '@emotion/cache';
// import createEmotionServer from '@emotion/server/create-instance';

import Page from '../components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

/* eslint-disable react/prop-types */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="./favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="ProximaRX | Compound Pharmacy" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ProximaRX | Compound Pharmacy" />
        <meta
          property="og:description"
          content="ProximaRX | Compound Pharmacy"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <GoogleAnalytics gaId="G-0EMZRVZ7LZ" />
      </head>
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
