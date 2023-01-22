import Link from 'next/link';
import { useRouter } from "next/router";

import Logo from './logo';
import classes from './main-navigation.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
  return (
    <Toolbar>
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        Whatsup
      </Typography>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        ContactUs
      </Typography>
    </Toolbar>
  );
}
const drawerWidth = 240;
const navItems = ['Home','About', 'Goal','Services','WhatWeDo','HireTalents','JobSeekers','Blog'];

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function MainNavigation(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild,
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Logo />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ textAlign: 'center',color: 'black'  }}>
           
              <Link   href={item[0].toLocaleLowerCase()+ item.slice(1)}>
              <ListItemButton sx={{ textAlign: 'center',color: 'black'  }}
            to={item[0].toLocaleLowerCase()+ item.slice(1)}>

              <ListItemText primary={item} />
             </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
             
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  const router = useRouter();
  const currentRoute = router.pathname

  return (
    <>

    <Box sx={{ display: 'flex',background:'#fdf7e3',color:'Black' }}>
        <CssBaseline />
        <AppBar component="nav"  style={{background:'#fdf7e3',color:'Black'}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                 <Image
            src={`/images/logo/Logo.jpg`}
            alt={'Spad Software Logo'}
            width={170}
            height={56}
            style={{padding:'10px'}}
          />
            </Typography>
           
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }} 
                  style={{fontWeight:'600',fontSize:'12px'}}
                  >
                  
                  <Link href={item[0].toLocaleLowerCase()+ item.slice(1)}>
              <a style={{color:'Black'}}
              className={router.pathname == item[0].toLocaleLowerCase()+ item.slice(1) ? classes.active : ""}>{item}</a>
            </Link>

                </Button>
              ))}
            </Box>
            <Typography 
             sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}>
            <Image
            src={`/images/logo/Logo.jpg`}
            alt={'Spad Software Logo'}
            width={170}
            height={56}
            style={{padding:'10px'}}
          />
             <span style={{top:'10px',position:'absolute',left:'60%'}}>
                    <Image
              src={`/images/logo/linked.png`}
              alt={'Spad Software Logo'}
              width={32}
              height={32}
            />      
      
             <Image
              src={`/images/logo/fb.png`}
              alt={'Spad Software Logo'}
              width={32}
              height={32}
            />       
            <Image
              src={`/images/logo/wp.png`}
              alt={'Spad Software Logo'}
              width={30}
              height={30}
            />   
            <Image
              src={`/images/logo/insta.png`}
              alt={'Spad Software Logo'}
              width={28}
              height={28}
            /> 
              </span>
         
            </Typography> 
          </Toolbar>

        </AppBar>
        
        <Box component="nav" style={{background:'white',color:'Black'}}>
        
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
           
          </Drawer>
          
        </Box>
     
   
  
      </Box>
      </>
  );
}

MainNavigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default MainNavigation;
