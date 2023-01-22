import React from 'react'
import classes from './services.module.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { loadCSS } from 'fg-loadcss';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import SouthIcon from '@mui/icons-material/South';
import StarIcon from '@mui/icons-material/Star';
import Grid2 from '@mui/material/Unstable_Grid2'; 
import Image from 'next/image';
const { useState, useEffect } = React;
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { textAlign } from '@mui/system';


const ServicesComponent = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
    <>
    <section id="services" className= {classes.section_service}>

    <div className= {classes.section__btm}>
      <div id="stick-title">
  
                <div>What we offers</div>
                <Image
                  src={`/images/title_header/hdrBtm.png`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                /></div>
                
  
      <div className= {classes.section__subtlt}>We are offering latest technology to our clients and students </div>
      </div>
    
    <Box sx={{ width: '100%', typography: 'body1' }} className= {classes.section_service_box}>
      <TabContext value={value} style={{}}>
        <Box sx={{ width:'98%',borderBottom: 1, borderColor: 'divider',textAlign:'center' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" 
          className= {classes.section_service_tblhdr} centered 
          style={{
        
        }}
          
          >
            <Tab  label=" Services" value="1" 
            />
            <Tab label=" Training" value="2" />
            <Tab label=" Consultancy" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"  className= {classes.section_servicesvc}>
          
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }}>
  <Grid item className= {classes.section_servicesvc1}  xs={4} sm={4} md={2}>
   <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/services/services-digital.png`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Digital Marketing</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc2} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/services/services-ui-ux.png`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>UI / UX Design and Development</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc3} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/services/services-mainten.png`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Website Maintenanace</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc4}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/services/services-csm.png`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>CMS Website Development</h4>
    </div>
  </Grid>

  <Grid item className= {classes.section_servicesvc5} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
  <div className= {classes.service_icon}>
    <div className= {classes.service_icon_gif2}></div>
   </div>

<h4 style={{color:'white'}}>Ecommerce</h4>
    </div>
  </Grid>
  <Grid item   xs={4} sm={4} md={2} className= {classes.section_servicesvc6}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/services/services-wordpress.png`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>WordPress Development</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc7}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/services/services-seo.png`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Search Engine Optimization</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc8}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
  <div className= {classes.service_icon}>
    <div className= {classes.service_icon_gif3}></div>
   </div>
<h4 style={{color:'white'}}>PHP Development</h4>
    </div>
  </Grid>

  <Grid item className= {classes.section_servicesvc9} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/services/services-payment.png`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Payment Gateway Integration</h4>
    </div>
  </Grid>
  <Grid item  className= {classes.section_servicesvc10} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
  <div className= {classes.service_icon}>
    <div className= {classes.service_icon_gif}></div>
   </div>
<h4 style={{color:'white'}}>Branding</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc11}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
  <div className= {classes.service_icon}>
    <div className= {classes.service_icon_gif4}></div>
   </div>
<h4>Mobile App</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc12}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/services/services-redesign.png`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Website Redesigning</h4>
    </div>
  </Grid>
</Grid>
          
          </TabPanel>
        <TabPanel value="2"  className= {classes.section_servicetrn}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }}>
  <Grid item className= {classes.section_servicesvc011}  xs={4} sm={4} md={2}>
   <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/tech/angt.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Angular</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc21} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/tech/reactt.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>React</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc31} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/tech/javat.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Java</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc41}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/tech/node.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Nodejs</h4>
    </div>
  </Grid>

  <Grid item className= {classes.section_servicesvc51} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
  <Image className={classes.svc_img}
  src={`/images/tech/pyt.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>

<h4>python</h4>
    </div>
  </Grid>
  <Grid item   xs={4} sm={4} md={2} className= {classes.section_servicesvc61}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/tech/m.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Database</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc71}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/tech/seo.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>SEO/Digital Marketing</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc81}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
  <Image className={classes.svc_img}
  src={`/images/tech/php.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>PHP</h4>
    </div>
  </Grid>

  <Grid item className= {classes.section_servicesvc91} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/tech/w.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Wordpress</h4>
    </div>
  </Grid>
  <Grid item  className= {classes.section_servicesvc101} xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
  <Image className={classes.svc_img}
  src={`/images/tech/aws.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Aws</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc111}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
  <Image className={classes.svc_img}
  src={`/images/tech/d.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Devops</h4>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvc121}  xs={4} sm={4} md={2}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/tech/h.svg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
<h4>Bigdata</h4>
    </div>
  </Grid>
</Grid>
          </TabPanel>
        <TabPanel value="3"  className= {classes.section_servicecon}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
 
  <Grid item className= {classes.section_servicesvcc91} xs={4} sm={4} md={4}>
  <div className={classes.svcs_img}>
   <Image className={classes.svc_img}
  src={`/images/services/bulk.png`}
  alt={'Spad Software Logo'}
  width={370}
  height={300}
/>
<h4>Bulk Hiring</h4>
<p>Bulk hiring means the employment of a large number of employees. 
  This is the process by which an organization recruits major candidates in a short amount of time. 
 </p>
    </div>
  </Grid>
  <Grid item  className= {classes.section_servicesvcc101} xs={4} sm={4} md={4}>
  <div className={classes.svcs_img}>
  <Image className={classes.svc_img}
  src={`/images/services/Os.png`}
  alt={'Spad Software Logo'}
  width={370}
  height={300}
/>
<h4>Outsourcing</h4>
<p>
   The scenario of global competition increasingly pushes companies to make use of outsourcing services through a wide range of 
    front and back-office processes aimed at favouring a more agile transformation of their activities.
 </p>
    </div>
  </Grid>
  <Grid item className= {classes.section_servicesvcc111}  xs={4} sm={4} md={4}>
  <div className={classes.svcs_img}>
  <Image className={classes.svc_img}
  src={`/images/services/rec.png`}
  alt={'Spad Software Logo'}
  width={370}
  height={300}
/>
<h4>Recruitment Process</h4>
<p>Thanks to the external procurement of personnel, better known as the term outsourcing, companies have the 
   possibility to speed up the recruiting process and optimize HR activities.</p>
    </div>
  </Grid>

</Grid>
          
          </TabPanel>
      </TabContext>
    </Box>
    </section >
    </>
  )
}

export default ServicesComponent