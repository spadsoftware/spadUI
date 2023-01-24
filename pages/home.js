import React from "react";
import Head from "next/head";
import HomeComponent from '../components/home/home'

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Web Design Company in Bangalore | Website Development Company in Bangalore | Best Training & placement company in Bangalore- Spad Software</title>
        <link rel="shortcut icon" href="favicon.jpg" />
        <meta name="keyword" content="Home" />
       
      </Head>

     <HomeComponent  pageDetails={props.pageDetails}/>
    </>
  );
};

export default Home;