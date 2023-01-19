import React from "react";
import Head from "next/head";
import AboutComponent from '../components/about/about';

const About = () => {
  return (
    <>
      <Head>
        <title>Next | About</title>
        <meta name="keyword" content="about" />
      </Head>

     <AboutComponent />
    </>
  );
};

export default About;