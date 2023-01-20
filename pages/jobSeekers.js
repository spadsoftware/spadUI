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
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  async function sendContactData(contactDetails) {

    let formData = new FormData();
    formData.append("email",contactDetails.email);
    formData.append("name", contactDetails.name);
    formData.append('skills', contactDetails.skills);
    formData.append('phone', contactDetails.phone);
    formData.append('location', contactDetails.location);
    formData.append('exp',contactDetails.exp );
    formData.append('salary', contactDetails.salary);
    formData.append('desc', contactDetails.desc);
    formData.append('file', contactDetails.file);
    formData.append('fileName', contactDetails.phone);


    const response = await axios.post("http://127.0.0.1:8080/jobSeeker", formData);
  
    const data = await response;
  
    // if (!response.ok) {
    //   throw new Error(data.message || 'Something went wrong!');
    // }
  }

  

const jobSeekers = () => {
    // const classes = useStyles();

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredJobLoc, setEnteredJobLoc] = useState('');
  const [enteredExp, setEnteredExp] = useState('');
  const [enteredSal, setEnteredSal] = useState('');
  const [enteredSkills, setEnteredSkills] = useState('');
  const [enteredDesc, setEnteredDesc] = useState('');
  const [enteredFile, setEnteredFile] = useState('');
  const [enteredFileName, setEnteredFileName] = useState('');

  

  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();


  const handleCapture = ({ target }) => {
    setEnteredFile(target.files[0]);
    setEnteredFileName(target.files[0].name)
    console.log(target.files[0])
  };


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
        skills: enteredSkills,
        phone: enteredPhone,
        location:enteredJobLoc,
        exp:enteredExp,
        salary:enteredSal,
        desc:enteredDesc,
        file:enteredFile
      });
      setRequestStatus('success');
      setEnteredSkills('');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredPhone('');
      setEnteredJobLoc('');
      setEnteredExp('');
      setEnteredSal('');
      setEnteredDesc('');
      setEnteredFile('');
      setEnteredFileName('');

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
        <meta name="keyword" content="JobSeeker" />
      </Head>
  
   

    <Box sx={{textAlign:'left',background:'white',color:'black',
        
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25);'}}>

<Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        
      
        <Grid item xs={6} style={{paddingLeft:'60px'}}>
        <h3 style={{color:'#da4536',textAlign:'center'}}>Why SPAD Software ?
    </h3>
    <h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>20k Placed Candidates & Counting</div>

</h4>
        <h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>100% Free of Cost,Free Consulting.</div>

</h4>

<h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>Direct Payroll jobs</div>

</h4>
<h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>Dedicated HR to your profile</div>

</h4>
<h4 style={{display:'flex'}}>
        <Image
  src={`/images/hire/checkbox.png`}
  alt={'Spad Software Logo'}
  width={56}
  height={56}
/>
<div  style={{marginTop:'20px'}}>We will Map you with the Employers with free of Cost.</div>

</h4>
    </Grid>
        <Grid item xs={6} style={{}}>
      
        <form onSubmit={sendMessageHandler}>
      <h3  style={{color:'#da4536',textAlign:'center'}}>Job Seeker</h3> 

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
          label="email"
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
         <TextField style={{marginTop:'14px',marginLeft:'14px',width:'45%'}}
          id="standard-required"
          label="Experience Level"
          value={enteredExp}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="subject"
          variant="standard"
          onChange={(event) => setEnteredExp(event.target.value)}
        />
         <TextField style={{marginTop:'14px',width:'45%'}}
          id="standard-required"
          label="Skills-Eg:Java,Phython,HTML"
          value={enteredSkills}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="subject"
          variant="standard"
          onChange={(event) => setEnteredSkills(event.target.value)}
        />
        <TextField style={{marginTop:'14px',marginLeft:'14px',width: '45%'}}
                id="standard-required"
                label="Location"
                value={enteredJobLoc}
                InputLabelProps={{
                    shrink: true,
                    

                }}
                name="subject"
                variant="standard"
                onChange={(event) => setEnteredJobLoc(event.target.value)}
                />

     
    
    <TextField style={{marginTop:'14px',width: '45%'}}
          id="standard-required"
          label="Expected Salary"
          value={enteredSal}
          InputLabelProps={{
            shrink: true,
            

          }}
          name="subject"
          variant="standard"
          onChange={(event) => setEnteredSal(event.target.value)}
        />
        <div style={{marginLeft:'12px',marginTop:'25px',display:'inline-block'}}> 
            <input
            style={{ display: "none" }}
            id="contained-button-file"
            type="file"
            // onChange={(event) => setEnteredFile(event.target.value)}
            onChange={handleCapture}

        />
        <label htmlFor="contained-button-file">
          
            <Button variant="contained" color="primary" component="span">
            Upload your Resume
            </Button>
        </label>
        <span>  {enteredFileName}</span>
        </div>

        <TextField style={{marginTop:'14px',width: '93%'}}
        placeholder="Tell Us Something"
        value={enteredDesc}
        multiline
        rows={2}
        maxRows={4}
        onChange={(event) => setEnteredDesc(event.target.value)}

        />
                

        <Button  style={{marginLeft:'20px',marginTop:'30px'}} type="submit" variant="contained">
          Submit
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

export default jobSeekers