import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetStaticProps,
    GetStaticPropsContext,
    NextPage,
  } from "next";
  import * as React from 'react';
  import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
  import CssBaseline from '@mui/material/CssBaseline';
  import MuiDrawer from '@mui/material/Drawer';
  import Box from '@mui/material/Box';
  import MuiAppBar from '@mui/material/AppBar';
  import Toolbar from '@mui/material/Toolbar';
  import List from '@mui/material/List';
  import Typography from '@mui/material/Typography';
  import Divider from '@mui/material/Divider';
  import IconButton from '@mui/material/IconButton';
  import Badge from '@mui/material/Badge';
  import Container from '@mui/material/Container';
  import Grid from '@mui/material/Grid';
  import Paper from '@mui/material/Paper';
  import Link from '@mui/material/Link';
  import MenuIcon from '@mui/icons-material/Menu';
  import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
  import NotificationsIcon from '@mui/icons-material/Notifications';
  import Footer from  '../footer'
  import { Services } from "../../public/data";
  import Image from 'next/image';
  import { useState, useEffect } from 'react';
  import dayjs from 'dayjs';
  import Stack from '@mui/material/Stack';
  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  import { TimePicker } from '@mui/x-date-pickers/TimePicker';
  import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
  import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
  import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
  import { textAlign } from '@mui/system';
  import Card from '@mui/material/Card';
  import CardActions from '@mui/material/CardActions';
  import CardContent from '@mui/material/CardContent';
  import InputLabel from '@mui/material/InputLabel';
  import MenuItem from '@mui/material/MenuItem';
  import ListSubheader from '@mui/material/ListSubheader';
  import FormControl from '@mui/material/FormControl';
  import Select from '@mui/material/Select';
  import Checkbox from '@mui/material/Checkbox';
  import NativeSelect from '@mui/material/NativeSelect';
  import Textarea from '@mui/joy/Textarea';
  import TextField from '@mui/material/TextField';
  import Button from '@mui/material/Button';
  import { useRouter } from "next/router";

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

  const About = (props) => {
    const { query } = props;
  // // console.log(query);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
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
    // // console.log(services);
    //const [filterdSvcs, setfilterdSvcs] =  useState('');

    const router = useRouter();
    const currentRoute = router.pathname;

    let filterdSvcs = Services.filter(services => services.name == router.asPath.split('/')[2])
    // setfilterdSvcs(fltrsvc)
    // console.log(filterdSvcs)

    // useEffect(() => {
      
    //   // console.log("fltrsvc")
    // }, []);




function createMarkup() {
  return {
     __html: filterdSvcs[0].expect,
  }
}
    return (
      <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
         
        >

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 ,top:'59px',position:'relative'}}>
          <button style={{float:'right',color:'white',background:'#ff1269',border:'1px solid #ff1269'}}
          onClick={() => router.back()}>Back</button>

          <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} md={9} sm={12} style={{paddingLeft:'0px',
        borderStyle: 'solid',
        borderWidth: "0px 0px 0px 5px",
        borderColor: "#ff1269",
        transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
            padding: "0px 0px 0px 0px",
        boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25)'}}>
                

               {filterdSvcs[0]?<Image
              src={filterdSvcs[0].img}
              alt={'Spad Software Logo'}
              width={876}
              height={366}
              style={{width:'100%',height:'100%'}}
            />:''}
          
          
              </Grid>

              <Grid item xs={12} md={3} sm={12} style={{paddingLeft:'0px',paddingTop:'0px',}}>
              <Paper sx={{ background:'white',height:'94%',
              borderStyle: 'solid',
              borderWidth: "0px 0px 0px 5px",
              borderColor: "#ff1269",
              transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
                  padding: "0px 0px 0px 0px",
              boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25)'}}>
              <form onSubmit={sendMessageHandler}>
                  <div
                    style={{
                      textAlign: "center",
                     
                      fontSize: "20px",
                    }}
                  >
                    Book An Appoinment
                  </div>

                  <div>
                    <Grid container style={{padding:'10px'}}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ width: "80%" }}
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
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ width: "80%" }}
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
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ width: "80%" }}
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
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ width: "80%" }}
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
                          style={{ width: "80%" }}
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
                            style={{ left: "17px",width:'100%' }}
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
                          maxWidth: "92%",
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
                <CardActions
                style={{ justifyContent: "center", paddingTop: "50px",top:'-30px',
              position:'relative' }}
              >
                <Button type="submit" variant="contained">
                  Get Quotes
                </Button>
              </CardActions>
              </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
         
              {/* Chart */}

              
              <Grid item xs={12} md={8} lg={9} style={{ borderStyle: 'solid',
    borderWidth: "0px 0px 0px 5px",
    borderColor: "#ff1269",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "0px 0px 0px 0px",
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25)'}}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >

          <div style={{textAlign:'center',fontSize:'15px',fontWeight:'600'}}>Why spad software for Your &nbsp;
          {filterdSvcs[0]?filterdSvcs[0].title:''}
          ?</div>

          <hr />
          {filterdSvcs[0]?filterdSvcs[0].about:''}
                               
           </Paper>
          
              </Grid>

          


              <Grid item xs={12} md={4} lg={3} style={{ borderStyle: 'solid',
    borderWidth: "0px 0px 0px 5px",
    borderColor: "#ff1269",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "0px 0px 0px 0px",
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25)'}}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                <div style={{textAlign:'center',fontSize:'15px',fontWeight:'600'}}>Technology</div>
                <ul>
        <li>{filterdSvcs[0]?filterdSvcs[0].techno.split('-')[0]:''}</li>
         <li>{filterdSvcs[0]?filterdSvcs[0].techno.split('-')[1]:''}</li>
         <li>{filterdSvcs[0]?filterdSvcs[0].techno.split('-')[2]:''}</li>
         <li>{filterdSvcs[0]?filterdSvcs[0].techno.split('-')[3]:''}</li>
         <li>{filterdSvcs[0]?filterdSvcs[0].techno.split('-')[4]:''}</li>


        </ul>
                 </Paper>
              </Grid>
              
              <Grid item xs={12}  md={8} lg={9} style={{ borderStyle: 'solid',
    borderWidth: "0px 0px 0px 5px",
    borderColor: "#ff1269",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "0px 0px 0px 0px",
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25)'}}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div style={{textAlign:'center',fontSize:'15px',fontWeight:'600'}}> Why  {filterdSvcs[0]?filterdSvcs[0].title:''} for your dream project?</div>
                
                {filterdSvcs[0]?filterdSvcs[0].desc:''}
                <p>Our experts understand the latest technologies and architectures, as well as key user experience trends.</p>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3} style={{ borderStyle: 'solid',
    borderWidth: "0px 0px 0px 5px",
    borderColor: "#ff1269",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "0px 0px 0px 0px",
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25)'}}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div style={{textAlign:'center',fontSize:'15px',fontWeight:'600'}}>  what to expect? </div>
          <ul>
        <li>{filterdSvcs[0]?filterdSvcs[0].expect.split('-')[0]:''}</li>
         <li>{filterdSvcs[0]?filterdSvcs[0].expect.split('-')[1]:''}</li>
         <li>{filterdSvcs[0]?filterdSvcs[0].expect.split('-')[2]:''}</li>
         <li>{filterdSvcs[0]?filterdSvcs[0].expect.split('-')[3]:''}</li>

        </ul>

                </Paper>
              </Grid>



              
            </Grid>
          </Container>
           
        </Box>
 
 
    ) };
  
  //!called every time  the page refreshed
  // export const getServerSideProps: GetServerSideProps = async (
  //    context: GetServerSidePropsContext
  // ) => {
  //    const res = await fetch('http://localhost:3000/api/services')
  //    const data = await res.json()
  //    // console.log(data)
  //    return { props: { services: data.services } }
  // }

  export const getServerSideProps = async (context) => {
    {
      const { query } = context;
      return { props: { query } };
    }
  }
  
  //!called only during the build of the project
  //? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
  //? also need to change the localhost during the deployment | see the todo
  // https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48
  
  // export const getStaticProps: GetStaticProps = async (
  //    context: GetStaticPropsContext
  // ) => {
  //    // // console.log(context);
  
  //    const res = await fetch('http://localhost:3000/api/services')
  //    const { services } = await res.json()
  //    // console.log({ services })
  //    return { props: { services: services } }
  // }
  
  export default About;