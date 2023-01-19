import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import Home from  './home'

import About from  './about'
import WhatWeDo from  './whatWeDo'
import Goal from  './goal'
import WeServe from  './weServe'
import Services from  './services'
import Offers from  './offers'
import Faq from  './faq'
import Techno from './techno'
import Events from  './events'
import ContactUs from  './contactUs'
import Image from 'next/image';
import Footer from  './footer'
import Benefits from  './benefits'



function HomePage(props) {
  return (
    <Fragment>
      <title>Next | Hone</title>
      <Head>
        <meta name="description" content="Spad software consultancy private limited Offering Online &amp; 
  Classroom Training Courses on AWS, Python, Data Science, Devops, Selenium, ML, AI, RPA, Azure, Digital Marketing,
   Full Stack Developer, Tableau, Java, Angular, Power BI etc. Best Software Training Institute in Chennai &amp; 
   Bangalore .Leading Software Development Company in Bangalore, India. We have core expert for custom Software development,
    Mobile app and Website development,Realtime Training,
    HR services,Top HR Consulting firm,IT-Consulting services,No 1 Placement Agency in Trichy,coimbatore, Chennai, Bangalore
  " />
  <meta name="keywords" content="Software Training Institute,Java Training,Full stack Training,Python Training, 
  Web Design Company, Web Development Company, Website Design Company, Website Development Company, web designing company." />

      </Head>
      <Home pageDetails={props.pageDetails}/>
      <About />
      <Goal />
      <WhatWeDo />
      {/* <Goal />
      <WeServe /> */}
      <Techno />
      {/* <Benefits /> */}
      <Services />
      {/* <Offers /> */}
      <Faq />
      {/* <Events />
      <ContactUs /> */}

      {/* <Hero />
      <FeaturedPosts posts={props.posts} /> */}
        <Footer />


     
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
