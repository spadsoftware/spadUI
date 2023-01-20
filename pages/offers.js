import React from "react";
import Head from "next/head";
import OffersComponent from '../components/offers/offers'

const Offers = () => {
  return (
    <>
      <Head>
        <title>Spad Software | Offers</title>
        <meta name="keyword" content="Offers" />
      </Head>

     <OffersComponent />
    </>
  );
};

export default Offers;