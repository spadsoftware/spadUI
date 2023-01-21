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

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const goalComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

<Grid item  className={classes.goal_mission_box}>
         
          <Item className={classes.goal_mission}>  
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 2, md: 3 }} 
           columnSpacing={{ xs: 1, sm: 1, md: 1}}>

    <Grid item xs={5}>
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
  </Grid>
  <Grid item xs={7}>    
          <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 370 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
          <Tab label="Our Mission" {...a11yProps(0)} />
        <Tab label="Why to Choose US" {...a11yProps(1)} />
        <Tab label="Our Vision" {...a11yProps(2)} />
        <Tab label="Development Process" {...a11yProps(3)} />
        <Tab label="Escalation Process" {...a11yProps(4)} />
        <Tab label="Industries We serve" {...a11yProps(5)} />
      

      </Tabs>


      <TabPanel className={classes.our_Process}  value={value} index={0}>
      <span className={classes.containerWrapper}>
            <span className={classes.containerHdr}>Our Mission</span>
            <span className={classes.svcs_img}>
              
          <Image className={classes.about_mission}
                  src={`/images/about/clock.png`}
                  alt='Spad Software Log about'
                  width={256}
                  height={56}
                />
                    <span className={classes.card_mission_icon_text}>  &nbsp; &nbsp;On Time Delivery
                     </span>
   </span>
   
            <span className={classes.card_align}>
                <span className="card_text">
                          <Image 
          src={`/images/title_header/ar.jpg`}
          alt='Spad Software Log about'
          width={10}
          height={10}
          />&nbsp;
          Provide exceptional people who deliver extraordinary results. </span>
          
                          <span className="card_text"> 
                          <Image 
          src={`/images/title_header/ar.jpg`}
          alt='Spad Software Log about'
          width={10}
          height={10}
          />&nbsp;
          Provide innovative software solutions for excellence and enterprise compliance. </span>
                        </span>
                        
            <span className={classes.card_align}>
                <span className="card_text">
                          <Image 
          src={`/images/title_header/ar.jpg`}
          alt='Spad Software Log about'
          width={10}
          height={10}
          />&nbsp;
          Provide exceptional people who deliver extraordinary results. </span>
          
                          <span className="card_text"> 
                          <Image 
          src={`/images/title_header/ar.jpg`}
          alt='Spad Software Log about'
          width={10}
          height={10}
          />&nbsp;
          Provide innovative software solutions for excellence and enterprise compliance. </span>
                        </span>
                        
              </span>
              
      </TabPanel>
      <TabPanel className={classes.our_Process}  value={value} index={1}>
      <span className={classes.containerWrapper}>
            <span className={classes.containerHdr}>Why to Choose Us?</span>
            <span className={classes.svcs_img}>
 <Image className={classes.about_ac}
                  src={`/images/about/ac.png`}
                  alt='Spad Software Log about'
                  width={256}
                  height={56}
                />
                    <span className={classes.card_missionCost_icon_text}>  &nbsp; &nbsp;Affordable Costing  </span>


   </span>
   
   
              <span  className={classes.card_align}>
                <span className={classes.card_text1}>
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;Bridging The Gap Between Business And Technology. </span>

                <span className={classes.card_text1}>  
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;SPAD Software is committed to helping its students to reach their goals and their training experiences, 
                by providing the innovative surroundings and faculties </span>
              </span>
               

               <span  className={classes.card_align}>
                <span className={classes.card_text1}>
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;Bridging The Gap Between Business And Technology. </span>

                <span className={classes.card_text1}>  
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;SPAD Software is committed to helping its students to reach their goals and their training experiences, 
                by providing the innovative surroundings and faculties </span>
              </span>
               


            </span>
      </TabPanel>
      <TabPanel className={classes.our_Process}  value={value} index={2}>
      <span className={classes.containerWrapper}>
            <span className={classes.containerHdr}>Our Vision</span>
            <span className={classes.svcs_img}>
  <Image className={classes.about_choose}
                  src={`/images/about/clock.png`}
                  alt='Spad Software Log about'
                  width={256}
                  height={56}
                />
                    <span className={classes.card_tc_icon_text}> &nbsp;  Trusted Relationship
                     </span>
   </span>
             

              <span className={classes.card_align}>
                <span className="card_text">
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;
Deliver world-class hiring solutions that anticipate and fulfill our client’s workforce needs.  </span>

                <span className="card_text">  
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;Our vision is to become businesses’ first choice when it comes to software development and maintenance.</span>

<span className="card_text">  
                <Image 
src={`/images/title_header/ar.jpg`}
alt='Spad Software Log about'
width={10}
height={10}
/>&nbsp;Our vision is to become businesses’ first choice when it comes to software development and maintenance.</span>

              </span>
            </span>
      </TabPanel>
      <TabPanel className={classes.our_Process}  value={value} index={3}>
      <Image
     
                  src={`/images/goal/sdlc.svg`}
                  alt='Spad Software Log about'
                  width={376}
                  height={300}
                />
      </TabPanel>
      <TabPanel className={classes.our_Process} value={value} index={4}>
      <Image
      className={classes.process_img}
                  src={`/images/process/esclation.svg`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                />
      </TabPanel>
      <TabPanel className={classes.our_Process} value={value} index={5}>
      <Grid container rowSpacing={1} spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }}>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.ed}>Education</span>
  <span  className={classes.ind_name}>Education</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.md}>Health Care </span>
  <span  className={classes.ind_name}>Health Care </span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.ent}>Entertainment</span>
  <span  className={classes.ind_name}>Entertainment</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.fsb}>Financial</span>
  <span  className={classes.ind_name}>Financial</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.ba}> Accounting</span>
  <span  className={classes.ind_name}>Accounting</span>  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.re}>E-commerce</span>
  <span  className={classes.ind_name}>E-commerce</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.tr}>Travel</span>
  <span  className={classes.ind_name}>Travel</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.trl}>Logistics</span>
  <span  className={classes.ind_name}>Logistics</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.fr}>Restaurants</span>
  <span  className={classes.ind_name}>Restaurants</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.res}>RealEstate</span>
  <span  className={classes.ind_name}>RealEstate</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.og}> Oil & Gas</span>
  <span  className={classes.ind_name}> Oil & Gas</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.it}>IT & BPO</span>
  <span  className={classes.ind_name}>IT & BPO</span>  </Grid>
</Grid>
      </TabPanel>
     
    </Box>
    </Grid>
        </Grid>
          </Item>

           
    
            </Grid>

      </section>
    </>
  )
}

export default goalComponent