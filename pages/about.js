import React from "react";
import Head from "next/head";
import AboutComponent from '../components/about/about';

const About = () => {
  return (
    <>
      <Head>
        <title>Spad Software | About</title>
        <link rel="shortcut icon" href="favicon.jpg" />

        <meta name="keyword" content="about" />
      </Head>

     <AboutComponent />
    </>
  );
};

export default About;