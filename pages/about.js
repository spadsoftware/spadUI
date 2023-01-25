import React from "react";
import Head from "next/head";
import AboutComponent from '../components/about/about';
import Script from 'next/script'

const About = () => {
  return (
    <>
      <Head>
        <title>Spad Software | About</title>
        <link rel="shortcut icon" href="favicon.jpg" />

        <meta name="keyword" content="about" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HM2WBMT0Q0"></Script>
      <Script>
      {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HM2WBMT0Q0');
        `}
      </Script>
     <AboutComponent />
    </>
  );
};

export default About;