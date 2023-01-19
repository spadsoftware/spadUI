import React from "react";
import Head from "next/head";
import TechnoComponent from '../components/techno/techno'

const Techno = () => {
  return (
    <>
      <Head>
        <title>Next | Techno</title>
        <meta name="keyword" content="Techno" />
      </Head>

     <TechnoComponent />
    </>
  );
};

export default Techno;