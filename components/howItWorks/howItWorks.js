import React from 'react'

import Head from "next/head";
import {Typography } from '@mui/material'
import Image from 'next/image';
import { loadCSS } from 'fg-loadcss';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
const HowItWorks = () => {
  return (
    <section style={{top:'0px',position:'relative',
    borderStyle: 'solid',
    borderWidth: "0px 0px 0px 5px",
    borderColor: "#212861",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "70px 0px 0px 0px", 
        textAlign: 'center'
    }}>
      <div className='subTitleHeading'>Step Process</div>
      <h3 className='subTitleMainHeading'>How Spad Software Works-It's 3 step process.</h3>
      <div style={{fontSize:'18px',fontWeight: '600',color:'#4caf50',textAlign:'center', marginTop: '60px'}}>Start</div>
    <Timeline position="alternate" className='timeline-customize'>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary" className='timeLineSubText'
      >
        Through Book an Appoinment
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot  style={{background:'#212861'}}>
          <ImportContactsIcon/>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" className='timeLineTitleText'>
          Tell Us your Requirement
        </Typography>
        <Typography className='timeLineSubText'>You can select the requirement like web development,web design,digital marketing,real time Training,Placement services through book an Appoinment</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary" className='timeLineSubText'
      >
        within 12 hours
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot  style={{background:'#212861'}}>
          <SavedSearchIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" className='timeLineTitleText'>
          We will alalyze your requirement
        </Typography>
        <Typography  className='timeLineSubText'>Our Expert team will look into your requirement and will prepare the process and quote</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary" className='timeLineSubText'
      >
        within 24 hours
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot style={{background:'#212861'}}>
          <RequestQuoteIcon/>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }} >
        <Typography variant="h6" component="span" className='timeLineTitleText'>
          Get the quote 
        </Typography>
        <Typography className='timeLineSubText'>we will get back with you within 24 hours and provide 
          estimation quote & development Ideas</Typography>
      </TimelineContent>
    </TimelineItem>
    
  </Timeline>
  <div style={{fontSize:'18px',color:'#d1482d',fontWeight: '600', textAlign:'center'}}>End</div>
  </section>
  )
}

export default HowItWorks