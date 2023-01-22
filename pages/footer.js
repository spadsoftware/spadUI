import React  , { useReducer }from 'react'

import Head from "next/head";
import {Typography } from '@mui/material'
import Image from 'next/image';
import { loadCSS } from 'fg-loadcss';
import Box from '@mui/material/Box';
import { green, red } from '@mui/material/colors';
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
import Link from 'next/link';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 
  
  async function sendContactData(contactDetails) {
    const response = await fetch('http://127.0.0.1:8080/appoinment', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  }
  

const footer = () => {
  

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


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
console.log(enteredDate,enteredEmail,enteredName,
  enteredPhone,enteredCategory,enteredMessage,value.$d)

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
        phone: enteredPhone,
        category: enteredCategory,
        dateTime: value.$d,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');

      setEnteredPhone('');
      setEnteredCategory('dv');
      setValue(new Date());

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
    <title>Top 10 Web design company in Bangalore,Best Web Development Company in Bangalore, Web Design Company, Website Development Agency in India -Spad Software</title>
        <meta name="keyword" content="Footer" />
      </Head>
  
   

    <Box sx={{background:'linear-gradient(180deg, #FEF7E2 0%, #EEEEFD 100%)',
    color:'black',textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: "0px 0px 0px 20px",
    borderColor: "#F89000",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "50px 0px 20px 0px",
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25);'}}>

<Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           
        <Grid item xs={6} md={4} style={{left: '0px',position: 'relative',}}>
      
      <h3 style={{color:'#da4536'}}>Contact US</h3>
           <h5>Want to Book an Appoinment
           <Link style={{color:'#da4536'}}  href='/home'>
           <span style={{color:'#da4536'}}> click here
           </span>
           </Link>
           </h5>
           <h5>Looking for Job 
            <Link   href='/jobSeekers'style={{color:'#da4536'}}>
            <span style={{color:'#da4536'}}> click here
           </span></Link></h5>
           <h5>Hire Talents,we are the one to provide best resource
           <Link href='/hireTalents' style={{color:'#da4536'}}>
           <span style={{color:'#da4536'}}> click here
           </span>
           </Link>
           </h5>
           <h5>Subscribe Now
           <Link href='/hireTalents' style={{color:'#da4536'}}>
           <span style={{color:'#da4536'}}> click here
           </span>
           </Link>
           </h5>
           </Grid>
           <Grid item xs={6} md={4} style={{left: '0px',position: 'relative',}}>
      
      <h3 style={{color:'#da4536'}}>Get In Touch </h3>
           <h5>SPAD Software consultancy services Private Limited,Bangalore-India</h5>
           <h5>GSTIN:33ABICS7047K1ZZ</h5>
           <h5>softwareservices.helpdesk@gmail.com / 8438353493</h5>
        
           </Grid>
           <Grid item xs={6} md={4} style={{left: '0px',position: 'relative',}}>
           <h3 style={{color:'#da4536'}}>Know More</h3>

            <span>
         <div>
           <span style={{fontSize:'14px',fontWeight:'600'}}>Term of services - </span> 
           <span style={{fontSize:'14px',fontWeight:'600'}}> Privacy policy -</span>  
           <span style={{fontSize:'14px',fontWeight:'600'}}> Refund policy </span> 
           </div>
           <div>
           <Image
               src={`/images/logo/linked.png`}
               alt={'Spad Software Logo'}
               width={32}
               height={32}
             />      
       
              <Image
               src={`/images/logo/fb.png`}
               alt={'Spad Software Logo'}
               width={32}
               height={32}
             />       
             <Image
               src={`/images/logo/wp.png`}
               alt={'Spad Software Logo'}
               width={30}
               height={30}
             />   
             <Image
               src={`/images/logo/insta.png`}
               alt={'Spad Software Logo'}
               width={28}
               height={28}
             /> 
              </div>
              <div>
                <Typography variant='caption'
            style={{marginLeft: '48px'}} >
              © SPAD Software consultancy services Private Limited. All rights reserved.
             </Typography>
             </div>
             </span>
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

export default footer