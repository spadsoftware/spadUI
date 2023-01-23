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

   
const columns = [

  { field: 'col1', headerClassName:'super-app-theme--header', headerName: 'Startup', width: 150 },
  { field: 'col2', headerName: 'Small Business', width: 150 },
  { field: 'col3', headerName: 'Ecommerce', width: 150 },
  { field: 'col4', headerName: 'Ecommerce Pro', width: 150 },
  // { field: 'col5', headerName: 'STATER', width: 150 },
  { field: 'col6', headerName: 'Static Website', width: 150 },
  { field: 'col7', headerName: 'Dynamic Website', width: 150 },
  { field: 'col8', headerName: 'Standard', width: 150 },
  { field: 'col9', headerName: 'Corparate', width: 150 },

  
];


const rows = [
  {
    id: 0,
    idss:0,
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
  { field: 'idss', headerClassName:'Names', headerName: '', width: 150 },
  { field: 'col1', headerClassName:'BASIC', headerName: 'Startup', width: 150 },
  { field: 'col2', headerName: 'STANDARD', width: 150 },
  { field: 'col3', headerName: 'PROFESSIONAL', width: 150 },
  { field: 'col4', headerName: 'ENTERPRISE', width: 150 },


  
];


const rowsDG = [
  {
    id: 0,
    idss:'Pricing',
    col1: "₹5,999+GST",
    col2: "₹10,999+GST",
    col3: "₹21,999+GST",
    col4: "₹35,999+GST",
 
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
    col4: '❌',

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
    col1: "✅",
    col2: "✅",
    col3: '✅',
    col4: '✅',

  },
  {
    id: 5,idss:'Pay Per Click (PPC)',
    col1: "✅",
    col2: "✅",
    col3: '✅',
    col4: '✅',

  },
  {
    id: 6,idss:'Email Marketing',
    col1: "✅",
    col2: "✅",
    col3: '✅',
    col4: '✅',

  },
  {
    id: 7,idss:'SMO',
    col1: "✅",
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
    col3: "150",
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
    id: 20,
    idss:'Pricing',
    col1: "₹5,999+GST",
    col2: "₹10,999+GST",
    col3: "₹21,999+GST",
    col4: "₹35,999+GST",
 
  },
];
  
const columnsT = [

  { field: 'col1', headerClassName:'UI/UX', headerName: 'UI/UX', width: 150 },
  { field: 'col2', headerName: 'Angular', width: 150 },
  { field: 'col3', headerName: 'React', width: 150 },
  { field: 'col4', headerName: 'Java', width: 150 },
  { field: 'col5', headerName: 'Testing', width: 150 },
  { field: 'col6', headerName: 'Python', width: 150 },
  { field: 'col7', headerName: 'Devops', width: 150 },
  { field: 'col8', headerName: 'Cloud Computing', width: 150 },
  { field: 'col9', headerName: 'Fullstack Development', width: 150 },

  
];


const rowsT = [
  {
    id: 0,
    idss:0,
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
    id: 11,idss:11,
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
    id: 12,
    idss:12,
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
    </Box>
  );
}