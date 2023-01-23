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
  

const refund = () => {
 
  return (
    <>
     <Head>
    <title>Top 10 Web design company in Bangalore,Best Web Development Company in Bangalore, Web Design Company, Website Development Agency in India -Spad Software</title>
        <meta name="keyword" content="Hire Talent" />
      </Head>
  
   

    <Box sx={{textAlign:'left',background:'white',color:'black',
        
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25)'}}>

<Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
style={{top:'60px',position:'relative',background: 'linear-gradient(180deg, #FEF7E2 0%, #EEEEFD 100%)'}}>
        <Grid item xs={12} style={{left: '0px',position: 'relative'}}>
      <div style={{left: '50px',width:'85%',position: 'relative'}}>
   <h3 style={{color:'#da4536',textAlign:'center'}}>Spad Software Refund Policy</h3>
        <div>
      

<h4  style={{marginTop:'20px'}}>Refund Timeline:</h4>
   <div>Once you request the refund by sending mail to softwareservices.helpdesk@gmail.com your refund will be initiated in 48 hours. 
    and you” ll receive a refund amount into your bank account in 2 to 3 working days after initiation.</div>
 
</div>


        <div >
      
<h4  style={{marginTop:'20px'}}>Refund Scenario:</h4>
   <div>The client must ask for a full refund at the stage when they get the first or second 
    variation(option) of the design. After entering into revision mode or beyond 2nd design stage, 
    client is not eligible to get 100% as a refund.</div> 
   <div>
   if the client wants to see all the designs and in the end, he/she is
    still not satisfied then the client is eligible to ask for a 50% as refund.
   </div>
   
</div>

<div>
        <div >

<h4  style={{marginTop:'20px'}}>SPAD Softwaremay refund Customers for the following reasons:
</h4>
   <div>(i) the Sold Design is Defective;</div> 
   <div>(ii) SPAD Softwareis required by law or considers that it is required by law to do so;</div>
   <div>(iii) SPAD Softwaredetermines that issuing a refund to the Customer will 
    avoid any dispute or increased costs to spadSoftware;</div>
   <div>(iv) SPAD Softwareissues the refund to the Customer in accordance
     with any refund policy specified by SPAD Softwarefrom time to time;</div>
   <div>(v) the order placed (or request made) by the Customer is found to be fraudulent. 
    A Sold Design will be deemed to be “Defective” if: (i) Customer and Designer agree it 
    is defective and notify SPAD Softwareof this fact; (ii) the Sold Design is subject to a 
    third party claim that the Sold Design infringes/misappropriates such party’s IPR, that 
    is not frivolous. 
    If any of the reasons regarding design, SPAD Softwarerefunds the payment to the Customer.</div>


    </div>
</div>

</div>

        </Grid>
       

     
      </Grid>

   
  </Box>

 
 
  </>
  )
}

export default refund