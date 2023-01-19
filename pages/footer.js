import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import Head from "next/head";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const footer = () => {

  return (
    <>
     <Head>
    <title>Top 10 Web design company in Bangalore,Best Web Development Company in Bangalore, Web Design Company, Website Development Agency in India -Spad Software</title>
        <meta name="keyword" content="Faq" />
      </Head>
  
   

    <Box sx={{textAlign:'center',background:'#fff',color:'black',
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25);'}}>

<Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
        <Image
  src={`/images/logo/spadLogov1.jpg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
        <h3>SPAD Software consultancy services Private Limited</h3>
        <h4>GSTIN:33ABICS7047K1ZZ</h4>
        <h4>Bangalore India</h4>  
        <Typography variant='caption' >@Copyright 2023-2024</Typography>
        <Typography variant='caption' >© SPAD Software consultancy services Private Limited. All rights reserved.
</Typography>

        </Grid>
        
      
      </Grid>

   
  </Box>
  </>
  )
}

export default footer