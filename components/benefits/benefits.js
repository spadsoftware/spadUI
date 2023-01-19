import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import classes from './benefits.module.css';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const BenefitsComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="technology" className= {classes.section_tech}>
<h4>Our Process</h4>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Development Process" {...a11yProps(0)} />
        <Tab label="Escalation Process" {...a11yProps(1)} />
        <Tab label="Industries We serve" {...a11yProps(2)} />
   
      </Tabs>
      <TabPanel className={classes.our_Process}  value={value} index={0}>
      <Image
      className={classes.process_img}
                  src={`/images/process/process.svg`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                />
      </TabPanel>
      <TabPanel className={classes.our_Process} value={value} index={1}>
      <Image
      className={classes.process_img}
                  src={`/images/process/esclation.svg`}
                  alt='Spad Software Log about'
                  width={126}
                  height={5}
                />
      </TabPanel>
      <TabPanel className={classes.our_Process} value={value} index={2}>
      <Grid container rowSpacing={1} spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }}>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.ed}>Education</span>
  <span  className={classes.ind_name}>Education</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.md}>Health Care / Medical </span>
  <span  className={classes.ind_name}>Health Care / Medical </span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.ent}>Entertainment</span>
  <span  className={classes.ind_name}>Entertainment</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.fsb}>Financial Services & Banking</span>
  <span  className={classes.ind_name}>Financial Services & Banking</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.ba}>Business & Accounting</span>
  <span  className={classes.ind_name}>Business & Accounting</span>  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.re}>Retail & E-commerce</span>
  <span  className={classes.ind_name}>Retail & E-commerce</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.tr}>Travel</span>
  <span  className={classes.ind_name}>Travel</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.trl}>Transport & Logistics</span>
  <span  className={classes.ind_name}>Transport & Logistics</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.fr}>Food & Restaurants</span>
  <span  className={classes.ind_name}>Food & Restaurants</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.res}>Real Estate</span>
  <span  className={classes.ind_name}>Real Estate</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.og}> Oil & Gas</span>
  <span  className={classes.ind_name}> Oil & Gas</span>
  </Grid>
  <Grid item xs={1} md={2} sm={2}>
  <span className={classes.it}>Information Technology</span>
  <span  className={classes.ind_name}>Information Technology</span>  </Grid>
</Grid>
      </TabPanel>
     
    </Box>
    </section>
  );

}

export default BenefitsComponent