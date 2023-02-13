import React, { useReducer } from 'react'

import Head from "next/head";
import { Typography } from '@mui/material'
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


      <Box sx={{ textAlign: 'center', padding: '0px', borderStyle: 'solid', borderWidth: '0px 0px 0px 5px', borderColor: '#da4536',
        zIndex: '1',
        position: 'relative' }}> 
      <div className='subTitleHeading ' style={{textAlign: 'center'}}>Spad Software Money Back Policy</div>
      </Box>
      <Box sx={{  
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderWidth: '0px 0px 0px 5px',
        borderColor: '#212861',
        transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
        padding: '70px 0px 20px 0px',
        zIndex: '1',
        position: 'relative'

      }}>
        <Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          <Grid item xs={6} md={2} style={{ left: '0px', position: 'relative' }}>
            <div style={{ position: 'relative'}}>
              <div style={{ textAlign: 'center' }}>
                <Image
                  src={`/images/mb/mb.png`}
                  alt={'Spad Software Logo'}
                  width={156}
                  height={156}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={5} style={{ left: '0px', position: 'relative',paddingLeft: '30px' }}>
            <div style={{ position: 'relative' }}>
              <div className='text-left'>
                <h3 className='subTitleMainHeading'>
                  100% Money-Back Guarantee</h3>
                <div style={{ fontSize: '15px', color: '#0000008a', fontWeight: '400', lineHeight: '30px' }}>We believe if our clients are happy only then can we stay and thrive.
                A &nbsp;<span style={{ borderBottom: '3px solid #000000', color: '#000000' }}> "Money-Back Guarantee" </span> is a statement or promise made by SPAD Software Consultancy Services Private Limited to its clients, which essentially says that if the client is 
                not satisfied with the services provided, they will receive a full or partial refund of their payment. 
               
                  At SPAD Software Consultancy Services Private Limited, we're committed to providing our clients with the best possible software consultancy services.
                   That's why we offer a money-back guarantee on all of our services. 
                 
                    If for any reason you're not completely satisfied with the services we provide, 
                    we'll work with you to make it right or provide you with a full refund. We believe in our services, 
                    and  &nbsp;<span style={{ borderBottom: '3px solid #000000', color: '#000000' }}> we're confident that you'll be completely satisfied with the results </span>.</div>

              

              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={5} style={{ left: '0px', position: 'relative',paddingLeft: '30px'  }}>
            <div style={{ position: 'relative' }}>
              <div className='text-left'>
                <h3 className='subTitleMainHeading'>
                  Refund Scenario:</h3>
                <div style={{ fontSize: '15px', color: '#0000008a', fontWeight: '400', lineHeight: '30px' }}>
                It's important to note that a money-back guarantee should be specific and clear, and should outline the conditions and circumstances under which a client is eligible for a refund.</div>
                <div style={{color: '#0000008a', fontWeight: '400'}}>
                Additionally, the company should have a clear process for handling refund requests, and should communicate this process to clients in advance to ensure a smooth and straightforward process if a refund is requested.
                if the client wants to see all the designs and in the end, he/she is still not
                  satisfied then the client is eligible to ask for a 50% as refund.</div>
                <div style={{color: '#0000008a', fontWeight: '400'}}>Read the full <Link href='/refund'><span>
                Refund policy here</span></Link></div>

                <div style={{ paddingTop: '10px' }}><Image
                  src={`/images/mb/signature.png`}
                  alt={'Spad Software Logo'}
                  width={158}
                  height={38}
                />
                  <div style={{ top: '-18px', position: 'relative' }}>Sambathkumar Manjula</div>
                  <div style={{ top: '-18px', position: 'relative' }}> Director of Spad software</div>
                </div>
              </div>
            </div>
          </Grid>


        </Grid>


      </Box>



    </>
  )
}

export default MoneyBack