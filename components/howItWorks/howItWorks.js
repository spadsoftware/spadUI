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
    borderWidth: "0px 0px 0px 20px",
    borderColor: "#0231f7",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "0px 0px 0px 0px",
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25);'
    }}>
      <h5 style={{fontSize:'18px',color:'#d1482d',textAlign:'center'}}>How Spad Software Works-It's 3 step process.</h5>
      <div style={{fontSize:'18px',color:'#d1482d',textAlign:'center'}}>Start</div>
    <Timeline position="alternate" >
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        Through Book an Appoinment
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot  color="primary">
          <ImportContactsIcon style={{background:''}}/>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" style={{fontSize:'18px',color:'#d1482d'}}>
          Tell Us your Requirement
        </Typography>
        <Typography>You can select the requirement like web development,web design,digital marketing,real time Training,Placement services through book an Appoinment</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        within 12 hours
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot  color="primary">
          <SavedSearchIcon  style={{background:''}}/>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" style={{fontSize:'18px',color:'#d1482d'}}>
          We will alalyze your requirement
        </Typography>
        <Typography>Our Expert team will look into your requirement and will prepare the process and quote</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        within 24 hours
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <RequestQuoteIcon/>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }} >
        <Typography variant="h6" component="span" style={{fontSize:'18px',color:'#d1482d'}}>
          Get the quote 
        </Typography>
        <Typography>we will get back with you within 24 hours and provide 
          estimation quote & development Ideas</Typography>
      </TimelineContent>
    </TimelineItem>
    
  </Timeline>
  <div style={{fontSize:'18px',color:'#d1482d',textAlign:'center'}}>End</div>
  </section>
  )
}

export default HowItWorks