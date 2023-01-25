import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WebPricing from '../components/pricing/webPricing'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { DataGrid, GridToolbar,GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { GridRowClassNameParams } from '@mui/x-data-grid';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

const GridCellExpand = React.memo(function GridCellExpand(props) {
  const { width, value } = props;
  const wrapper = React.useRef(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        setShowFullCell(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  return (
    <Box
      ref={wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        alignItems: 'center',
        lineHeight: '24px',
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
      }}
    >
      <Box
        ref={cellDiv}
        sx={{
          height: '100%',
          width,
          display: 'block',
          position: 'absolute',
          top: 0,
        }}
      />
      <Box
        ref={cellValue}
        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {value}
      </Box>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17 ,color:'red'}}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current.offsetHeight - 3 ,color:'red'}}
          >
            <Typography variant="body2" style={{ padding: 8 }}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </Box>
  );
});



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function renderCellExpand(params) {
  if(params.id==10){

    return (
      


     <><> <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HM2WBMT0Q0"></Script>
        <Script>
          {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HM2WBMT0Q0');
        `}
        </Script></>
        
        <Button
          component="button"

          variant="contained"
          size="small"
          value={params.value || ''}
          onKeyDown={(event) => {
            if (event.key === ' ') {
              // Prevent key navigation when focus is on button
              event.stopPropagation();
            }
          } }
        >
          <Link style={{ color: 'white' }} href='/home'> Buy @ &nbsp;
            {params.value} </Link>
        </Button></>
    );
    
  }
  else if (params.id==0){
    return (
     <div style={{display:'block'}}>
    <span style={{fontSize:'16px',textDecoration:'line-through'}}>{params.value.split('-')[0]}</span>
    <div style={{color:'#1976d2'}}>{params.value.split('-')[1]}</div>
   </div>
    );
  }
  else{
  return (
    <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
  );
  }
}
function renderCellBtn(params) {
  if(params.id==10){

  return (
    
    <Button
    component="button"
   
    variant="contained"
    size="small"
    value={params.value || ''}
    onKeyDown={(event) => {
      if (event.key === ' ') {
        // Prevent key navigation when focus is on button
        event.stopPropagation();
      }
    }}
  >
 <Link style={{color:'white'}}  href='/home'> Buy @ &nbsp;
  {params.value} </Link>
  </Button>
  );
  
}
else if (params.id==0){
  return (
   <div style={{display:'block'}}>
  <span style={{fontSize:'16px',textDecoration:'line-through'}}>{params.value.split('-')[0]}</span>
  <div style={{color:'#1976d2'}}>{params.value.split('-')[1]}</div>
 </div>
  );
}
else{
  {params.value} 
}
}
function renderCellBtndg(params) {
  if(params.id==21){

  return (
    
    <Button
    component="button"
   
    variant="contained"
    size="small"
    value={params.value || ''}
    onKeyDown={(event) => {
      if (event.key === ' ') {
        // Prevent key navigation when focus is on button
        event.stopPropagation();
      }
    }}
  >
    <Link style={{color:'white'}}  href='/home'> Buy @ &nbsp;
  {params.value} </Link>
  </Button>
  );
  
}
else if (params.id==0){
  return (
   <div style={{display:'block'}}>
  <span style={{fontSize:'16px',textDecoration:'line-through'}}>{params.value.split('-')[0]}</span>
  <div style={{color:'#1976d2'}}>{params.value.split('-')[1]}</div>
 </div>
  );
}
else{
  {params.value} 
}
}
function renderCellBtnwd(params) {
  if(params.id==20){

  return (
    
    <Button
    component="button"
   
    variant="contained"
    size="small"
    value={params.value || ''}
    onKeyDown={(event) => {
      if (event.key === ' ') {
        // Prevent key navigation when focus is on button
        event.stopPropagation();
      }
    }}
  >
     <Link style={{color:'white'}}  href='/home'> Buy @ &nbsp;
  {params.value} </Link>
  </Button>
  );
  
}
else if (params.id==0){
  return (
   <div style={{display:'block'}}>
  <span style={{fontSize:'16px',textDecoration:'line-through'}}>{params.value.split('-')[0]}</span>
  <div style={{color:'#1976d2'}}>{params.value.split('-')[1]}</div>
 </div>
  );
}
else{
  {params.value} 
}
}
renderCellExpand.propTypes = {
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.object.isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: PropTypes.string,
};
renderCellBtn.propTypes = {
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.object.isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: PropTypes.string,
};
renderCellBtndg.propTypes = {

  colDef: PropTypes.object.isRequired,
 
  value: PropTypes.string,
};
renderCellBtnwd.propTypes = {

  colDef: PropTypes.object.isRequired,
 
  value: PropTypes.string,
}; 
const columns = [

  { field: 'col1', headerClassName:'super-app-theme--header', headerName: 'Startup', width: 200,
   renderCell: renderCellBtnwd },
  { field: 'col2', headerName: 'Small Business', width: 200 , renderCell: renderCellBtnwd},
  { field: 'col3', headerName: 'Ecommerce', width: 200, renderCell: renderCellBtnwd },
  { field: 'col4', headerName: 'Ecommerce Pro', width: 200 , renderCell: renderCellBtnwd},
  // { field: 'col5', headerName: 'STATER', width: 200 },
  { field: 'col6', headerName: 'Static Website', width: 200 , renderCell: renderCellBtnwd},
  { field: 'col7', headerName: 'Dynamic Website', width: 200, renderCell: renderCellBtnwd },
  { field: 'col8', headerName: 'Standard', width: 200 , renderCell: renderCellBtnwd},
  { field: 'col9', headerName: 'Corparate', width: 200, renderCell: renderCellBtnwd },

  
];


const rows = [
  {
    id: 0,
    idss:0,
    col1: "₹7,999+GST-₹7,999+GST",
    col2: "₹16,999+GST-₹13,999+GST",
    col3: "₹29,999+GST-₹24,999+GST",
    col4: "₹53,999+GST-49,999+GST",
    col5: "₹999+GST-₹1,999+GST",
    col6: "₹7,999+GST-₹4,999+GST",
    col7: "₹13,999+GST-₹9,999+GST",
    col8: "₹19,999+GST-₹15,000+GST",
    col9: "₹29,999+GST-₹25,000+GST",
  },
  {
    id: 1,idss:1,
    col1: "5 Page Modern Clean Website",
    col2: "10 Page Modern Clean Website",
    col3: "Up to 10 Products",
    col4: "Up to 25 Products",
    col5: "Static 1 page site ",
    col6: "Static 3 page site",
    col7: "Dynamic 3 Page Site",
    col8: "1 - Free Domain Name .com",
    col9: "1 - Free Domain Name .com",
  },
  {
    id: 2,idss:2,
    col1: "Domain and Hosting Configuration",
    col2: "Domain and Hosting Configuration",
    col3: "Domain and Hosting Configuration",
    col4: "Domain and Hosting Configuration",
    col5: "Ready Template",
    col6: "Ready Template",
    col7: "Content Management System",
    col8: "Free SSL Certificate",
    col9: "Free SSL Certificate",
  },
  {
    id: 3,idss:3,
    col1: "100% Mobile & Tablet Friendly",
    col2: "100% Mobile & Tablet Friendly",
    col3: "100% Mobile & Tablet Friendly",
    col4: "100% Mobile & Tablet Friendly",
    col5: "Hosting + SSL Certificate",
    col6: "Hosting + SSL Certificate",
    col7: "Hosting + SSL Certificate",
    col8: "Delivery : 7 Days",
    col9: "Delivery : 10 Days",
  },
  {
    id: 4,idss:4,
    col1: "Basic Website Graphics Design",
    col2: "Basic Website Graphics Design",
    col3: "Basic Website Graphics Design",
    col4: "Basic Website Graphics Design",
    col5: "100% Responsive Design",
    col6: "100% Responsive Design",
    col7: "cPanel Access",
    col8: "Dynamic Website - CMS",
    col9: "Dynamic Website - CMS",
  },
  {
    id: 5,idss:5,
    col1: "Unlimited Images & Videos",
    col2: "Unlimited Images & Videos",
    col3: "Unlimited Images & Videos",
    col4: "Unlimited Images & Videos",
    col5: "Business Email Id’s",
    col6: "Business Email Id’s",
    col7: "100% Responsive Design",
    col8: "Admin Panel",
    col9: "Admin Panel",
  },
  {
    id: 6,idss:6,
    col1: "Live Chat",
    col2: "Live Chat",
    col3: "Payment Gateway Integration",
    col4: "Payment Gateway Integration",
    col5: "Contact Form Submission",
    col6: "Contact Form Submission",
    col7: "3 Business Email Id’s",
    col8: "Unlimited Services or Product Listing",
    col9: "Unlimited Services Listing",
  },
  {
    id: 7,idss:7,
    col1: "Contact Form",
    col2: "Contact Form",
    col3: "Live Chat",
    col4: "Live Chat",
    col5: "-",
    col6: "Social Media Integration",
    col7: "Social Media Integration",
    col8: "Unlimited Sub Pages for services",
    col9: "Unlimited Service Sub Page Listing",
  },
  {
    id: 8,idss:8,
    col1: "Click to Call/Email",
    col2: "Click to Call/Email",
    col3: "Contact Form",
    col4: "Contact Form",
    col5: "-",
    col6: "-",
    col7: "SEO Ready Website",
    col8: "Readymade Themes",
    col9: "Unlimited Product Listing",
  },
  {
    id: 9,idss:9,
    col1: "SEO Ready Website",
    col2: "SEO Ready Website",
    col3: "Click to Call/Email",
    col4: "Click to Call/Email",
    col5: "-",
    col6: "-",
    col7: "Whatsapp Integration",
    col8: "Video Page",
    col9: "Unlimited Product Sub Page Listing",
  },
  {
    id: 10,idss:10,
    col1: "Free SSL Certificate",
    col2: "Google Map Integration",
    col3: "Whatsapp Integration",
    col4: "Whatsapp Integration",
    col5: "-",
    col6: "-",
    col7: "Google Map Integration",
    col8: "Dynamic Gallery/Portfolio",
    col9: "Video Page",
  },
  {
    id: 11,idss:1,
    col1: "Basic Site Protection",
    col2: "Search Engine Indexing",
    col3: "Social Media Integration",
    col4: "Search Engine Indexing",
    col5: "-",
    col6: "-",
    col7: "Contact Form Submission",
    col8: "1 Contact Form",
    col9: "1 Contact Form",
  },
  {
    id: 12,idss:12,
    col1: "-",
    col2: "Free SSL Certificate",
    col3: "SEO Ready Website",
    col4: "SEO Ready Website",
    col5: "-",
    col6: "-",
    col7: "Backup Source Code",
    col8: "Free Business Email Accounts",
    col9: "Dynamic Gallery/Portfolio",
  },
  {
    id: 13,idss:13,
    col1: "-",
    col2: "Basic Site Protection",
    col3: "Google Map Integration",
    col4: "Google Map Integration",
    col5: "-",
    col6: "-",
    col7: "-",
    col8: "Unlimited FREE Hosting",
    col9: "News & Events",
  },
  {
    id: 14,idss:14,
    col1: "-",
    col2: "-",
    col3: "Search Engine Indexing",
    col4: "Search Engine Indexing",
    col5: "-",
    col6: "-",
    col7: "-",
    col8: "Live Chat or Whatsapp Button",
    col9: "BLOG",
  },
  {
    id: 15,idss:15,
    col1: "-",
    col2: "-",
    col3: "Free SSL Certificate",
    col4: "Free SSL Certificate",
    col5: "-",
    col6: "-",
    col7: "-",
    col8: "Call to Action Button",
    col9: "1 Contact Form",
  },
  {
    id: 16,idss:16,
    col1: "-",
    col2: "-",
    col3: "Basic Site Protection",
    col4: "Basic Site Protection",
    col5: "-",
    col6: "-",
    col7: "-",
    col8: "-",
    col9: "Live Chat or Whatsapp Button",
  },

  {
    id: 17,idss:17,
    col1: "-",
    col2: "-",
    col3: "-",
    col4: "Website Speed Optimization",
    col5: "-",
    col6: "-",
    col7: "-",
    col8: "-",
    col9: "Call to Action Button",
  },
  {
    id: 18,idss:18,
    col1: "-",
    col2: "-",
    col3: "-",
    col4: "Website Conversion Optimization",
    col5: "-",
    col6: "-",
    col7: "-",
    col8: "-",
    col9: "Live Chat or Whatsapp Button",
  },
  {
    id: 19,idss:19,
    col1: "-",
    col2: "-",
    col3: "-",
    col4: "-",
    col5: "-",
    col6: "-",
    col7: "-",
    col8: "-",
    col9: "Unlimited FREE Hosting",
  },
  {
    id: 20,
    idss:20,
    col1: "₹7,999+GST",
    col2: "₹13,999+GST",
    col3: "₹24,999+GST",
    col4: "₹49,999+GST",
    col5: "₹1,999+GST",
    col6: "₹4,999+GST",
    col7: "₹9,999+GST",
    col8: "₹15,000+GST",
    col9: "₹25,000+GST",
  },
];
  
 
const columnsDG = [
  { field: 'idss', headerClassName:'Names', headerName: '', width: 200,},
  { field: 'col1', headerClassName:'BASIC', headerName: 'Startup', width: 200, renderCell: renderCellBtndg },
  { field: 'col2', headerName: 'STANDARD', width: 200, renderCell: renderCellBtndg },
  { field: 'col3', headerName: 'PROFESSIONAL', width: 200, renderCell: renderCellBtndg },
  { field: 'col4', headerName: 'ENTERPRISE', width: 200 , renderCell: renderCellBtndg},


  
];


const rowsDG = [
  {
    id: 0,
    idss:'Pricing',
    col1: "₹9,999+GST-₹5,999+GST",
    col2: "₹15,999+GST-₹10,999+GST",
    col3: "₹25,999+GST-₹21,999+GST",
    col4: "₹45,999+GST-₹35,999+GST",
 
  },
  {
    id: 1,idss:'Keywords',
    col1: "15",
    col2: "30",
    col3: "50",
    col4: "75",

  },
  

  {
    id: 2,idss:'SEO',
    col1: "✅",
    col2: "✅",
    col3: '✅',
    col4: '✅',

  },
  {
    id: 3,idss:'Initial Backlinks Analysis',
    col1: "✅",
    col2: "✅",
    col3: '✅',
    col4: '✅',
  },
  {
    id: 4,idss:'Content Marketing',
    col1: '❌',
    col2: "✅",
    col3: '✅',
    col4: '✅',

  },
  {
    id: 5,idss:'Pay Per Click (PPC)',
    col1: '❌',
    col2: '❌',
    col3: '✅',
    col4: '✅',

  },
  {
    id: 6,idss:'Email Marketing',
    col1: '❌',
    col2: '❌',
    col3: '✅',
    col4: '✅',

  },
  {
    id: 7,idss:'SMO',
    col1: '❌',
    col2: "✅",
    col3: '✅',
    col4: '✅',

  },
  {
    id: 8,idss:'Website Analysis',
    col1: "✅",
    col2: "✅",
    col3: '✅',
    col4: '✅',
 
  },
  {
    id: 9,idss:'Keyword Research',
    col1: "✅",
    col2: "✅",
    col3: '✅',
    col4: '✅',

  },
  {
    id: 10,idss:'Onpage Changes',
    col1: "Upto 50 pages",
    col2: "Upto 100 pages",
    col3: "Upto 200 pages",
    col4: "Upto 400 pages",

  },
  {
    id: 11,idss:'Google Analytics Setup & Integration',
    col1: "✅",
    col2: "✅",
    col3: '✅',
    col4: '✅',
   
  },
  {
    id: 12,idss:'Blogs Social Bookmarking Links',
    col1: "30",
    col2: "60",
    col3: "200",
    col4: "300",

  },
  {
    id: 13,idss:'Webpage/Blog Post On Client Website',
    col1: "1",
    col2: "2",
    col3: "10",
    col4: "15",

  },
  {
    id: 14,idss:'FACEBOOK MARKETING',
    col1: '❌',
    col2: "✅",
    col3: '✅',
    col4: '✅',

  },
  {
    id: 15,idss:'TWITTER MARKETING',
    col1: '❌',
    col2: '❌',
    col3: '✅',
    col4: '✅',
  
  },
  {
    id: 16,idss:'LINKEDIN MARKETING',
    col1: '❌',
    col2: '❌',
    col3: '✅',
    col4: '✅',
  },

  {
    id: 17,idss:'INSTAGRAM MARKETING',
    col1: '❌',
    col2: '❌',
    col3: '❌',
    col4: '✅',

  },
  {
    id: 18,idss:'PINTEREST MARKETING',
    col1: '❌',
    col2: '❌',
    col3: '✅',
    col4: '✅',

  },
  {
    id: 19,idss:'Bi-weekly review sessions',
    col1: '❌',
    col2: '❌',
    col3: '✅',
    col4: '✅',

  },
  {
    id: 20,idss:'Affilicate Marketing',
    col1: '❌',
    col2: '❌',
    col3: '❌',
    col4: '✅',

  },
  {
    id: 21,
    idss:'Pricing',
    col1: "₹5,999+GST",
    col2: "₹10,999+GST",
    col3: "₹21,999+GST",
    col4: "₹35,999+GST",
 
  },
];

const columnsT = [

  { field: 'col1', headerClassName:'UI/UX', headerName: 'UI/UX', width: 200 ,
  renderCell: renderCellBtn
},
  { field: 'col2', headerName: 'Angular', width: 200 ,renderCell: renderCellBtn},
  { field: 'col9', headerName: 'Fullstack Development', width: 300 , renderCell: renderCellExpand,

},

  { field: 'col3', headerName: 'React', width: 200,renderCell: renderCellBtn },
  { field: 'col4', headerName: 'Java', width: 200 ,renderCell: renderCellBtn},
  { field: 'col5', headerName: 'Python', width: 200,renderCell: renderCellBtn },
  { field: 'col6', headerName: 'Testing ', width: 200 ,renderCell: renderCellBtn},
  { field: 'col7', headerName: 'Devops', width: 200 ,renderCell: renderCellBtn},
  { field: 'col8', headerName: 'Cloud Computing', width: 200 ,renderCell: renderCellBtn},
 

  
];


const rowsT = [
  {
    id: 0,
    idss:0,
    col1: "₹13,999-₹9,999+GST",
    col2: "₹17,999-₹13,999+GST",
    col3: "₹20,999-₹14,999+GST",
    col4: "₹24,999-₹19,999+GST",
    col5: "₹21,999-₹16,999+GST",
    col6: "₹12,000-₹8,999+GST",
    col7: "₹25,999-₹19,999+GST",
    col8: "₹19,999-₹15,000+GST",
    col9: "₹35,999-₹25,000+GST",
  },
  {
    id: 1,idss:1,
    col1: "HTML5",
    col2: "HTML5/css3",
    col3: "HTML5/css3/JSX",
    col4: "fundamentals of java",
    col5: "fundamentals of python",
    col6:  "Intro of software testing",
    col7:  "Intro of Devops",
    col8:  "Intro of cloud ",
    col9:  "Intro of Full stack development",
  },
  {
    id: 2,idss:2,
    col1: "CSS3",
    col2: "typescript",
    col3: "es6",
    col4: "control structures",
    col5: "control structures",
    col6:  "SDLC",
    col7:  "Git basics",
    col8:  "choose any one of AWS/AZURE/Salesforce",
    col9:  " choose any one of the below stream",
  },
  {
    id: 3,idss:3,
    col1: "Bootstarp",
    col2: "Angular-CLI & project structure",
    col3: "react overview",
    col4: "data types",
    col5: "functions and modules",
    col6:  " Test case, Use case and Scenario",
    col7:  "Essential of jenkins ",
    col8:  "cloud bascis-IAAS,PAAS,SAAS",
    col9:  "MEAN Stack-angular13,expressjs,nodejs,mongodb/mysql",
  },
  {
    id: 4,idss:4,
    col1: "Jquery",
    col2: "Angular components",
    col3: "Event handling",
    col4: "oops",
    col5: "oops",
    col6:  "Error, bug, defect, and failure",
    col7:  "Docker Basic",
    col8:  "VPC",
    col9:  "MERN Stack-React redux,expressjs,nodejs,mongodb/mysql",
  },
  {
    id: 5,idss:5,
    col1: "Photoshop",
    col2: "directives/pipes",
    col3: "states&props",
    col4: "Integrated development env",
    col5: "exceptional handling",
    col6:  "Intro of selenium & java",
    col7:  "Essentials of kubernates ",
    col8:  "Storage,security",
    col9:  "java full Stack-angular13/reactjs,springboot,mongodb/mysql",
  },
  {
    id: 6,idss:6,
    col1: "Wireframe design",
    col2: "Dynamic components",
    col3: "react routing",
    col4: "abstract/inheritance/polymorphism",
    col5: "generators and iterators",
    col6:  "essential sql for tester",
    col7:  "helm chart",
    col8:  "performance",
    col9:  ".net full Stack-angular13/reactjs,.net,mongodb/mysql",
  },
  {
    id: 7,idss:7,
    col1: "basic Javascript",
    col2: "Providers and Dependency Injection",
    col3: "axios",
    col4: "package",
    col5: "collections & GUI",
    col6:  "overview of Performance testing",
    col7:  "ansible",
    col8:  "Dynamo DB,Azure sql",
    col9:  "python full Stack-angular13/reactjs,django,mongodb/mysql",
  },
  {
    id: 8,idss:8,
    col1: "Scss",
    col2: "Observables and RxJS",
    col3: "flux/redux",
    col4: "garbage collection",
    col5: "python sql access",
    col6:  "overview of ETL testing",
    col7:  "chef/puppet",
    col8:  "CI/CD",
    col9:  "Golang full Stack-angular13/reactjs,Fiber,mongodb/mysql",
  },
  {
    id: 9,idss:9,
    col1: "overview of frontend framework-angular/react",
    col2: "Agular forms/Httpclient",
    col3: "react dynamic components/libraries",
    col4: "multi threading/exception handling",
    col5: "threads Essentials",
    col6:  "overview of jmeter/loadrunner",
    col7:  "Nagois/splunk",
    col8:  "Repository management",
    col9:  "Ruby full Stack-angular13/reactjs,RoR,mongodb/mysql",
  },

 
  {
    id: 10,
    idss:10,
    col1: "₹9,999+GST",
    col2: "₹13,999+GST",
    col3: "₹14,999+GST",
    col4: "₹19,999+GST",
    col5: "₹16,999+GST",
    col6: "₹8,999+GST",
    col7: "₹19,999+GST",
    col8: "₹15,000+GST",
    col9: "₹25,000+GST",
  },
  
];
  
export default function Pricing() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const tiers = [
    {
      title: 'Startup',
      price: '7,999',
      description: [
        '10 users included',
        '2 GB of storage',
        'Help center access',
        'Email support',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Small Business',
      subheader: 'Most popular',
      price: '13,999',
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Ecommerce',
      price: '24,999',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
    {
      title: 'Ecommerces',
      price: '24,999',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ];
  return (
    <Box sx={{ bgcolor: 'background.paper', width: "100%",top:'66px',position:'relative' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Web Development / Design" {...a11yProps(0)} />
          <Tab label="Digital Marketing" {...a11yProps(1)} />
          <Tab label="Software Training" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    
        <TabPanel  value={value} index={0} >
      <DataGrid  key={rows.id} 
      rows={rows} columns={columns}
      getEstimatedRowHeight={() => 100}
      getRowHeight={() => 'auto'}
      
      components={{ Toolbar: GridToolbar }}
       sx={{ height: 400, width: '100%' 
       ,
       boxShadow: 2,
       border: 2,
       borderColor: 'primary.light',
       '& .MuiDataGrid-cell:hover': {
         color: 'primary.main',
       },

       '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
        py: 1,
      },
      '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
        py: '15px',
      },
      '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
        py: '22px',
      },
      '& .MuiDataGrid-row': { borderTopColor: '#42a5f5', borderTopStyle: 'solid'},
        '& .MuiDataGrid-footerContainer':{display:'none'},
        '& .super-app-theme--header': {
        
        },
        '& .startup': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#1a3e72',
        },
        '& .sb': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#ae4831',
        },
        '& .ecom': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#282a63',
        },
        '& .ecomPro': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#ffc400',
        },
        '& .sb': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#00fb2e',
        },
        '& .sw': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#0c716c',
        },
        '& .dw': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#b85c04',
        },
        '& .std': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#b90e63',
        },
        '& .corp': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#408ec3',
        },
        '& .sticky-0': {
          position: 'sticky',
          zIndex: '999',
          backgroundColor: 'rgb(255, 255, 255)',
          top: '0px',
          boxShadow: 'rgb(0 0 0 / 21%) 0px 3px 4px -2px',
        },
      }}
      getCellClassName={(params) => {
      if(params.value == '₹7,999+GST'){
        return 'startup'
      }
      else if(params.value == '₹13,999+GST'){
        return 'sb'
      }
        else if(params.value == '₹24,999+GST'){
          return 'ecom'
        }
      else if(params.value == '₹49,999+GST'){
        return 'ecomPro'
      }
      else if(params.value == '₹4,999+GST'){
        return 'sw'
      }

      else if(params.value == '₹9,999+GST'){
        return 'dw'
      }
      else if(params.value == '₹15,000+GST'){
        return 'std'
      }
      else if(params.value == '₹25,000+GST'){
        return 'corp'
      }
        
      }}
      
      getRowClassName={(params) => `sticky-${params.row.id}`}
      />
      
        </TabPanel>
        <TabPanel value={value} index={1} >
        <DataGrid  key={rowsDG.id} 
      rows={rowsDG} columns={columnsDG}
      getEstimatedRowHeight={() => 100}
      getRowHeight={() => 'auto'}
      
      components={{ Toolbar: GridToolbar }}
       sx={{ height: 400, width: '100%' 
       ,
       boxShadow: 2,
       border: 2,
       borderColor: 'primary.light',
       '& .MuiDataGrid-cell:hover': {
         color: 'primary.main',
       },

       '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
        py: 1,
      },
      '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
        py: '15px',
      },
      '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
        py: '22px',
      },
      '& .MuiDataGrid-row': { borderTopColor: '#42a5f5', borderTopStyle: 'solid'},
        '& .MuiDataGrid-footerContainer':{display:'none'},
        '& .super-app-theme--header': {
        
        },
        '& .startupdg': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#1a3e72',
        },
        '& .sbdg': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#ffc400',
        },
        '& .ecomdg': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#0c716c',
        },
        '& .ecomProdg': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#b90e63',
        },
       
        '& .dg': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#0c716c',
        },
        '& .dwdg': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#b85c04',
        },
        '& .stddg': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#b90e63',
        },
        '& .pricingdg': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#20275e',
          background:'#42a5f5'
        },
        '& .sticky-0': {
          position: 'sticky',
          zIndex: '999',
          backgroundColor: 'rgb(255, 255, 255)',
          top: '0px',
          boxShadow: 'rgb(0 0 0 / 21%) 0px 3px 4px -2px',
        },
      }}
      getCellClassName={(params) => {
      if(params.value == '₹5,999+GST'){
        return 'startupdg'
      }
      else if(params.value == '₹10,999+GST'){
        return 'sbdg'
      }
        else if(params.value == '₹21,999+GST'){
          return 'ecomdg'
        }
      else if(params.value == '₹35,999+GST'){
        return 'ecomProdg'
      }
      else if(params.value == '₹35,999+GST'){
        return 'ecomProdg'
      }
      else if(params.value == 'Pricing'){
        return 'pricingdg'
      }
        
      }}
      
      getRowClassName={(params) => `sticky-${params.row.id}`}
      />
        </TabPanel>
        <TabPanel value={value} index={2}>
        <DataGrid  key={rowsT.id} 
      rows={rowsT} columns={columnsT}
      getEstimatedRowHeight={() => 100}
      getRowHeight={() => 'auto'}
      
      components={{ Toolbar: GridToolbar }}
       sx={{ height: 400, width: '100%' 
       ,
       boxShadow: 2,
       border: 2,
       borderColor: 'primary.light',
       '& .MuiDataGrid-cell:hover': {
         color: 'primary.main',
       },

       '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
        py: 1,
      },
      '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
        py: '15px',
      },
      '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
        py: '22px',
      },
      '& .MuiDataGrid-row': { borderTopColor: '#42a5f5', borderTopStyle: 'solid'},
        '& .MuiDataGrid-footerContainer':{display:'none'},
        '& .super-app-theme--header': {
        
        },
        '& .startup': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#1a3e72',
        },
        '& .sb': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#ae4831',
        },
        '& .ecom': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#282a63',
        },
        '& .ecomPro': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#ffc400',
        },
        '& .sb': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#00fb2e',
        },
        '& .sw': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#0c716c',
        },
        '& .dw': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#b85c04',
        },
        '& .std': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#b90e63',
        },
        '& .corp': {
          fontSize: '20px',
          fontWeight:'600',
          color: '#408ec3',
        },
        '& .sticky-0': {
          position: 'sticky',
          zIndex: '999',
          backgroundColor: 'rgb(255, 255, 255)',
          top: '0px',
          boxShadow: 'rgb(0 0 0 / 21%) 0px 3px 4px -2px',
        },
      }}
      getCellClassName={(params) => {
      if(params.value == '₹9,999+GST'){
        return 'startup'
      }
      else if(params.value == '₹13,999+GST'){
        return 'sb'
      }
        else if(params.value == '₹14,999+GST'){
          return 'ecom'
        }
      else if(params.value == '₹19,999+GST'){
        return 'ecomPro'
      }
      else if(params.value == '₹16,999+GST'){
        return 'sw'
      }

      else if(params.value == '₹8,999+GST'){
        return 'dw'
      }
      else if(params.value == '₹15,000+GST'){
        return 'std'
      }
      else if(params.value == '₹25,000+GST'){
        return 'corp'
      }
        
      }}
      
      getRowClassName={(params) => `stickys-${params.row.id}`}
      />
        </TabPanel>
     
    </Box>
  );
}