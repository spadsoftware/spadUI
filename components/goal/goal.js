import React from 'react'
import classes from './goal.module.css';
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

const goalComponent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
    <>
    {/* <Cursor isGelly={true} 
  cursorBackgrounColor='#fcf8f8c9'/> */}
    <section id="about" className= {classes.section_goal}>
      <div className= {classes.section__btm}>
    <div className= {classes.section_goal}>
    {/* <Image
                  src={`/images/title_header/hdrBtm.png`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                /> */}
              <div>Our Goal</div>  
                <Image
                  src={`/images/title_header/hdrBtm.png`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                />
                </div>
  
   
   <div className= {classes.section__subtlt}>Our Goal is to reach our mission,vision,
    <span className= {classes.section__hght}>
    why to choose us?
    </span>
   
    
    </div>
   </div>
   <Box style={{justifyContent: "center"}}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 138,
          height: 108,
        },
        
      }}
    >
 
 <Paper elevation={1} >
 <Image 
src={`/images/title_header/maintainance.svg`}
alt='Spad Software Log about'
width={56}
height={56}
/>
<span> Maintenance</span>

 </Paper>
 <Paper elevation={1} >
 <Image 
src={`/images/title_header/ontime-delivery.svg`}
alt='Spad Software Log about'
width={128}
height={56}
/>
<span> On-time
Delivery</span>
 </Paper>
 <Paper elevation={1} >
 <Image 
src={`/images/title_header/result.svg`}
alt='Spad Software Log about'
width={128}
height={56}
/>
<span> Result
Oriented</span>
 </Paper>
 <Paper elevation={1} >
 <Image 
src={`/images/title_header/secureCoding.svg`}
alt='Spad Software Secure
Coding about'
width={128}
height={56}
/>
<span> Secure
Coding</span>

 </Paper>
 <Paper elevation={1} >
 <Image 
src={`/images/title_header/support.svg`}
alt='Spad Software Log about'
width={128}
height={56}
/>
<span> 24/7 Email
Support</span>

 </Paper>
 <Paper elevation={1} >
 <Image 
src={`/images/title_header/team.svg`}
alt='Spad Software Log about'
width={128}
height={56}
/>
<span> Dedicated
Team</span>

 </Paper>
 <Paper elevation={1} >
 <Image 
src={`/images/title_header/web-protection.svg`}
alt='Spad Software Log about'
width={128}
height={56}
/>
<span> Advanced
Web Protection</span>
 </Paper>
 <Paper elevation={1} >
 <Image 
src={`/images/title_header/client-satisfaction.svg`}
alt='Spad Software Log about'
width={128}
height={56}
/>
<span> 100% Client
Satisfaction</span>

 </Paper>
    </Box>
    
<Grid item  className={classes.goal_mission_box}>
          <Item className={classes.goal_mission}>  
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 2, md: 3 }} 
           columnSpacing={{ xs: 1, sm: 1, md: 1}}>
          <Grid item xs={4} sm={4} md={4}>

            <div className={classes.containerWrapper}>
            <h3 className={classes.containerHdr}>Our Mission</h3>
            <div className={classes.svcs_img}>
          <Image className={classes.about_mission}
                  src={`/images/about/clock.png`}
                  alt='Spad Software Log about'
                  width={256}
                  height={56}
                />
                    <span className={classes.card_mission_icon_text}>  &nbsp; &nbsp;On Time Delivery
                     </span>

   </div>

   
          
            <div className={classes.card_align}>
                <p className="card_text">
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;
 Provide exceptional people who deliver extraordinary results. </p>
                <p className="card_text"> 
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;
 Provide innovative software solutions for excellence and enterprise compliance. </p>
              </div>
    </div>
        </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <div className={classes.containerWrapper}>
            <h3 className={classes.containerHdr}>Why to Choose Us?</h3>
            <div className={classes.svcs_img}>
 <Image className={classes.about_ac}
                  src={`/images/about/ac.png`}
                  alt='Spad Software Log about'
                  width={256}
                  height={56}
                />
                    <span className={classes.card_missionCost_icon_text}>  &nbsp; &nbsp;Affordable Costing  </span>


   </div>
           
   
              <div  className={classes.card_align}>
                <p className={classes.card_text1}>
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;Bridging The Gap Between Business And Technology. </p>
                <p className={classes.card_text1}>  
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;SPAD Software is committed to helping its students to reach their goals and their training experiences, 
                by providing the innovative surroundings and faculties </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <div className={classes.containerWrapper}>
            <h3 className={classes.containerHdr}>Our Vision</h3>
            <div className={classes.svcs_img}>
  <Image className={classes.about_choose}
                  src={`/images/about/clock.png`}
                  alt='Spad Software Log about'
                  width={256}
                  height={56}
                />
                    <span className={classes.card_tc_icon_text}> &nbsp;  Trusted Relationship
                     </span>
   </div>
             

              <div className={classes.card_align}>
                <p className="card_text">
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;
Deliver world-class hiring solutions that anticipate and fulfill our client’s workforce needs.  </p>
                <p className="card_text">  
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;Our vision is to become businesses’ first choice when it comes to software development and maintenance.</p>

              </div>
            </div>
          </Grid>
        </Grid>
            </Item>

           
    
            </Grid>

      </section>
    </>
  )
}

export default goalComponent