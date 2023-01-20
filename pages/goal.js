import React from "react";
import Head from "next/head";
import GoalComponent from '../components/goal/goal'

const Goal = () => {
  return (
    <>
      <Head>
        <title>Spad Software | Goal</title>
        <meta name="keyword" content="Goal" />
      </Head>

     <GoalComponent />
    </>
  );
};

export default Goal;