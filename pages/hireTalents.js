import React  , { useReducer }from 'react'

import Head from "next/head";
import {Typography } from '@mui/material'
import Image from 'next/image';
import { loadCSS } from 'fg-loadcss';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Notification from '../components/ui/notification';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import NativeSelect from '@mui/material/NativeSelect';
import Textarea from '@mui/joy/Textarea';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  async function sendContactData(details) {
    console.log(details)
    const response = await fetch('http://127.0.0.1:8080/hire', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  }

  

const hireTalents = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredCName, setEnteredCName] = useState('');
  const [enteredJobtitle, setEnteredJobtitle] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredJobOpenings, setEnteredJobOpenings] = useState('');
  const [enteredJobLoc, setEnteredJobLoc] = useState('');
  const [enteredExp, setEnteredExp] = useState('');
  const [enteredSal, setEnteredSal] = useState('');
  const [enteredJobType, setEnteredJobType] = useState('');

  

  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  
  async function sendMessageHandler(event) {
    event.preventDefault();


    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        companyName: enteredCName,
        phone: enteredPhone,
        jobTitle:enteredJobtitle,
        skills: enteredCategory,
        location:enteredJobLoc,
        jobOpening:enteredJobOpenings,
        exp:enteredExp,
        salary:enteredSal,
        jobType:enteredJobType
      });
      setRequestStatus('success');
      setEnteredCName('');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredCategory('dv');
      setEnteredPhone('');
      setEnteredJobtitle('');
      setEnteredJobOpenings('');
      setEnteredJobLoc('');
      setEnteredExp('');
      setEnteredSal('dv');
      setEnteredJobType('dv');

    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }
  const [value, setValue] = React.useState(dayjs(new Date()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }
  return (
    <>
     <Head>
    <title> Web Design Company in Bangalore | Website Development Company in Bangalore | Best Training & placement company in Bangalore- Spad Software</title>
        <meta name="keyword" content="Hire Talent" />
      </Head>
  
   

    <Box sx={{textAlign:'left',background:'white',color:'black',
        
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25)'}}>

<Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
style={{top:'60px',position:'relative',background: 'linear-gradient(180deg, #FEF7E2 0%, #EEEEFD 100%)'}}>
        <Grid item xs={6} style={{left: '0px',position: 'relative',}}>
      
   <h3 style={{color:'#da4536',textAlign:'center'}}>why hire from Spad Software </h3>
        <h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>100% Free of Cost.</div>

</h4>

<h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>
Fulfill your Hiring Process
within 5 Days
    </div>
  </h4>

<h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>
Hire Candidates in Various Technology like Cloud, Programming, Data Science, Full Stack & More
    </div></h4>
<h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>
Hire Candidates who’ve been trained from Industry Experts.
    </div>
    </h4>
<h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>
Already Well Trained on Live Projects with Hands-on.
    </div>
  </h4>
        {/* <h5>Email:info@spadsoftware.com</h5>
        <h5>Contact:8438353493</h5>
        <h5>Location:Bangalore India</h5>   */}
        

        </Grid>
        <Grid item xs={6} style={{}}>
      
        <form onSubmit={sendMessageHandler}>
      <h3  style={{color:'#da4536',textAlign:'center'}}>Post Job</h3> 

      <div style={{paddingTop:'0px'}}>



        <TextField style={{width: '45%'}}
          id="standard-required"
          label="Name"
          InputLabelProps={{
            shrink: true,
           
          }}
          name="name"
          value={enteredName}
          variant="standard"
          onChange={(event) => setEnteredName(event.target.value)}
        />
       <TextField style={{marginLeft:'14px',width: '45%'}}
          id="standard-required"
          label="Company email"
          value={enteredEmail}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="email"

          variant="standard"
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
        <TextField style={{marginTop:'14px',width: '45%'}}
          id="standard-required"
          label="Company Phone"
          value={enteredPhone}
          InputLabelProps={{
            shrink: true,
          
          }}
          type="number"
          name="phone"
          variant="standard"
          onChange={(event) => setEnteredPhone(event.target.value)}
        />
        <TextField style={{marginTop:'14px',marginLeft:'14px',width: '45%'}}
          id="standard-required"
          label="Company Name"
          value={enteredCName}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="subject"
          variant="standard"
          onChange={(event) => setEnteredCName(event.target.value)}
        />

<FormControl style={{marginTop:'13px',width:'45%'}} sx={{ m: 0, minWidth: 120 }}   >
        
        <InputLabel htmlFor="grouped-select"shrink={true} 
        style={{top:'10px',left:'-15px'}}>Skills</InputLabel>
        <NativeSelect  variant="outlined"
        value={enteredCategory} 
        onChange={(event) => setEnteredCategory(event.target.value)}
         id="grouped-select" label="Grouping"
        
         >
                   <option value="dv"> </option>

                   <optgroup label=" Development & IT">
                      <option value="JavaScript">JavaScript Developers</option>
                      <option value="UI/UX">UI/UX Design</option>
                      <option value="PHP">PHP Developers</option>
                      <option value="Python">Python Developers</option>

                      <option value="Android">Android Developers</option>
                      <option value="IOS">IOS Developers</option>
                      <option value="Reactnative">Reactnative Developers</option>

                      <option value="React">React Developers</option>
                      <option value="Java">Java Developers</option>

                      <option value="Node">Node Developers</option>

                      <option value="Full">Full Stack Developers</option>

                      <option value="MySQL/MongoDB">MySQL/MongoDB Developers</option>
                    </optgroup>
                  
              

                    <optgroup label=" Animation">
                      <option value="3D Maya">3D Maya</option>
                      <option value="Video Game designer">Video Game designer</option>

                      <option value="Graphic">Graphic designer</option>
                      <option value="Animator">Animator</option>
                      <option value="Digital">Digital Painter</option>
                    </optgroup>
                    <option value="Non IT">Non IT</option>

                    <option value="DM">Digital Marketing</option>
                    <option value="BG">Branding</option>
        </NativeSelect>
      </FormControl>


      <TextField style={{marginTop:'14px',marginLeft:'14px',width:'45%'}}
          id="standard-required"
          label="Job Title"
          value={enteredJobtitle}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="subject"
          variant="standard"
          onChange={(event) => setEnteredJobtitle(event.target.value)}
        />
    
    <TextField style={{marginTop:'14px',width: '45%'}}
          id="standard-required"
          label="No of Openings"
          value={enteredJobOpenings}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="subject"
          variant="standard"
          onChange={(event) => setEnteredJobOpenings(event.target.value)}
        />
         <TextField style={{marginTop:'14px',marginLeft:'14px',width: '45%'}}
          id="standard-required"
          label="Job Location"
          value={enteredJobLoc}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="subject"
          variant="standard"
          onChange={(event) => setEnteredJobLoc(event.target.value)}
        />

<FormControl style={{marginTop:'13px',width:'45%'}} sx={{ m: 0, minWidth: 120 }}   >
        
        <InputLabel htmlFor="grouped-select"shrink={true} 
        style={{top:'10px',left:'-15px'}}>Experience Level</InputLabel>
        <NativeSelect  variant="outlined"
        value={enteredExp} 
        onChange={(event) => setEnteredExp(event.target.value)}
         id="grouped-select" label="Grouping"
        
         >
                   <option value="dv"> </option>

                   <optgroup label="Fresher">
                      <option value="0 to 2">0 to 2</option>
                     
                    </optgroup>
                  
                    <optgroup label="MidLevel">
                      <option value="2 to 5">2 to 5</option>
                     
                    </optgroup>
                    <optgroup label="MidLevel">
                      <option value="5 to 8">5 to 8</option>
                     
                    </optgroup>
                    <optgroup label="MidLevel">
                      <option value="8 to 10">8 to 10</option>
                     
                    </optgroup>
                    <optgroup label="Senior">
                      <option value="More than 10">More than 10</option>
                    </optgroup>

                 
        </NativeSelect>
      </FormControl>


      <FormControl style={{marginTop:'13px',marginLeft:'13px',width:'45%'}} sx={{ m: 0, minWidth: 120 }}   >
        
        <InputLabel htmlFor="grouped-select"shrink={true} 
        style={{top:'10px',left:'-15px'}}>Salary</InputLabel>
        <NativeSelect  variant="outlined"
        value={enteredSal} 
        onChange={(event) => setEnteredSal(event.target.value)}
         id="grouped-select" label="Grouping"
        
         >
          <option value="dv"> </option>
            <option value="1l to 2l">1l to 2l</option>
            <option value="2l to 4l">2l to 4l</option>
            <option value="4l to 6l">4l to 6l</option>
            <option value="6l to 8l">6l to 8l</option>
            <option value="8l to 10l">8l to 10l</option>
            <option value="10l to 15l">10l to 15l</option>
            <option value="15l to 20l">15l to 20l</option>
            <option value="20l to 25l">20l to 25l</option>
            <option value="More than 25l">More than 25l</option>



                 
        </NativeSelect>
      </FormControl>
      <FormControl style={{marginTop:'13px',width:'45%'}} sx={{ m: 0, minWidth: 120 }}   >
        
        <InputLabel htmlFor="grouped-select"shrink={true} 
        style={{top:'10px',left:'-15px'}}>Job Type</InputLabel>
        <NativeSelect  variant="outlined"
        value={enteredJobType} 
        onChange={(event) => setEnteredJobType(event.target.value)}
         id="grouped-select" label="Grouping"
        
         >
          <option value="dv"> </option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract </option>
            <option value="Temporary">Temporary </option>
            <option value="Fresher">Fresher </option>
            <option value="Part-Time">Part-Time</option>
                 
        </NativeSelect>
      </FormControl>
        <Button  style={{marginLeft:'20px',marginTop:'30px'}} type="submit" variant="contained">
          Post Job
        </Button>
        </div>
        </form>
           </Grid>
       

     
      </Grid>

   
  </Box>

  {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
 
  </>
  )
}

export default hireTalents