import React from "react";
import Head from "next/head";
import WeServeComponent from '../components/weServe/weServe'

const WeServe = () => {
  return (
    <>
      <Head>
        <title>Spad Software | WeServe</title>
        <meta name="keyword" content="WeServe" />
      </Head>

     <WeServeComponent />
    </>
  );
};

export default WeServe;