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
const { useState, useEffect } = React;
import FileSaver from 'file-saver';
import { styled, alpha } from '@mui/material/styles';

import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


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
const navItems = ['Home','About', 'Goal','Services','WhatWeDo','HireTalents','JobSeekers','Pricing'];

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
  const container = window !== undefined ? () => window().document.body : undefined;
  const isBrowser = () => typeof window !== 'undefined'; 
  const router = useRouter();
  const currentRoute = router.pathname;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if(currentRoute=='/' || currentRoute=='/home'){
        setRerender(false);
    }
    else{
      
      setRerender(true);
    }
     

    const options = { passive: true }; // options must match add/remove event
    const scroll = (event) => {
      // console.log(event)
      // if(event.path[1]){
      // if(event.path[1].window.pageYOffset<500){
      //   setRerender(false);
      // }
      // else{
      //   setRerender(true);
      //   // // console.log(rerender)
      // }
      // }
    };
    document.addEventListener("scroll", scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", scroll, options);
   }, []);
   const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
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
  const saveFile = () => {
    FileSaver.saveAs(
      "https://www.spadsoftware.com/images/logo/spadBroucher.png",
      "spadBroucher.png"
    );
  }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    // console.log(event)
    FileSaver.saveAs(
      `https://www.spadsoftware.com/images/logo/${event}`,
      event
    );
    setAnchorEl(null);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Logo />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ textAlign: 'center',color: 'black'  }}>
           
              <Link   href={item[0].toLocaleLowerCase()+ item.slice(1)} shallow>
              <ListItemButton sx={{ textAlign: 'center',color: 'black'  }}
            >

              <ListItemText primary={item} />
             </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <Button
        id="demo-customized-button"
        className="cv"
        style={{fontWeight:'600',fontSize:'14px',background:'#fdf7e3',border:'none',color:'#d9232d'}}
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Broucher
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem 
        onClick={(event) => handleClose("spadBroucher.png")}
         disableRipple>
          <ArchiveIcon />
          Spad Broucher
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem 
         onClick={(event) => handleClose("DigitalMarketingBroucher.png")}
         disableRipple>
          <ArchiveIcon />
          Digital marketing Pricing
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem 
         onClick={(event) => handleClose("websiteBroucher.png")}
          disableRipple>
          <ArchiveIcon />
          Web Development Pricing
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem  
        onClick={(event) => handleClose("TrainingBroucher.png")}
         disableRipple>
          <ArchiveIcon />
          Training Pricing
        </MenuItem>
      </StyledMenu>
        
      </List>
    </Box>
             
  );
  
  //rerender=currentRoute.includes('/whatWeDo/')

  return (
    <>

    <Box sx={{ display: 'flex',background:rerender?'rgb(255 255 255)':'#fdf7e3',color:'Black' }}>
        <CssBaseline />
        <AppBar component="nav"  style={{background:rerender?'rgb(255 255 255)':'#fdf7e3',color:'Black', boxShadow: 'none'}}>
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
                 {!rerender?
                 <Image
            src={`/images/logo/Logo.jpg`}
            alt={'Spad Software Logo'}
            width={170}
            height={56}
            style={{padding:'10px'}}
          />
          :
          <Image
          src={`/images/logo/spadLogov1.jpg`}
          alt={'Spad Software Logo'}
          width={170}
          height={56}
          style={{padding:'10px'}}
        />}
            </Typography>
           
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }} 
                  style={{fontWeight:'600',fontSize:'12px'}}
                  >
                  
                  <Link href={'/'+item[0].toLocaleLowerCase()+ item.slice(1)} shallow>
              <p style={{color:'Black'}}
              className={router.pathname == item[0].toLocaleLowerCase()+ item.slice(1) ? 
              classes.active : ""}>{item}</p>
            </Link>


                </Button>
              ))}
              {/* <a href="/images/logo/spadBroucher.png" onClick={saveFile}   value="download" ><button>Download Broucher</button></a> */}
              {/* <button className="cv" onClick={saveFile}
          style={{fontWeight:'600',fontSize:'14px',background:'#fdf7e3',border:'none',color:'#d9232d'}}
          >
              BROUCHER
         </button> */}
        
      <Button
        id="demo-customized-button"
        className="cv"
        style={{fontWeight:'600',fontSize:'14px',background:'#fdf7e3',border:'none',color:'#d9232d'}}
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Broucher
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem 
        onClick={(event) => handleClose("spadBroucher.png")}
         disableRipple>
          <ArchiveIcon />
          Spad Broucher
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem 
         onClick={(event) => handleClose("DigitalMarketingBroucher.png")}
         disableRipple>
          <ArchiveIcon />
          Digital marketing Pricing
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem 
         onClick={(event) => handleClose("websiteBroucher.png")}
          disableRipple>
          <ArchiveIcon />
          Web Development Pricing
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem  
        onClick={(event) => handleClose("TrainingBroucher.png")}
         disableRipple>
          <ArchiveIcon />
          Training Pricing
        </MenuItem>
      </StyledMenu>
   
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
