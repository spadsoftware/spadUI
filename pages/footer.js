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
  
   

    <Box sx={{textAlign:'left',background:'#e1ebf1',color:'black',
        
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25);'}}>

<Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6} style={{left: '30px',position: 'relative',}}>
      
   <h3 style={{color:'#da4536'}}>Get In Touch </h3>
        <h4>SPAD Software consultancy services Private Limited</h4>
        <h4>GSTIN:33ABICS7047K1ZZ</h4>
        <h5>softwareservices.helpdesk@gmail.com</h5>
        <h5>8438353493</h5>
        <h5>Bangalore India</h5>  
        

        </Grid>
        <Grid item xs={6} style={{}}>
      
        <form onSubmit={sendMessageHandler}>
      <h3  style={{color:'#da4536'}}>Book An Appoinment</h3> 

      <div style={{paddingTop:'0px'}}>



        <TextField style={{}}
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
       <TextField style={{marginLeft:'14px'}}
          id="standard-required"
          label="email"
          value={enteredEmail}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="email"

          variant="standard"
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
        <TextField style={{marginLeft:'14px'}}
          id="standard-required"
          label="Phone"
          value={enteredPhone}
          InputLabelProps={{
            shrink: true,
          
          }}
          type="number"
          name="phone"
          variant="standard"
          onChange={(event) => setEnteredPhone(event.target.value)}
        />
        <TextField style={{marginTop:'14px',width:'50%'}}
          id="standard-required"
          label="subject"
          value={enteredMessage}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="subject"
          variant="standard"
          onChange={(event) => setEnteredMessage(event.target.value)}
        />
       <FormControl style={{marginLeft:'14px',marginTop:'13px',width:'40%'}} sx={{ m: 0, minWidth: 120 }}   >
        
        <InputLabel htmlFor="grouped-select"shrink={true} 
        style={{top:'10px',left:'-15px'}}>Services</InputLabel>
        <NativeSelect  variant="outlined"
        value={enteredCategory} 
        onChange={(event) => setEnteredCategory(event.target.value)}
         id="grouped-select" label="Grouping"
        
         >
                   <option value="dv"> </option>

                   <optgroup label="software Development">
                      <option value="SD-wd">Web Design</option>
                      <option value="SD-ld">Logo Design</option>
                      <option value="SD-crm">CRM Development</option>
                      <option value="SD-wrd">Website Redesign</option>
                      <option value="SD-wm">Website Maintenanace</option>
                    </optgroup>
                  
                    <optgroup label="software Training">
                      <option value="ST-ct">Corporate Training</option>
                      <option value="ST-one2one">One to one training</option>
                      <option value="ST-ot">Online training</option>
                      <option value="ST-cr">Class room training</option>
                    </optgroup>
                    <option value="SC">software Consultancy</option>
                    <option value="DM">Digital Marketing</option>
                    <option value="BG">Branding</option>
        </NativeSelect>
      </FormControl>
      <LocalizationProvider style={{marginTop:'13px'}} dateAdapter={AdapterDayjs}>
        <DateTimePicker
        
          label="Appoinment Date"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} 
          sx={{
            marginTop:'13px',
            svg: { color: 'black' },
            input: { color: 'black' },
            label:{ color: 'black' }
          }}
          />}
        />
    </LocalizationProvider>

        <Button  style={{marginLeft:'20px',marginTop:'30px'}} type="submit" variant="contained">
          Get Quotes
        </Button>
        </div>
        </form>
           </Grid>
       

        <Typography variant='caption'
        style={{marginLeft: '48px'}} >
          @Copyright 2023-2024
          © SPAD Software consultancy services Private Limited. All rights reserved.
         </Typography>
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