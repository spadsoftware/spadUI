import React from "react";
import Head from "next/head";
import BenefitsComponent from '../components/benefits/benefits';

const Benefits = () => {
  return (
    <>
      <Head>
        <title>Next | Benefits</title>
        <meta name="keyword" content="Benefits" />
      </Head>
      <BenefitsComponent />
    </>
  );
};

export default Benefits;