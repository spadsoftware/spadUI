import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import Home from  './home'

import About from  './about'
import WhatWeDo from  './whatWeDo'
import Goal from  './goal'
import HowItWork from  './howItWork'
import Services from  './services'
import Offers from  './offers'
import Faq from  './faq'
import Techno from './techno'
import Events from  './events'
import ContactUs from  './contactUs'
import Image from 'next/image';
import Footer from  './footer'
import Benefits from  './benefits'
import MoneyBack from './moneyBack'
import Script from 'next/script'

import PushNotificationLayout from "../components/PushNotificationLayout";

function HomePage(props) {
  return (
    <Fragment>
      <link rel="shortcut icon" href="favicon.jpg" />
      <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Web Design Company in Bangalore | Website Development Company in Bangalore | Best Training & placement company in Bangalore- Spad Software</title>
      <meta name="title" content="Web Design Company in Bangalore | Website Development Company in Bangalore | Best Training & placement company in Bangalore- Spad Software" />
      <meta name="description" content="Top Web Design & Development Company in Bangalore. Our expert team of website developers creates high quality websites and digital marketing. "  />

      <meta property="og:type" content="website"  />
      <meta property="og:url" content="https://www.spadsoftware.com/"  />
      <meta property="og:title" content="Web Design Company in Bangalore | Website Development Company in Bangalore | Best Training & placement company in Bangalore- Spad Software"  />
      <meta property="og:description" content="Top Web Design & Development Company in Bangalore. Our expert team of website developers creates high quality websites and digital marketing. "  />
      <meta property="og:image" content="https://www.spadsoftware.com/images/logo/spadLogov1.jpg"  />

      <meta property="twitter:card" content="summary_large_image"  />
      <meta property="twitter:url" content="https://www.spadsoftware.com/"  />
      <meta property="twitter:title" content="Web Design Company in Bangalore | Website Development Company in Bangalore | Best Training & placement company in Bangalore- Spad Software"  />
      <meta property="twitter:description" content="Top Web Design & Development Company in Bangalore. Our expert team of website developers creates high quality websites and digital marketing. "  />
      <meta property="twitter:image" content="https://www.spadsoftware.com/images/logo/spadLogov1.jpg"  />
     
     



      </Head>
      <PushNotificationLayout>
      <Home pageDetails={props.pageDetails}/>

    </PushNotificationLayout>

      <About />
      <Goal />
      <HowItWork />
      <WhatWeDo />
      <Techno />
      <Services />
     
      <MoneyBack />
      
      <Faq />
      
      <Footer />
      {/* 
      
      
       
   
  

      
      */}
           {/* <Goal />
         <WeServe /> */}
        {/* <Benefits /> */}
          {/* <Offers /> */}
          {/* <Events />
      <ContactUs /> */}

      {/* <Hero />
      <FeaturedPosts posts={props.posts} /> */}
     
    </Fragment>
  );
}

// async function getPageDetails(contactDetails) {
//   const getPageresponse = await fetch('http://127.0.0.1:8080/pages').
//   then(response => response.json());
//   console.log(getPageresponse);

//   if (getPageresponse.status!=200) {
//     throw new Error('Something went wrong!');
//   }
//   return getPageresponse;
// }



export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  // const response = await fetch("http://127.0.0.1:8080/pages");

  // const json = await response.json();
  return {
    props: { pageDetails: "test" },
  };
};




export default HomePage;
