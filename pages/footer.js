import React, { useReducer } from 'react'

import Head from "next/head";
import { Typography } from '@mui/material'
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
import classNames from 'classnames';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  FacebookShareCount,
  OKShareCount
} from 'next-share';

import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  InstapaperShareButton,
  InstapaperIcon,

} from 'next-share';
const Item = styled(Paper)(({ theme }) => ({
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
  const [newsletter, setNewsletter] = useState('');


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

  async function saveNewletter() {
    let saveEmail = {
      email: newsletter
    }
    const response = await fetch('http://127.0.0.1:8080/newsletter', {
      method: 'POST',
      body: JSON.stringify(saveEmail),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setNewsletter('');
    // console.log()
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  }
  async function sendMessageHandler(event) {
    event.preventDefault();
    // // console.log(enteredDate,enteredEmail,enteredName,
    //   enteredPhone,enteredCategory,enteredMessage,value.$d)

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
        <title>
          Web Design Company in Bangalore | Website Development Company in
          Bangalore | Best Training & placement company in Bangalore- Spad
          Software
        </title>
        <meta name="keyword" content="Footer" />
      </Head>
      <Box className="newletter-section">
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12 }}
          className="customContainer"
        >
          <Grid item xs={12} md={12}>
            <div className="newsletter-wrapper">
              <div className="newsletter-leftsider">
                <img
                  src={`/images/logo/newsletter.svg`}
                  className="img-fluid"
                />
                <h4>Newsletter</h4>
                <p>Subscribe and get notification from us</p>
              </div>
              <div className="form-group newsletter-form">
                <TextField
                  id="standard-basic"
                  size="small"
                  placeholder="Email Address"
                  variant="standard"
                  value={newsletter}
                  onChange={(event) => setNewsletter(event.target.value)}
                />
                <Button
                  variant="contained"
                  size="small"
                  onClick={(event) => saveNewletter()}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box className="footerWrapper">
        <Grid
          container
          rowSpacing={1}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="customContainer"
        >
          <Grid item xs={6} md={3}>
            <img
              src={`/images/logo/spadlogowhite.png`}
              className="img-fluid"
              width={220}
            />
            <h5>
              Looking for the Right Web Design & Development Company to
              visualize your business idea into reality? Then you are landed in
              right place! Spad software is your one-stop shop for all your
              software development needs. Power Up Your Development and Design
              Skills with spad Software.
            </h5>
            <h5>GSTIN:33ABICS7047K1ZZ</h5>
            <h5>CIN:U72900TN2022PTC152959</h5>
          </Grid>

          <Grid item xs={6} md={3}>
            <h3 className="text-white">Quick Link</h3>
            <h5>
              <img
                src={`/images/footer/arrow.png`}
                style={{ width: "9px", marginRight: "9px" }}
                className="img-fluid"
              />
              Book an Appoinment, Turn your visions into reality with the help
              of our talented team
              <Link className="text-white" href="/home">
                <span className="text-white greenbadge"> click here</span>
              </Link>
            </h5>
            <h5>
              <img
                src={`/images/footer/arrow.png`}
                style={{ width: "9px", marginRight: "9px" }}
                className="img-fluid"
              />
              Looking for Job, we will land you in Best Company
              <Link href="/jobSeekers" className="text-white">
                <span className="text-white greenbadge"> click here</span>
              </Link>
            </h5>
            <h5>
              <img
                src={`/images/footer/arrow.png`}
                style={{ width: "9px", marginRight: "9px" }}
                className="img-fluid"
              />
              Hire Talents, we are the one to provide best resource
              <Link href="/hireTalents" className="text-white">
                <span className="text-white greenbadge"> click here</span>
              </Link>
            </h5>
            {/* <h5>Subscribe Now
              <Link href='/hireTalents' className='text-white'>
                <span className='text-white greenbadge'> click here
                </span>
              </Link>
            </h5> */}
          </Grid>
          <Grid item xs={6} md={3}>
            <h3 className="text-white">Services</h3>

            <span>
              <div>
                <div className="footer-address">
                  <span>
                    <img
                      src={`/images/footer/arrow.png`}
                      style={{ width: "9px", marginRight: "9px" }}
                      className="img-fluid"
                    />
                    Home
                  </span>
                </div>
                <div className="footer-address">
                  <span>
                    <img
                      src={`/images/footer/arrow.png`}
                      style={{ width: "9px", marginRight: "9px" }}
                      className="img-fluid"
                    />
                    About US
                  </span>
                </div>
                <div className="footer-address">
                  <span>
                    <img
                      src={`/images/footer/arrow.png`}
                      style={{ width: "9px", marginRight: "9px" }}
                      className="img-fluid"
                    />
                    Goal
                  </span>
                </div>
                <div className="footer-address">
                  <span>
                    <img
                      src={`/images/footer/arrow.png`}
                      style={{ width: "9px", marginRight: "9px" }}
                      className="img-fluid"
                    />
                    Pricing
                  </span>
                </div>
                <div className="footer-address">
                  <span>
                    <img
                      src={`/images/footer/arrow.png`}
                      style={{ width: "9px", marginRight: "9px" }}
                      className="img-fluid"
                    />
                    What We Do
                  </span>
                </div>
                <div className="footer-address">
                  <span>
                    <img
                      src={`/images/footer/arrow.png`}
                      style={{ width: "9px", marginRight: "9px" }}
                      className="img-fluid"
                    />
                    Services
                  </span>
                </div>
                <div className="footer-address">
                  <span>
                    <img
                      src={`/images/footer/arrow.png`}
                      style={{ width: "9px", marginRight: "9px" }}
                      className="img-fluid"
                    />
                    How It's Work
                  </span>
                </div>
              </div>
            </span>
          </Grid>
          <Grid item xs={6} md={3}>
            <h3 className="text-white">Get In Touch with US </h3>
            <div className="social-icons">
              <h5 className="text-white">Follow US</h5>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/spad-software"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/spadsoft"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=%2B918438353493&amp;text&amp;type=phone_number&amp;app_absent=0"
                  >
                    <WhatsAppIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/spadsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <h5 className="text-white">Share us</h5>
              <ul>
                <li>
                  <FacebookShareButton
                    url={"https://www.spadsoftware.com"}
                    quote={
                      "Spad software is your one-stop shop for all your software development needs. Power Up Your Development and Design Skills with spad Software. Turn your visions into reality with the help of our talented team of developers. Our team consists of the best website builders in bangalore who specializes in providing services for most of the industries like Ecommerce, Healthcare, IT, food Processing, Automobiles, Steel Equipments, Mining, Banking & Finance, software Training & stock market Training."
                    }
                    hashtag={"#spadsoftware"}
                  >
                    <FacebookIcon />
                  </FacebookShareButton>
                </li>
                <li>
                  <LinkedinShareButton url={"https://www.spadsoftware.com"}>
                    <LinkedInIcon />
                  </LinkedinShareButton>
                </li>
                <li>
                  <WhatsappShareButton
                    url={"https://www.spadsoftware.com"}
                    title={
                      "Spad software is your one-stop shop for all your software development needs. Power Up Your Development and Design Skills with spad Software. Turn your visions into reality with the help of our talented team of developers. Our team consists of the best website builders in bangalore who specializes in providing services for most of the industries like Ecommerce, Healthcare, IT, food Processing, Automobiles, Steel Equipments, Mining, Banking & Finance, software Training & stock market Training."
                    }
                    separator=":: "
                  >
                    <WhatsAppIcon />
                  </WhatsappShareButton>
                </li>
                <li>
                <EmailShareButton
                url={'https://www.spadsoftware.com'}
                subject={'Spad Software'}
                body="Spad software is your one-stop shop for all your software development needs. Power Up Your Development and Design Skills with spad Software. Turn your visions into reality with the help of our talented team of developers. Our team consists of the best website builders in bangalore who specializes in providing services for most of the industries like Ecommerce, Healthcare, IT, food Processing, Automobiles, Steel Equipments, Mining, Banking & Finance, software Training & stock market Training."
                   
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-address">
                <MailOutlineIcon className="icons" />
                <span>
                  <Link href="mailto:info@spadsoftware.com">
                    info@spadsoftware.com
                  </Link>
                </span>
              </div>
              <div className="footer-address">
                <PhoneEnabledOutlinedIcon className="icons" />
                <span>
                  <Link href="tel:8438353493">8438353493</Link>
                </span>
              </div>
              <div className="footer-address">
                <LocationOnIcon className="icons" />
                <span>Bangalore</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <section className="footer-secondary">
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <p className="copyRightContent">
                Copyright © 2023 by SPAD Software consultancy services Private
                Limited. All rights reserved.
              </p>
            </Grid>
          </Grid>
        </Box>
      </section>

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </>
  );
}

export default footer