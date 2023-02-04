import React  , { useReducer }from 'react'
import Image from 'next/image';
import { loadCSS } from 'fg-loadcss';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import classes from './home.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Notification from '../ui/notification';
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
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { textAlign } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const styles = theme => ({
  multilineColor:{
      color:'black'
  }
});

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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


const HomeComponent = (props) => {
  const { pageDetails } = props;
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
// console.log(enteredDate,enteredEmail,enteredName,
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
  // React.useEffect(() => {
  //   const node = loadCSS(
  //     'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
  //     // Inject before JSS
  //     document.querySelector('#font-awesome-css') || document.head.firstChild,
  //   );

  //   return () => {
  //     node.parentNode.removeChild(node);
  //   };
  // }, []); 
  return (
    <>
      <section id="home" className={classes.home1}>
        <Typography
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          className={classes.section_whatsapp}
        >
          <a
            href="https://api.whatsapp.com/send/?phone=%2B918438353493&amp;text&amp;type=phone_number&amp;app_absent=0"
            target="_blank"
          >
            <Image
              className={classes.section_whatsapp_img}
              src={`/images/logo/whatsup.png`}
              alt={"Spad Software Logo"}
              width={256}
              height={56}
            />
          </a>
        </Typography>

        <Stack
          spacing={2}
          style={{
            position: "relative",
            top: "13%",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <Grid
            sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              style={{ color: "#000248", paddingLeft: "5px" }}
            >
              <Divider />

              <div
                style={{
                  fontSize: "15px",
                  paddingBottom: "15px",
                  fontWeight: "600",
                }}
              >
                <span
                  className={classes.homeTitlecharBlink}
                  id="homeTitlecharBlink"
                >
                  S
                </span>
                ystem -
                <span
                  className={classes.homeTitlecharBlink}
                  id="homeTitlecharBlink"
                >
                  P
                </span>
                rogramming -
                <span
                  className={classes.homeTitlecharBlink}
                  id="homeTitlecharBlink"
                >
                  A
                </span>
                pplication -
                <span
                  className={classes.homeTitlecharBlink}
                  id="homeTitlecharBlink"
                >
                  D
                </span>
                river Software
              </div>

              <div
                style={{ display: "flex", color: "#000248", fontSize: "15px" }}
              >
                <Image
                  src={`/images/title_header/wedesign.svg`}
                  alt="Spad Software Log about"
                  width={56}
                  height={56}
                />
                <div style={{ fontWeight: "600" }}>We Design</div>
                <Image
                  src={`/images/title_header/wedevelop.svg`}
                  alt="Spad Software Log about"
                  width={56}
                  height={56}
                />
                <Typography style={{ fontWeight: "600" }}>
                  We Develop
                </Typography>
                <Image
                  src={`/images/title_header/wesupport.svg`}
                  alt="Spad Software Log about"
                  width={56}
                  height={56}
                />
                <div style={{ fontWeight: "600" }}>We Support</div>
              </div>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={4} md={4} style={{ color: "#000248" }}>
              <div
                style={{
                  fontSize: "17px",
                  lineHeight: "45px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Looking for the &nbsp;
                <span className= {classes.section_wwd_lt}>
                  Right Web Design & Development Company
                </span>{" "}
                to visualize your business idea into reality? Then you are
                landed in right place! We are team of talented developers
                developing all kind of &nbsp;
                <span className= {classes.section_wwd_lt}>
                  software & Digital Marketing{" "}
                </span>{" "}
                as well as providing &nbsp;
                <span className= {classes.section_wwd_lt}>
                  Real time Training and placement.{" "}
                </span>
                Our team consists of the best website builders in bangalore who
                specializes in providing services for most of the industries
                like Ecommerce, Healthcare, IT, food Processing, Automobiles,
                Steel Equipments, Mining, Banking & Finance.
              </div>
            </Grid>

            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "17ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <form onSubmit={sendMessageHandler}>
                <div className={classes.homeServiceiconBAHdr}>
                  Book An Appoinment
                </div>

                <div className={classes.homeServiceiconBA}>
                  <Grid item xs={4} sm={12}>
                    <TextField
                      style={{ width: "80%" }}
                      id="standard-required"
                      label="Name"
                      InputLabelProps={{
                        shrink: true,
                        className: classes.multilineColor,
                      }}
                      name="name"
                      value={enteredName}
                      variant="standard"
                      onChange={(event) => setEnteredName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4} sm={12}>
                    <TextField
                      style={{ width: "80%" }}
                      id="standard-required"
                      label="email"
                      value={enteredEmail}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.multilineColor,
                      }}
                      name="email"
                      variant="standard"
                      onChange={(event) => setEnteredEmail(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4} sm={12}>
                    <TextField
                      style={{ width: "80%" }}
                      id="standard-required"
                      label="Phone"
                      value={enteredPhone}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.multilineColor,
                      }}
                      type="number"
                      name="phone"
                      variant="standard"
                      onChange={(event) => setEnteredPhone(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4} sm={12}>
                    <TextField
                      style={{ width: "80%" }}
                      id="standard-required"
                      label="subject"
                      value={enteredMessage}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.multilineColor,
                      }}
                      name="subject"
                      variant="standard"
                      onChange={(event) =>
                        setEnteredMessage(event.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={4} sm={12}>
                    <FormControl
                      style={{ width: "100%" }}
                      sx={{ m: 0 }}
                      className={classes.homeServiceiconcategorieslbl}
                    >
                      <InputLabel
                        htmlFor="grouped-select"
                        shrink={true}
                        className={classes.homeServiceiconcategory}
                      >
                        Services
                      </InputLabel>
                      <NativeSelect
                        variant="outlined"
                        value={enteredCategory}
                        onChange={(event) =>
                          setEnteredCategory(event.target.value)
                        }
                        id="grouped-select"
                        label="Grouping"
                        className={classes.homeServiceiconcategorylabel}
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
                          <option value="ST-one2one">
                            One to one training
                          </option>
                          <option value="ST-ot">Online training</option>
                          <option value="ST-cr">Class room training</option>
                        </optgroup>
                        <option value="SC">software Consultancy</option>
                        <option value="DM">Digital Marketing</option>
                        <option value="BG">Branding</option>
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={12}
                    style={{ width: "64%", display: "inline-block" }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div className={classes.datepick}>
                        <DateTimePicker
                          label="Appoinment Date"
                          value={value}
                          onChange={handleChange}
                          className={classes.dt}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              sx={{
                                svg: { color: "black" },
                                input: { color: "black" },
                                label: { color: "black" },
                              }}
                            />
                          )}
                        />
                      </div>
                    </LocalizationProvider>
                  </Grid>
                  <Button
                    className={classes.homeServiceiconBtn}
                    type="submit"
                    variant="contained"
                  >
                    Get Quotes
                  </Button>
                </div>
              </form>
            </Box>
          </Grid>
        </Stack>

        <Grid
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            height: "100%",
          }}
          container
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid
            item
            xs={9}
            sm={9}
            md={9}
            style={{ position: "relative", display: "inline-block" }}
          >
            <div style={{ padding: "10px" }}>
              <div
                style={{
                  fontSize: "35px",
                  paddingBottom: "15px",
                  fontWeight: "600",
                  color: "#000248",
                  textAlign: "center",
                }}
              >
                <span
                  className={classes.homeTitlecharBlink}
                  id="homeTitlecharBlink"
                >
                  S
                </span>
                ystem -
                <span
                  className={classes.homeTitlecharBlink}
                  id="homeTitlecharBlink"
                >
                  P
                </span>
                rogramming -
                <span
                  className={classes.homeTitlecharBlink}
                  id="homeTitlecharBlink"
                >
                  A
                </span>
                pplication -
                <span
                  className={classes.homeTitlecharBlink}
                  id="homeTitlecharBlink"
                >
                  D
                </span>
                river Software
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#000248",
                  fontSize: "15px",
                }}
              >
                <div style={{ padding: "12px" }}>
                  <div style={{ position: "relative", left: "10px" }}>
                    <Image
                      src={`/images/title_header/wedesign.svg`}
                      alt="Spad Software Log about"
                      width={56}
                      height={56}
                    />
                  </div>
                  <div style={{ fontWeight: "600", fontSize: "15px" }}>
                    We Design
                  </div>
                </div>
                <div style={{ padding: "12px" }}>
                  <div style={{ position: "relative", left: "10px" }}>
                    <Image
                      src={`/images/title_header/wedevelop.svg`}
                      alt="Spad Software Log about"
                      width={56}
                      height={56}
                    />
                  </div>
                  <div style={{ fontWeight: "600", fontSize: "15px" }}>
                    We Develop
                  </div>
                </div>
                <div style={{ padding: "12px" }}>
                  <div style={{ position: "relative", left: "10px" }}>
                    <Image
                      src={`/images/title_header/wesupport.svg`}
                      alt="Spad Software Log about"
                      width={56}
                      height={56}
                    />
                  </div>
                  <div style={{ fontWeight: "600", fontSize: "15px" }}>
                    We Support
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingLeft: "35px" }}>
              <div
                style={{
                  fontSize: "17px",
                  lineHeight: "45px",
                  color: "#000248",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Looking for the &nbsp;
                <span className= {classes.section_wwd_lt}>
                  Right Web Design & Development Company
                </span>{" "}
                to visualize your business idea into reality? Then you are
                landed in right place!   Spad software is your one-stop shop for all your software development needs.
                Power Up Your Development and Design Skills with spad Software.
                Turn your visions into reality with the help of our talented team of developers.
                Our team consists of the best website builders in bangalore who
                specializes in providing services for most of the industries
                like Ecommerce, Healthcare, IT, food Processing, Automobiles,
                Steel Equipments, Mining, Banking & Finance, software Training &
                stock market Training.
              </div>
              <Box
                sx={{
                  display: "flex",
                  "& > :not(style)": {
                    m: 1,
                    width: 128,
                    height: 128,
                  },
                }}
              >
                {/* <Image
  src={`/images/home/trust.png`}
  alt={'Spad Software Logo'}
  width={50}
  height={56}
/> */}

                <Paper variant="outlined" style={{background:'#ecebfe'}}>
                  <div style={{textAlign:'center'}}>
                    {" "}
                    <Image
                      src={`/images/home/ps.png`}
                      alt={"Spad Software Logo"}
                      width={50}
                      height={56}
                    />{" "}
                  </div >{" "}
                  <div style={{textAlign:'center',fontSize:'12px',fontWeight:'600'}}> 1st year Running successfully.</div>
                </Paper>
                <Paper elevation={1} style={{background:'#bedbff'}}>
                  <div style={{textAlign:'center',padding: '10px'}}>
                    <Image
                      src={`/images/home/pd.png`}
                      alt={"Spad Software Logo"}
                      width={50}
                      height={56}
                    />{" "}
                  </div>
                  <div style={{textAlign:'center',fontSize:'12px',fontWeight:'600'}}> 10+ Projects launched</div>
                </Paper>
                <Paper  elevation={2} style={{background:'#e5e5e5'}}>
                  <div style={{textAlign:'center',padding: '10px'}}>
                    {" "}
                    <Image
                      src={`/images/home/sati.png`}
                      alt={"Spad Software Logo"}
                      width={50}
                      height={56}
                    />{" "}
                  </div>
                  <div style={{textAlign:'center',fontSize:'12px',fontWeight:'600'}}>client satisfaction</div>
                </Paper>
                <Paper  elevation={3} style={{background:'#e7ffc9'}}>
                  <div style={{textAlign:'center',padding: '10px'}}>
                    <Image
                      src={`/images/home/cr.png`}
                      alt={"Spad Software Logo"}
                      width={50}
                      height={56}
                    />
                  </div>
                  <div style={{textAlign:'center',fontSize:'12px',fontWeight:'600'}}>happy customer</div>
                </Paper>
                <Paper   elevation={4} style={{background:'#fff2d5'}}>
                  <div style={{textAlign:'center',padding: '10px'}}>
                    <Image
                      src={`/images/home/moneyback.png`}
                      alt={"Spad Software Logo"}
                      width={50}
                      height={56}
                    />
                  </div>

                  <div style={{textAlign:'center',fontSize:'12px',fontWeight:'600'}}>100% money Back</div>
                </Paper>
                <Paper  elevation={5} style={{background:'#d4d6d9'}}>
                  <div style={{textAlign:'center',padding: '10px'}}>
                    <Image
                      src={`/images/home/trust.png`}
                      alt={"Spad Software Logo"}
                      width={50}
                      height={56}
                    />
                  </div>

                  <div style={{textAlign:'center',fontSize:'12px',fontWeight:'600'}}>trusted Relationship</div>
                </Paper>
                <Paper  elevation={6} style={{background:'#b1c3d7'}}>
                  <div style={{textAlign:'center',padding: '10px'}}>
                    {" "}
                    <Image
                      src={`/images/home/sm.png`}
                      alt={"Spad Software Logo"}
                      width={50}
                      height={56}
                    />{" "}
                  </div>
                  <div style={{textAlign:'center',fontSize:'12px',fontWeight:'600'}}>more options for marketing</div>
                </Paper>
                <Paper  elevation={7} style={{background:'#bdffe4'}}>
                  <div style={{textAlign:'center',padding: '10px'}}>
                    <Image
                      src={`/images/home/support.png`}
                      alt={"Spad Software Logo"}
                      width={50}
                      height={56}
                    />
                  </div>
                  <div style={{textAlign:'center',fontSize:'12px',fontWeight:'600'}}>support & maintenance</div>
                </Paper>
              </Box>
            </div>
          </Grid>

          <Grid
            item
            xs={4}
            sm={4}
            md={3}
            style={{ padding: "15px", display: "inline-block" }}
          >
            <Card>
              <CardContent>
                <form onSubmit={sendMessageHandler}>
                  <div
                    style={{
                      textAlign: "center",
                      paddingBottom: "30px",
                      fontSize: "20px",
                    }}
                  >
                    Book An Appoinment
                  </div>

                  <div>
                    <Grid container>
                      <Grid item xs={4} sm={12}>
                        <TextField
                          style={{ width: "100%" }}
                          id="standard-required"
                          label="Name"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="name"
                          value={enteredName}
                          variant="standard"
                          onChange={(event) =>
                            setEnteredName(event.target.value)
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          style={{ width: "100%" }}
                          id="standard-required"
                          label="email"
                          value={enteredEmail}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          // style={{left:'8px'}}
                          name="email"
                          variant="standard"
                          onChange={(event) =>
                            setEnteredEmail(event.target.value)
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          style={{ width: "100%" }}
                          id="standard-required"
                          label="Phone"
                          value={enteredPhone}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          // style={{top:'10px',}}
                          type="number"
                          name="phone"
                          variant="standard"
                          onChange={(event) =>
                            setEnteredPhone(event.target.value)
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          style={{ width: "100%" }}
                          id="standard-required"
                          label="subject"
                          value={enteredMessage}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          // style={{top:'10px',left:'8px'}}
                          name="subject"
                          variant="standard"
                          onChange={(event) =>
                            setEnteredMessage(event.target.value)
                          }
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{
                          top: "10px",
                          position: "relative",
                          left: "-16px",
                        }}
                      >
                        <FormControl
                          style={{ width: "100%" }}
                          sx={{ m: 0 }}
                          // style={{top:'30px',width:'183px'}}
                        >
                          <InputLabel htmlFor="grouped-select" shrink={true}>
                            Services
                          </InputLabel>
                          <NativeSelect
                            variant="outlined"
                            value={enteredCategory}
                            onChange={(event) =>
                              setEnteredCategory(event.target.value)
                            }
                            id="grouped-select"
                            label="Grouping"
                            style={{ left: "17px" }}
                          >
                            <option value="dv"> </option>

                            <optgroup label="software Development">
                              <option value="SD-wd">Web Design</option>
                              <option value="SD-ld">Logo Design</option>
                              <option value="SD-crm">CRM Development</option>
                              <option value="SD-wrd">Website Redesign</option>
                              <option value="SD-wm">
                                Website Maintenanace
                              </option>
                            </optgroup>

                            <optgroup label="software Training">
                              <option value="ST-ct">Corporate Training</option>
                              <option value="ST-one2one">
                                One to one training
                              </option>
                              <option value="ST-ot">Online training</option>
                              <option value="ST-cr">Class room training</option>
                            </optgroup>
                            <option value="SC">software Consultancy</option>
                            <option value="DM">Digital Marketing</option>
                            <option value="BG">Branding</option>
                          </NativeSelect>
                        </FormControl>
                      </Grid>
                      <Grid
                        style={{
                          top: "23px",
                          position: "relative",
                          left: "0px",
                          maxWidth: "100%",
                        }}
                        item
                        xs={12}
                        sm={12}
                      >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            label="Appoinment Date"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                sx={{
                                  svg: { color: "black" },
                                  input: { color: "black" },
                                  label: { color: "black" },
                                }}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </div>
                </form>
              </CardContent>
              <CardActions
                style={{ justifyContent: "center", paddingTop: "50px" }}
              >
                <Button type="submit" variant="contained">
                  Get Quotes
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </section>

      <section className={classes.homeServiceiconFormBA}></section>

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

export default HomeComponent