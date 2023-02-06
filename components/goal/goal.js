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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
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
const steps = [
  {
    label: 'Requirements Analysis',
    description: `Requirements gathering is more than just asking a few questions `,
  },
  {
    label: 'Wireframes & mockUp & UI/UX',
    description:
      'The website design process is transforming user requirements into a suitable form.',
  },
  {
    label: 'Development & Testing',
    description:
      'After getting the system design documents, the work is divided into small modules and units and the actual development of coding is started.',
  },
  {
    label: 'Handover & support',
    description:
      'Once the full web application or software has been fully tested and the no more high priority issues remain at anymore.',
  },
 
  {
    label: 'Free Promotion/Branding',
    description: ` We some of the commonly known promotion techniques such as mouth marketing, Websites, Social media, Flyers, Newspaper Ads. `,
  },
];

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
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      {/* <Cursor isGelly={true} 
  cursorBackgrounColor='#fcf8f8c9'/> */}
      <section id="about" className={classes.section_goal}>
        <div className={classes.section__btm}>
          <div >

            <div className={classes.section_aboutspan}>Our Goal</div> 
          </div>


          <h3 className={classes.section_about1}>Our Goal is to reach our mission,vision,
            <span className={classes.section_wwd_lt}>
              why to choose us?
            </span>


          </h3>
        </div>

        <Grid item className={classes.goal_mission_box}>

          <Item className={classes.goal_mission}>
            <Grid container columns={{ xs: 4, sm: 4, md: 12 }}>
 
              <Grid item xs={12} md={12} sm={12}>
                <Box className={classes.vertical_mobile_view}
                  sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}
                >
                  <Tabs className={classes.verticalTabs}
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                  >
                    <Tab label="Our Mission" {...a11yProps(0)} className="vertical_button"/>
                    <Tab label="Why to Choose US" {...a11yProps(1)} className="vertical_button"/>
                    <Tab label="Our Vision" {...a11yProps(2)} className="vertical_button"/>
                    <Tab label="Development Process" {...a11yProps(3)} className="vertical_button"/>
                    <Tab label="Escalation Process" {...a11yProps(4)} className="vertical_button"/>
                    <Tab label="Industries we serve" {...a11yProps(5)} className="vertical_button"/>
                    {/* <Tab label="Escalation Process" {...a11yProps(4)} />
        <Tab label="Industries We serve" {...a11yProps(5)} />
       */}

                  </Tabs>


                  <TabPanel className={classes.our_Process} value={value} index={0}>

                    <Typography component="span">
                      <span style={{
                        fontSize: '18px',
                        fontWeight: '600'
                      }} >
                        Our Mission?
                      </span>
                      <Grid component="span"
                        container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop: '20px' }}>
                        <Grid component="span" item xs={12} sm={12} md={12}
                          className={classes.hdr}>


                          Provide exceptional people who deliver extraordinary results
                          With spad software, you can be confident that your software will be developed to the highest standards.
                          We use the latest technologies and tools to ensure that your software is of the highest quality.

                        </Grid >
                      </Grid>
                    </Typography>


                  </TabPanel>
                  <TabPanel className={classes.our_Process} value={value} index={1}>


                    <Typography component="span">
                      <span style={{
                        fontSize: '18px',
                        fontWeight: '600'
                      }} >
                        Bridging The Gap Between
                        &nbsp;<span style={{ borderBottom: '3px solid red' }}>Business And Technology.</span>

                      </span>

                      <Grid component="span"
                        container spacing={2} columns={{ xs: 12, sm: 8, md: 12 }} style={{ paddingTop: '20px' }}>
                        <Grid component="span" item xs={3} sm={4} md={3}>
                          <span style={{ display: 'block' }}>
                            <Image className={classes.about_ac}
                              src={`/images/about/ac.png`}
                              alt='Spad Software Log about'
                              width={256}
                              height={56}
                            /></span>
                          <span style={{ fontSize: '13px' }}> Cost & quality</span>
                        </Grid >
                        <Grid component="span" item xs={3} sm={4} md={3}>
                          <span style={{ display: 'block' }}>
                            <Image className={classes.about_choose}
                              src={`/images/about/clock.png`}
                              alt='Spad Software Log about'
                              width={256}
                              height={56}
                            />
                          </span>
                          <span style={{ fontSize: '13px' }}>On time Delivery</span>
                        </Grid >
                        <Grid component="span" item xs={3} sm={4} md={3}>
                          <span style={{ display: 'block' }}>
                            <Image className={classes.about_mission}
                              src={`/images/about/tr.png`}
                              alt='Spad Software Log about'
                              width={256}
                              height={56}
                            />
                          </span>
                          <span style={{ fontSize: '13px' }}>Trusted Relationship</span>
                        </Grid >
                        <Grid component="span" item xs={3} sm={4} md={3}>
                          <span style={{ display: 'block' }}>
                            <Image className={classes.about_ms}
                              src={`/images/goal/ms.png`}
                              alt='Spad Software Log about'
                              width={256}
                              height={56}
                            />
                          </span>
                          <span style={{ fontSize: '13px' }}>Support</span>
                        </Grid >

                        <Grid component="span" item xs={3} sm={4} md={3}>
                          <span style={{ display: 'block' }}>
                            <Image className={classes.about_ms}
                              src={`/images/title_header/secureCoding.svg`}
                              alt='Spad Software Log about'
                              width={256}
                              height={56}
                            />
                          </span>
                          <span style={{ fontSize: '13px' }}> Secure Coding</span>
                        </Grid >

                        <Grid component="span" item xs={3} sm={4} md={3}>
                          <span style={{ display: 'block' }}>
                            <Image className={classes.about_ms}
                              src={`/images/title_header/support.svg`}
                              alt='Spad Software Log about'
                              width={256}
                              height={56}
                            />
                          </span>
                          <span style={{ fontSize: '13px' }}>24/7 Email Support</span>
                        </Grid >

                        <Grid component="span" item xs={3} sm={4} md={3}>
                          <span style={{ display: 'block' }}>
                            <Image className={classes.about_ms}
                              src={`/images/title_header/team.svg`}
                              alt='Spad Software Log about'
                              width={256}
                              height={56}
                            />
                          </span>
                          <span style={{ fontSize: '13px' }}>Dedicated Team</span>
                        </Grid >

                        <Grid component="span" item xs={3} sm={4} md={3}>
                          <span style={{ display: 'block' }}>
                            <Image className={classes.about_ms}
                              src={`/images/title_header/team.svg`}
                              alt='Spad Software Log about'
                              width={256}
                              height={56}
                            />
                          </span>
                          <span style={{ fontSize: '13px' }}>Dedicated Manager</span>
                        </Grid >
                      </Grid>
                    </Typography>

                  </TabPanel>
                  <TabPanel className={classes.our_Process} value={value} index={2}>

                    <Typography component="span">
                      <span style={{
                        fontSize: '18px',
                        fontWeight: '600'
                      }} >
                        Our Vision?
                      </span>
                      <Grid component="span"
                        container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop: '20px' }}>
                        <Grid component="span" item xs={12} sm={12} md={12} className={classes.hdr}>
                          Spad software is a versatile tool that can help you with all your software needs, from developing custom applications to providing real-time training and placement. with our team of talented developers, you can be sure that your project is in good hands.
                        </Grid >
                      </Grid>
                    </Typography>
                  </TabPanel>
                  <TabPanel className={classes.our_Process} value={value} index={3}>

                    <Typography   sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }} component="span">

                      <Grid component="span"
                        container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop: '20px' }}>
                        <Grid component="span" style={{ height: '40px', textAlign: 'left', padding: '3px' }} item xs={12} sm={12} md={3}>
                          <Card sx={{ minWidth: 5, height: 48 }} component="span" >
                            <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                1.Requirements,   2.Wireframes, 3.MockUp,
                                4. UI/UX, 5.Development,6.Testing,7.Handover
                                ,8.Support,9.Free Branding
                              </Typography>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                          </Card>
                        </Grid >
                     

                      </Grid>
                    </Typography>


          <Box sx={{ maxWidth: 800 ,
            display: { xs: "none", sm: "block" },
            left:'20%',position:'relative'
            
          }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          index === 4 ? (
                            <Typography variant="caption">Last step</Typography>
                          ) : null
                        }
                      >
                        {step.label}
                      </StepLabel>
                      <StepContent>
                        <Typography sx={{fontSize:'11px',fontWeight:'600'}}>{step.description}</Typography>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              {index === steps.length - 1 ? 'Finish' : 'Continue'}
                            </Button>
                            <Button
                              disabled={index === 0}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              Back
                            </Button>
                          </div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </Box>


                  </TabPanel>
                  <TabPanel className={classes.our_Process} value={value} index={4}>

                    <Typography
                      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                      component="span">
                      <Image
                        className={classes.process_img}
                        src={`/images/process/esclation.svg`}
                        alt='Spad Software Log about'
                        width={126}
                        height={5}
                      />
                    </Typography>
                    <Typography
                      sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}
                      component="span">
                      <span style={{
                        fontSize: '18px', display: 'block', color: 'black',
                        fontWeight: '600'
                      }} >
                        <span style={{ color: '#de4332', }}>Team Lead</span>: you can reach Manager Within  4hour time frame
                      </span>
                      <span style={{
                        fontSize: '18px', display: 'block', color: 'black',
                        fontWeight: '600'
                      }} >
                        <span style={{ color: '#de4332', }}>Manager</span> :you can reach Within  12hour time frame
                      </span>

                      <span style={{
                        fontSize: '18px', display: 'block', color: 'black',
                        fontWeight: '600'
                      }} >
                        <span style={{ color: '#de4332', }}>CTO&CEO</span>: you can reach Within  3 days time frame
                      </span>

                    </Typography>
                  </TabPanel>
                  <TabPanel className={classes.our_Process} value={value} index={5}>

                    <Typography component="span">

                      <Grid component="span"
                        container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }} style={{ paddingTop: '20px' }}>
                        <Grid component="span" style={{ padding: '0px' }} item xs={4} sm={6} md={4}>
                          <Card sx={{ minWidth: 5, height: 48 }} component="span" >
                            <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <span className={classes.ed}>Education</span>
                                <span className={classes.ind_name}>Education</span>
                              </Typography>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                          </Card>
                        </Grid >
                        <Grid component="span" style={{ padding: '0px' }} item xs={4} sm={6} md={4}>
                          <Card sx={{ minWidth: 5, height: 48 }} component="span" >
                            <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <span className={classes.md}>Health Care / Medical </span>
                                <span className={classes.ind_name}>Health Care  </span>
                              </Typography>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                          </Card>
                        </Grid >
                        <Grid component="span" style={{ padding: '0px' }} item xs={4} sm={6} md={4}>
                          <Card sx={{ minWidth: 5, height: 48 }} component="span" >
                            <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <span className={classes.fsb}>Banking</span>
                                <span className={classes.ind_name}> Banking</span>
                              </Typography>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                          </Card>
                        </Grid >
                        <Grid component="span" style={{ padding: '0px' }} item xs={4} sm={6} md={4}>
                          <Card sx={{ minWidth: 5, height: 48 }} component="span" >
                            <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <span className={classes.re}>E-commerce</span>
                                <span className={classes.ind_name}> E-commerce</span>
                              </Typography>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                          </Card>
                        </Grid >

                        <Grid component="span" style={{ padding: '0px' }} item xs={4} sm={6} md={4}>
                          <Card sx={{ minWidth: 5, height: 48 }} component="span" >
                            <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <span className={classes.tr}>Travel</span>
                                <span className={classes.ind_name}>Travel</span>
                              </Typography>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                          </Card>
                        </Grid >
                        <Grid component="span" style={{ padding: '0px' }} item xs={4} sm={6} md={4}>
                          <Card sx={{ minWidth: 5, height: 48 }} component="span" >
                            <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <span className={classes.fr}>Restaurants</span>
                                <span className={classes.ind_name}>Restaurants</span>
                              </Typography>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                          </Card>
                        </Grid >
                        {/* <Grid component="span" style={{}} item xs={6} sm={6} md={3}>
         <Card sx={{ minWidth: 5,height:48}} component="span" >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <span className={classes.it}>IT</span>
                 <span  className={classes.ind_name}>IT</span> 
                </Typography>
          
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
         </Grid > */}
                        {/* <Grid component="span" style={{height:'40px',textAlign:'left',padding:'3px'}} item xs={12} sm={12} md={3}>
         <Card sx={{ minWidth: 5,height:48}} component="span" >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               8.Support
                </Typography>
          
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
         </Grid >
         <Grid component="span" style={{height:'40px',textAlign:'left',padding:'3px'}} item xs={12} sm={12} md={3}>
         <Card sx={{ minWidth: 5,height:48}} component="span" >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               9.Free Branding
                </Typography>
          
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
         </Grid > */}

                      </Grid>
                    </Typography>



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