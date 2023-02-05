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
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

     <HomeComponent  pageDetails={props.pageDetails}/>
    </>
  );
};

export default Home;