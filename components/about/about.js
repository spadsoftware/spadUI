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
    <div className= {classes.section_about}>
    {/* <Image
                  src={`/images/title_header/hdrBtm.png`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                /> */}
               
               <div>
               About <span className={classes.tlt}>Us</span>
                </div> 
    <Image
                  src={`/images/title_header/hdrBtm.png`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                />
                </div>
                 
    <span>
    {/* <Image
                  src={`/images/title_header/about_hdr.png`}
                  alt='Spad Software About us'
                  width={50}
                  height={50}
                /> */}
    </span>
       <div className= {classes.section_about}>What Makes Us One of The Top Rated Web Development 
      and Digital Marketing Company In Bangalore, India.</div>
      </div>
      <Box sx={{ width: '100%' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
        <Grid item xs={6} className= {classes.solution_cards_box}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
        <Grid item xs={6}  className= {classes.our_solution_category}>
          <Item className= {classes.wrapper1}>
          <div >
            <h3>Development</h3>
           <div className= {classes.about_company} >
          <div className={classes.approach}>

          <Timeline position="alternate" className= {classes.dot_line_ul}>
      <TimelineItem className= {classes.dot_line}>
      <TimelineOppositeContent
          align="right"
          variant="p"
          color="text.secondary"
          sx={{ fontFamily: "Gilroy-Bold !important",
          fontWeight: 'bold',
          fontSize: "11px"}}
        >
         Analysis
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent   sx={{ fontFamily: "Gilroy-Bold !important",
          fontWeight: 'bold',
          fontSize: "11px"}}>Plan</TimelineContent>
      </TimelineItem>
      <TimelineItem className= {classes.dot_line}>
        <TimelineOppositeContent color="text.secondary"   sx={{ fontFamily: "Gilroy-Bold !important",
          fontWeight: 'bold',
          fontSize: "11px"}}>
        Develop 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent   sx={{ fontFamily: "Gilroy-Bold !important",
          fontWeight: 'bold',
          fontSize: "11px"}}>Design</TimelineContent>
      </TimelineItem>
      <TimelineItem className= {classes.dot_line}>
        <TimelineOppositeContent color="text.secondary"   sx={{ fontFamily: "Gilroy-Bold !important",
          fontWeight: 'bold',
          fontSize: "11px"}}>
          Test
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="error"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent   sx={{ fontFamily: "Gilroy-Bold !important",
          fontWeight: 'bold',
          fontSize: "11px"}}>Deploy</TimelineContent>
      </TimelineItem>
      <TimelineItem className= {classes.dot_line_last}>
        <TimelineOppositeContent color="text.secondary"   sx={{ fontFamily: "Gilroy-Bold !important",
          fontWeight: 'bold',
          fontSize: "11px"}}> 
          Review
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success"/>
        
        </TimelineSeparator>
        <TimelineContent   sx={{ fontFamily: "Gilroy-Bold !important",
          fontWeight: 'bold',
          fontSize: "11px"}}>Launch</TimelineContent>
      </TimelineItem>
    </Timeline>

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
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          Free 3 months Maintanance</span>
          <span className={classes.test_bold}>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          Dedicated Manager to each Projects</span>

          <span className={classes.test_bold}>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          Free Domain Purchase & Hosting</span>
          <span className={classes.test_bold}>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          3 Months Free Digital Marketing </span> 
          <span className={classes.test_bold}>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          Real Time Report Tracking </span>
        

          </div>
          </div>
          </div>
          </Item>
        </Grid>
        <Grid item xs={6} className= {classes.our_solution_category_even}>
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
      Web Developemnt</span>
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
      />RealTime Training</span>
          
          </div>
          </div>
          </div>
          </Item>
          <Item className= {classes.wrapper3}>
          <div >
            <h3>Services</h3>
           <div className= {classes.about_company} >
          <div className="">
          {/* <h2 className={classes.test_bold}>

Our Services</h2> */}
          <span className={classes.test_bold}>
          <Checkbox {...label} defaultChecked color="default" size="small" />
                    Web Development</span>
          <span className={classes.test_bold}>
          <Checkbox {...label} defaultChecked color="default" size="small" />
                    Mobile Development </span>
          <span className={classes.test_bold}>
          <Checkbox {...label} defaultChecked color="default" size="small" />
          Digital Marketing & Branding</span>
          <span className={classes.test_bold}>
          <Checkbox {...label} defaultChecked color="default" size="small" />
          Software Training & Consultancy</span>
          <span className={classes.test_bold}>   
          <Checkbox {...label} defaultChecked color="default" size="small" />
          Maintanance & Support </span>
          <span> &nbsp;  </span>
          </div>
          </div>
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
            <p className={classes.test_bold}>Our Experts &amp; Clients Lifted us to</p>

              <span  
      className={classes.about_sub_test_bold} >Best</span> 
              Web Design,Branding and Digital Marketing Company in Bangalore</h2>

          
            <p className={classes.cl_brown}>Established in 2022, in Bangalore, India, Spad Software has successfully made its name noteworthy as an experienced web development company. Our team of enriched professionals in UI/UX design, application development, web design and web development are trained to bring the best to the table no matter what. 
         </p>
          <p className={classes.cl_brown}>A company’s website design plays a key role in providing the first impression to the customers.
             
               Each Spad Software developer stands as the pillar to our growth as the leading web design and development company
               Each Spad Software developer stands as the pillar to our growth as the leading web design and development company.
               And as a web design company, 
               Each Spad Software developer stands as the pillar to our growth as the leading web design and development company
               And as a web design company, 
               Each Spad Software developer stands as the pillar to our growth as the leading web design and development company
               And as a web design company, 
               Each Spad Software developer stands as the pillar to our growth as the leading web design and development company
              And as a web design company, 
               Each Spad Software developer stands as the pillar to our growth as the leading web design and development company.</p>
              
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