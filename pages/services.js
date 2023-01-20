import React from "react";
import Head from "next/head";
import ServicesComponent from '../components/services/services'

const Services = () => {
  return (
    <>
      <Head>
        <title>Spad Software | Services</title>
        <meta name="keyword" content="Services" />
      </Head>

     <ServicesComponent />
    </>
  );
};

export default Services;