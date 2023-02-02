import React from 'react'
import classes from './whatWeDo.module.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { loadCSS } from 'fg-loadcss';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import SouthIcon from '@mui/icons-material/South';
import StarIcon from '@mui/icons-material/Star';
import Grid2 from '@mui/material/Unstable_Grid2'; 
import Image from 'next/image';
const { useState, useEffect } = React;
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import Link from "next/link";

import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const WhatWeDoComponent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  
  return (
    <>
      {/* <Cursor isGelly={true}  cursorBackgrounColor='#fcf8f8c9'/> */}
  
    <section id="what_we_do" className= {classes.section_wwd}>
      <div>
        <div>
          
                <div  >What we do</div>
                <Image
                  src={`/images/title_header/hdrBtm.png`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                /></div>
   
   <div  className= {classes.section__subtlt} >Want to connect with our experts to
      avail the service?
  
   <p className= {classes.section_wwd_lt}>Let's talk</p>
   </div>
   </div>
      <Box   >
      <Masonry columns={{ xs: 1, sm: 1,md:4 }}  spacing={2}>
          <Item >
            <div className= {classes.item_list}>
              <div>
              <h3>UI / UX Design and Web Development</h3>
              <p className= {classes.items_lists}>A stunning design and happy customers? hat’s right. 
              Everything from the right tools, brilliant ideas and high expertise, 
              you are guaranteed to enjoy the finished work that we provide.</p>
              <Link href= {`whatWeDo/ui`} key='1'>
              Read More &nbsp;
              </Link>
          </div>
          </div>
          </Item>
       
          <Item >
          <div className= {classes.item_list1}>
    <div>
    <h3> Mobile Development</h3>
    <p className= {classes.items_lists}>Create a web design which can interact with your database dynamically with a proper source language. Our
      web development team programs an interactive, efficient, user-friendly web page for your visitors. Your
      platform is in our hands! Sweat not!</p>
      <Link href= {`whatWeDo/mb`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>
          </Item>
          <Item >
          <div className= {classes.item_list2}>
    <div>
    <h3>CMS Website Development</h3>
    <p className= {classes.items_lists}>DRIVE your user control with our CMS service; we make our clients website more informative. Stand on
      top in your division with our content customized service</p>
      <Link href= {`whatWeDo/cms`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>

          </Item>
          <Item >
          <div className= {classes.item_list3}>
    <div>
    <h3>WordPress</h3>
    <p className= {classes.items_lists}>The countless themes and iconic features of WordPress development has contributed 
        to the success of various companies. We offer client assistance to help enjoy the
         best of WordPress development.</p>
         <Link href= {`whatWeDo/wp`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>
          </Item>
          <Item >
          <div className= {classes.item_list4}>
    <div>
    <h3>Digital Marketing</h3>
    <p className= {classes.items_lists}> Our Internet Marketing experts knowledge with Search Engine Optimization,Search Engine Marketing, Social Media Optimization, Link Building and Digital Internet Advertising. We are providing affordable online Marketing services to all our clients. We have listed all the Digital Marketing Services in this website. You can go through them and make the right decision of consigning a project with us!</p>
    <Link href= {`whatWeDo/dm`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>
          </Item>
          <Item >
          <div className= {classes.item_list5}>
    <div>
    <h3> Social Media Marketing</h3>
    <p className= {classes.items_lists}>Create a web design which can interact with your database dynamically with a proper source language. Our
      web development team programs an interactive, efficient, user-friendly web page for your visitors. Your
      platform is in our hands! Sweat not!</p>
      <Link href= {`whatWeDo/smm`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>
          </Item>
          <Item >
          <div className= {classes.item_list6}>
    <div>
    <h3>Search Engine Optimization</h3>
    <p className= {classes.items_lists}> Search Engine Optimization is used to show your website in the unpaid search engines (Google, Bing, Yahoo), and improve the ranking of your website. When your website is listed in major search sites, results in letting your content to appear related term in searched on the very first pages.</p>
    <Link href= {`whatWeDo/seo`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>

          </Item>
          <Item >
          <div className= {classes.item_list7}>
    <div>
    <h3>Branding</h3>
    <p className= {classes.items_lists}>Your greatest challenge is to prove to your prospects that you are different and better than any other company. Like many other things in life, when it comes to messages first impressions count. By stating your company’s vision and objectives, you appeal to the brand persona.</p>
    <Link href= {`whatWeDo/bg`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>
          </Item>
          <Item >
          <div className= {classes.item_list8}>
    <div>
    <h3>Payment Gateway Integration</h3>
    <p className= {classes.items_lists}>With e-commerce and online shopping increasing at exponential rates now a days, it is essential that your web store is integrated with a multiple payment gateway. Payment gateway is a service that can be used to process credit card and debit card transactions when accepting online orders from your customers. 
    These payment gateways are provided by different banks and other dedicated Payment Processors. </p>
    <Link href= {`whatWeDo/pgi`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>
          </Item>
          <Item >
          <div className= {classes.item_list9}>
    <div>
    <h3> Website Maintenanace & support</h3>
    <p className= {classes.items_lists}>We are considerate about maintaining the website which is created by the user and update the website to surpass the users’ opponent in any way even such as simple change in text, adding additional complex functionality or tools to the websites.</p>
    <Link href= {`whatWeDo/wms`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>
          </Item>
          <Item >
          <div className= {classes.item_list10}>
    <div>
    <h3>Website Redesigning</h3>
    <p className= {classes.items_lists}> We design and develop different types of splendid websites including Static, E-commerce, customized, dynamic, and content management system etc. Our web development team has great knowledge to create best websites with latest trends in design of web pages.</p>
    <Link href= {`whatWeDo/wrd`} key='1'>
              Read More &nbsp;
              </Link>
    </div>
    </div>
          </Item>
          <Item >
          <div className= {classes.item_list10}>
    <div>
    <h3>RealTime Training & Consultancy</h3>
    <p className= {classes.items_lists}>DRIVE your user control with our CMS service; we make our clients website more informative. Stand on
      top in your division with our content customized service</p>
   
    </div>
    </div>
          </Item>
      </Masonry>
    </Box>




      </section>
    
    
    </>
  )
}


export default WhatWeDoComponent