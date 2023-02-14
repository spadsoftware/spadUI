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

      <section id="what_we_do" className={classes.section_wwd}>
        <div>
          <div className={classes.aboutspan}>What we do</div>

          <h3 className={classes.section__subtlt} >Want to connect with our experts to
            avail the service?

            <p className={classes.section_wwd_lt}>Let's talk</p>
          </h3>
        </div>
        <Box>
          <Masonry columns={{ xs: 1, sm: 1, md: 4 }} spacing={2}>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>UI / UX Design and Web Development</h3>
                  <p className={classes.items_lists}>Elevate your online presence with SPAD Software Consultancy Services Private Limited, where creativity meets technology. Our team of UI/UX designers and web developers combine their expertise to bring your ideas to life, delivering intuitive and engaging websites that set you apart from the competition. From wireframing to launch, we are dedicated to providing a seamless and effective user experience. Discover the 'Design Revolution' of your website today with SPAD.</p>
                  <Link href={`whatWeDo/ui`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>

            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}> Mobile Development</h3>
                  <p className={classes.items_lists}>Unleash the power of mobility with SPAD Software Consultancy Services Private Limited. Our team of skilled mobile developers creates innovative and user-friendly mobile apps that bring your ideas to life. Whether you need a native app for iOS or Android, or a cross-platform solution, we have the expertise to deliver. From concept to launch, we work with you every step of the way to ensure your success</p>
                  <Link href={`whatWeDo/mb`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>CMS Website Development</h3>
                  <p className={classes.items_lists}>Our team of expert developers specializes in creating custom CMS websites that are both beautiful and functional. Whether you need a simple brochure website or a complex e-commerce platform, we have the skills and experience to deliver. With our user-friendly CMS, you'll have complete control over your website's content, giving you the flexibility to make updates and changes with ease. Join the 'CMS Revolution' with SPAD today.</p>
                  <Link href={`whatWeDo/cms`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>

            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>WordPress</h3>
                  <p className={classes.items_lists}>Make a lasting impression with SPAD Software Consultancy Services Private Limited. Our team of WordPress experts specializes in creating custom WordPress websites that are both visually stunning and user-friendly. Whether you need a simple blog or a complex e-commerce platform, we have the skills and experience to deliver. With our custom WordPress solutions, you'll have the flexibility and control you need to manage your online presence with ease. Join the 'WordPress Wave' with SPAD today.</p>
                  <Link href={`whatWeDo/wp`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>Digital Marketing</h3>
                  <p className={classes.items_lists}>
                  Maximize your online potential with SPAD Software Consultancy Services Private Limited. Our team of digital marketing experts leverages the latest techniques to drive traffic, increase conversions, and grow your business. From search engine optimization (SEO) to social media marketing, we have the skills and experience to deliver results. Join the 'Marketing Momentum' with SPAD and take your online presence to the next level.
                  </p>
                  <Link href={`whatWeDo/dm`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}> Social Media Marketing</h3>
                  <p className={classes.items_lists}>Connect with your audience like never before with SPAD Software Consultancy Services Private Limited. Our team of social media marketing experts creates and implements custom strategies that build brand awareness, engage your followers, and drive results. From Facebook to Instagram, we have the knowledge and experience to deliver a consistent and effective presence across all of your social media platforms. Join the 'Social Surge' with SPAD and see your online presence soar.</p>
                  <Link href={`whatWeDo/smm`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>Search Engine Optimization</h3>
                  <p className={classes.items_lists}> Rise to the top with SPAD Software Consultancy Services Private Limited. Our team of SEO experts uses the latest techniques to optimize your website and improve your search engine rankings. From keyword research to on-page optimization, we have the skills and experience to deliver results. With our effective SEO strategies, you'll gain more visibility, attract more traffic, and ultimately, grow your business. Join the 'SEO Summit' with SPAD and see your online presence soar.
                  </p>
                  <Link href={`whatWeDo/seo`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>

            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>Branding</h3>
                  <p className={classes.items_lists}>
                  Bring your brand to life with SPAD's powerful promotion strategies - Reach your target audience and drive business growth like never before.
                  Unleash the power of your brand with a strong and unforgettable identity - Create a lasting impression with our expert branding solutions.</p>
                  <Link href={`whatWeDo/bg`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>Payment Gateway Integration</h3>
                  <p className={classes.items_lists}>Payment gateway integration refers to the process of connecting an online store or a website to a payment gateway. A payment gateway is a secure online platform that facilitates the transfer of payment information between a website and a acquiring bank, which is the bank that processes credit card transactions on behalf of the merchant. </p>
                  <Link href={`whatWeDo/pgi`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}> Website Maintenanace & support</h3>
                  <p className={classes.items_lists}>Keep your website up and running with SPAD's expert maintenance and support services - Trust us to keep your online presence in top shape.</p>
                  <Link href={`whatWeDo/wms`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>Website Redesigning</h3>
                  <p className={classes.items_lists}>Revamp your online presence with SPAD's expert website redesigning services - Experience the power of a visually stunning and user-friendly website!</p>
                  <Link href={`whatWeDo/wrd`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>
            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>RealTime Training & Consultancy</h3>
                  <p className={classes.items_lists}>Accelerate your growth with SPAD's real-time training and consultancy services - Empower your team with the knowledge and skills they need to succeed.</p>

                </div>
              </div>
            </Item>

            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>Cyber security</h3>
                  <p className={classes.items_lists}>
                  Regular software updates and patches to address any security vulnerabilities in the website.
                  Reduce the risk of attacks such as SQL injection, cross-site scripting, and privilege escalation.
                  Use of secure protocols such as HTTPS, SSL, and TLS.
                  Use of strong and unique passwords, two-factor authentication, and account lockout policies to protect user accounts.

Implementation of firewalls, intrusion detection systems, and other security measures to prevent attacks and unauthorized access.
                  </p>
                  <Link href={`whatWeDo/cs`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>

            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>Web Application Firewall</h3>
                  <p className={classes.items_lists}>
                  A Web Application Firewall (WAF) is a security solution designed to protect web applications from common web-based attacks.
                  A WAF can block malicious traffic before it reaches the web application, preventing attacks such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).
                  A WAF can be configured to block traffic from known bad IP addresses or countries, reducing the risk of attacks from specific regions or sources.

A WAF can provide detailed logging and reporting capabilities, allowing website owners to monitor traffic and identify potential security incidents.
                  </p>
                  <Link href={`whatWeDo/waf`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>

            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>Cloud computing & Hosting</h3>
                  <p className={classes.items_lists}>
                  Cloud computing can be used for a wide range of purposes such as data storage and processing, application development and testing, and more. Cloud hosting is typically used for web hosting, e-commerce, software as a service (SaaS), and other web-based applications.
                  Cloud computing can be provided through various models such as public cloud, private cloud, and hybrid cloud, each with its own set of benefits and considerations. Cloud hosting is typically provided through a public cloud model, where users pay for the resources they use on a pay-as-you-go basis.

                  </p>
                  <Link href={`whatWeDo/ch`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
                </div>
              </div>
            </Item>

            <Item className={classes.masonry_item}>
              <div className={classes.item_list}>
                <div>
                  <h3 className={classes.masonry_item_title}>E-commerce Application</h3>
                  <p className={classes.items_lists}>
                  E-commerce applications are web-based applications designed to facilitate online buying and selling of goods or services.
                  Key Feature:Product Catalog,Shopping Cart,Payment Gateway Integration,User Registration and Login,Order Management,Security.

                  </p>
                  <Link href={`whatWeDo/ecom`} key='1'>
                    <span className={classes.read_more}>Read More</span> 
                  </Link>
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