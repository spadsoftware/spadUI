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
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const MoneyBack = () => {
 
  return (
    <>
     <Head>
    <title>
    Web Development Company in Bangalore, Website Development Agency ,
     Web design company, Digital Marketing company , Software training company,- Spad Software</title>
        <meta name="keyword" content="Hire Talent" />
      </Head>
  
   

    <Box sx={{textAlign:'left',background:'white',color:'black',
        
        borderStyle: 'solid',
        borderWidth: "0px 0px 0px 20px",
        borderColor: "#1f255e",
        transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
            padding: "0px 0px 0px 0px",
        boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25);'}}>
   <h3 style={{color:'#da4536',textAlign:'center',top:'0px',position:'relative', marginTop: '0px'}}>Spad Software Money Back Policy</h3>
<Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
style={{top:'0px',position:'relative'
}}>
    
        <Grid item xs={6} md={2}style={{left: '0px',position: 'relative'}}>
      <div style={{left: '50px',width:'85%',position: 'relative',top:'20%'}}>
        <div style={{textAlign:'center'}}>
<Image
  src={`/images/mb/mb.png`}
  alt={'Spad Software Logo'}
  width={156}
  height={156}
/>
</div>
</div>
        </Grid>
        <Grid item xs={6}  md={5} style={{left: '0px',position: 'relative'}}>
      <div style={{left: '50px',width:'85%',position: 'relative'}}>
        <div >
<h4  style={{marginTop:'20px',fontSize:'33px'}}>
100% Money-Back Guarantee</h4>
   <div style={{fontSize:'15px',fontWeight:'600',lineHeight:'30px'}}>Get the design you love or your money back. it’s as simple as that.</div>
   <div style={{fontSize:'15px',fontWeight:'600',lineHeight:'30px'}}>We believe if our clients are happy only then can we stay and thrive 
   in business for the long term. for some reason, 
   if you don’t feel satisfied we’re not satisfied as well
    either we do everything we can to make you happy or
    &nbsp;<span style={{borderBottom:'3px solid #d9232d',color:'#d9232d'}}> you’ll 
    get 100% money back </span>after seeing the first design.</div>

   <div style={{paddingTop:'10px'}}><Image
  src={`/images/mb/signature.png`}
  alt={'Spad Software Logo'}
  width={158}
  height={38}
/>
<div style={{top:'-18px',position:'relative'}}>Sambathkumar Manjula</div>
   <div style={{top:'-18px',position:'relative'}}> Director of Spad software</div>
   </div>
   
</div>
</div>
        </Grid>
        <Grid item xs={6}  md={5} style={{left: '0px',position: 'relative',background:'white'}}>
      <div style={{left: '50px',width:'85%',position: 'relative'}}>
        <div >
<h4  style={{marginTop:'20px',fontSize:'33px'}}>
Refund Scenario:</h4>
   <div style={{fontSize:'15px',fontWeight:'600',lineHeight:'30px'}}>
   The client must ask for a full refund at the stage when they get the first or second 
   variation(option) of the design. After entering into revision 
   mode or beyond 2nd design stage, client is not eligible to get 100% as a refund.</div>
   <div>if the client wants to see all the designs and in the end, he/she is still not 
    satisfied then the client is eligible to ask for a 50% as refund.</div>
    <div>Read the full <Link   href='/refund'style={{color:'#da4536'}}>Refund policy here</Link></div>

   
</div>
</div>
        </Grid>

     
      </Grid>

   
  </Box>

 
 
  </>
  )
}

export default MoneyBack