import React from "react";
import Head from "next/head";
import FaqComponent from '../components/faq/faq'
const Faq = () => {
  return (
    <>
      <Head>
        <title>Spad Software | Faq</title>
        <meta name="keyword" content="Faq" />
      </Head>

     <FaqComponent />
    </>
  );
};

export default Faq;