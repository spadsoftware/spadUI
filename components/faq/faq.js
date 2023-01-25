import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import classes from './faq.module.css';
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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Masonry from '@mui/lab/Masonry';




const faqComponent = () => {

  const [searchNews, setNewDatas] = useState([]);
const getProfile = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  setNewDatas(data.slice(0, 6).map(item=>item))
};

useEffect(() => {
  getProfile();
}, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <section id="faq" className= {classes.section_faq}>
    <div>
      <div>
      
                <div>Frequently Asked Questions</div>
                <Image
                  src={`/images/title_header/hdrBtm.png`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                /></div>

      <div className= {classes.section__subtlt}>We are offering latest technology to our clients and students </div>
      
      </div>

    <div >


      <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
       
        <Grid item xs={8}>
        <Accordion  expanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
               
              >
               <HelpOutlineIcon className= {classes.section_faq_Title} />&nbsp;
                <Typography className= {classes.section_faq_TitleText}>
                
                  How long will it take to get a new website?
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className= {classes.section_faq_detail}>
                Can estimate the time frame based on the website design and development requirements that you have.
               Website features will differ based on the industries and business model..
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <HelpOutlineIcon className= {classes.section_faq_Title}/>&nbsp;
                <Typography className= {classes.section_faq_TitleText}>What all services does spad software provide?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className= {classes.section_faq_detail}>
                At spad software, we provide a comprehensive suite of services including web design, training and placement consultancy, web development, digital marketing, and more. We are also a team of talented developers that can create all kinds of custom software. Additionally, we offer real-time trainings to students as well as professionals. So no 
                 what kind of help you need in the digitally driven world, spad software has got your back!                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <HelpOutlineIcon className= {classes.section_faq_Title}/>&nbsp;
                <Typography className= {classes.section_faq_TitleText}>What kind of software does spad software develop?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className= {classes.section_faq_detail}>
                At spad software, we develop custom software and websites tailored to the exact needs of our clients. Our experienced team of developers specialise in a wide range of technologies, including Web Design, PHP, ASP.NET, HTML5, JavaScript, AngularJS, ReactJS and Node.js. We also provide real-time training & placement services for web development and digital marketing platforms such as SEO & Social Media Marketing (SMM). Furthermore, we provide branding design services for designers to showcase their creative flair. With spad software you can trust that we have got you covered when it comes to
                 developing your own software and achieving success in your digital marketing endeavours!
                  </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              > <HelpOutlineIcon className= {classes.section_faq_Title} />&nbsp;
                <Typography className= {classes.section_faq_TitleText}>How much does it cost for website development?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                
                <Typography className= {classes.section_faq_detail}>
                We do charge the minimum cost for website development. But not cheaper because premium quality will 
              not come under cheaper. cost can be calculated
               based on the web development requirement that you have & technology that you choose.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion> 
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              > <HelpOutlineIcon className= {classes.section_faq_Title} />&nbsp;
                <Typography className= {classes.section_faq_TitleText}> How can I track the status of my project? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                
                <Typography className= {classes.section_faq_detail}>
                We do provide a project management tool to monitor the project flow and task status..
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <HelpOutlineIcon className= {classes.section_faq_Title} />&nbsp;
                <Typography className= {classes.section_faq_TitleText}>Can you maintain my website? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className= {classes.section_faq_detail}>
                Yes, after we completed the web development process we do provide
                 website maintenance services also..
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ><HelpOutlineIcon className= {classes.section_faq_Title}/>&nbsp;
                <Typography className= {classes.section_faq_TitleText}>Why we need to train in Spad Software?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className= {classes.section_faq_detail}>
                Experienced MNC Professionals,Corporate Style Training,Syllabus Based on 
            Companies,Placement Oriented Courses,Projects for Every Course,Less cost,EMI based Training.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <HelpOutlineIcon className= {classes.section_faq_Title}/>&nbsp;
                <Typography className= {classes.section_faq_TitleText}>Why we need to Spad Software consultancy?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className= {classes.section_faq_detail}>
                Free Consulting, Zero Cost, Direct Payroll jobs.
                </Typography>
              </AccordionDetails>
            </Accordion>
           
        </Grid>
        <Grid item xs={4}>
      
        <List  sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 390,
        boxShadow:'0 0 5px 2px #00000029',

        '& ul': { padding: 0 },
      }}>
          <Typography
                sx={{ display: 'inline',color:'#d9232d' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
               Recent News
              </Typography>
        { 
        
        Array.isArray(searchNews) ? searchNews.map(i => {
            return (
        <>
        <ListItem alignItems="flex-start" key={i.id}>
                      <ListItemAvatar>
                        <Avatar  alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                      key={i.id}
                        primary= {i.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                           
                            </Typography>
                            {i.body}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
        </>
             


            )
          }):'No Latest News'

            } 

  
    </List>

        </Grid>

      </Grid>
          
    </div>
</section>
    </>
  
  )
}

export default faqComponent