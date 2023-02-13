import React from 'react'
import classes from './about.module.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { loadCSS } from 'fg-loadcss';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import SouthIcon from '@mui/icons-material/South';
import StarIcon from '@mui/icons-material/Star';

import Image from 'next/image';
const { useState, useEffect } = React;
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const AboutComponent = () => {
  return (
   <>

    <section id="about" className= {classes.section_about}>
      <div className= {classes.section__btm}>
      <div className= {classes.section_aboutspan}> About <span >Us</span> </div>
                 
              <span>
                {/* <Image
                  src={`/images/title_header/about_hdr.png`}
                  alt='Spad Software About us'
                  width={50}
                  height={50}
                /> */}
              </span>
       <h3 className= {classes.section_about1}>What Makes Us One of The Top Rated Web Development & Digital Marketing Company <br /> 
      In Bangalore, India.</h3>
      </div>
      <Box sx={{ width: '100%' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
        <Grid item xs={6} className= {classes.solution_cards_box}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
        <Grid item xs={6}  className= {classes.our_solution_category}>
          <Item className= {classes.wrapper2}>
          <div >
            <h3>Development</h3>
            <div className= {classes.about_company} >
          <div className="">
        
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Consultation</span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Software Selection</span>

          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Implementation</span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Project Management </span> 
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      /> Ongoing Support </span>
        

          </div>
          </div>
          </div>


          </Item>
          <Item className= {classes.wrapper3}>
          <div >
            <h3>Benefits</h3>
           <div className= {classes.about_company} >
          <div className="">
        
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Free 3 months Maintanance</span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Dedicated Manager to each Projects</span>

          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Cost & Quality</span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          3 Months Free Digital Marketing </span> 
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Real Time Report Tracking </span>
        

          </div>
          </div>
          </div>
          </Item>
        </Grid>
        <Grid item xs={6} className= {classes.our_solution_category}>
        <Item className= {classes.wrapper2}>
        <div >
            <h3>Strength</h3>
           <div className= {classes.about_company} >
          <div className="">
          {/* <h2 className={classes.test_bold}>Speciality</h2> */}

          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
      Web & Mobile App Developemnt</span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />Digital Marketing & Branding
       </span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />Andriod IOS Hybrid App  </span>

          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />Logo Design & UI/UX Design</span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />CRM,CMS,E-commerce Application</span>
          
          </div>
          </div>
          </div>
          </Item>
          <Item className= {classes.wrapper3}>
            <h3>Services</h3>
           <div className= {classes.about_company} >
         
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
                    Web Development</span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
                    Mobile Development </span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Digital Marketing & Branding</span>
          <span className={classes.test_bold}>
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Software Training & Consultancy</span>
          <span className={classes.test_bold}>   
          <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
          Maintanance & Support </span>
         
          </div>
         
          </Item>
        </Grid>
       
      </Grid>
        </Grid>
        <Grid item xs={6} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <Item className={classes.about_wrapperright1} >  
            <div >
            <h2 >
            <p className={classes.test_bold} 
            style={{justifyContent:"center"}}
            >Our Experts &amp; Clients Lifted us to</p>

              <span  
      className={classes.about_sub_test_bold} >Best</span> 
              Web Design,Branding and Digital Marketing Company in Bangalore</h2>

          
            <p className={classes.cl_brown}>Established in 2022, in Bangalore, India, 
            SPAD Software Consultancy Services Private Limited was founded on the principles of providing outstanding customer service and delivering results that exceed expectations. With a team of highly-skilled and experienced professionals, the company is dedicated to helping businesses succeed in today's competitive marketplace by providing innovative, cutting-edge solutions that drive growth and success.
         </p>
          <p className={classes.cl_brown}>A company’s website design plays a key role in providing the first impression to the customers.
             
         
          Whether you're looking for help with a new website design,Mobile App development, a complex web development project, or a comprehensive digital marketing strategy, 
             
              SPAD Software Consultancy Services Private Limited has the expertise and experience to help you achieve your goals

              We involve providing expert advice and guidance to clients on how to effectively use technology to meet their business needs
              With a commitment to quality, 
              &nbsp;<span style={{borderBottom:'3px solid #800000',color:'#800000'}}>  SPAD Software Consultancy Services Private Limited is the right partner for businesses looking to succeed in today's digital world.
              </span>  &nbsp;
Thank you for considering SPAD Software Consultancy Services Private Limited for your software needs. We look forward to the opportunity to work with you and help bring your vision to life.

</p>
              
            </div>
            </Item>
            </Grid>
            {/* <Grid item xs={12}>
          <Item className={classes.about_wrapperright2}>  
          <Grid container  columnSpacing={{ xs: 1, sm: 1, md: 1}}>
          <Grid item xs={6}>
            <Item className={classes.containerWrapper}>
            <span>Our Mission</span>
            
            <div >
                  <div className={classes.card_text} >
                  <Image className={classes.about_mission}
                  src={`/images/about/clock.png`}
                  alt='Spad Software Log about'
                  width={256}
                  height={56}
                />
                    <span className={classes.card_mission_icon_text}>On Time Delivery &nbsp; &nbsp;
                     </span>
                   
                   </div>
                   <div className={classes.card_text} >
                 
                    <Image className={classes.about_ac}
                  src={`/images/about/ac.png`}
                  alt='Spad Software Log about'
                  width={256}
                  height={56}
                />
                    <span className={classes.card_missionCost_icon_text}>Affordable Costing  </span>

                   </div>
                   
                   
                <p className="card_text">Provide exceptional people who deliver extraordinary results. </p>
                <p className="card_text"> Provide innovative software solutions for excellence and enterprise compliance. </p>
              </div>


    </Item>
        </Grid>
          <Grid item xs={6}>

            
            <Item className={classes.containerWrapper}>
              
             <span>Why to Choose Us?</span> 

              <div >
                  <div className={classes.card_text} >
                  <Image className={classes.about_choose}
                  src={`/images/about/clock.png`}
                  alt='Spad Software Log about'
                  width={256}
                  height={56}
                />
                    <span className={classes.card_tc_icon_text}>Trusted Relationship &nbsp; &nbsp;
                     </span>
                   
                   </div>
                   
                <p className="card_text">BRIDGING THE GAP BETWEEN BUSINESS AND TECHNOLOGY. </p>
                <p className="card_text">  SPAD Software is committed to helping its students to reach their goals and their training experiences, 
                by providing the innovative surroundings and faculties </p>
              </div>
            </Item>
          </Grid>
        </Grid>
          
            </Item>
            </Grid> */}
            </Grid>
        </Grid>

      </Grid>
    </Box>
    
    </section>
   </>
  )
}

export default AboutComponent