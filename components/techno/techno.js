import React from 'react'
import classes from './techno.module.css';
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

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const TechnoComponent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <>
      <section id="technology" className={classes.section_tech}>
        {/* <div className= {classes.section_tech} 
      data-cursor-magnetic data-cursor-color="#f5eeee8f" data-cursor-size="80px">
          </div> */}
        <div className={classes.section__btm}>
          <div className={classes.aboutspan}>Technology</div>
          <h3 className={classes.section__subtlt}>
          Stay ahead of the curve with SPAD's cutting-edge technologies - Harness the power of innovation and transform your business with our expert technology solutions
           </h3>
        </div>
        <Grid container columns={{ xs: 4, sm: 4, md: 12 }}>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>

            <Image className={classes.tech_img}
              src={`/images/tech/javat.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>JAVA</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/got.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>GOLANG</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/php.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>php</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/andt.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>ANDRIOS</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/angt.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>ANGULAR</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/dot.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>.NET</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/ios.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>IOS</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/node.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>NODE</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/pyt.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>PYTHON</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/svg.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>WEB DEVELOP</div>
          </Grid>

          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/ios.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>KOTLIN</div>
          </Grid>
          <Grid item xs={1} md={2} sm={2} className={classes.marginBottom20}>
            <Image className={classes.tech_img}
              src={`/images/tech/aws.svg`}
              alt={'Spad Software Logo'}
              width={56}
              height={56}
            />
            <div className={classes.tech_imgTxt}>CLOUD</div>
          </Grid>

        </Grid>
      </section>

    </>
  )
}

export default TechnoComponent