import React from "react";
import Head from "next/head";
import HomeComponent from '../components/home/home'

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Spad Software | Home</title>
        <link rel="shortcut icon" href="favicon.jpg" />
        <meta name="keyword" content="Home" />
       
      </Head>

     <HomeComponent  pageDetails={props.pageDetails}/>
    </>
  );
};

export default Home;