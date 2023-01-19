import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Link from "next/link";
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2'; 
import Image from 'next/image';
import classes from './blog.module.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
export const getStaticPaths = async () => {

  



    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const json = await response.json()

    const paths = json.map((user) => {
        return {
            params: {id:user.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
    const id = context.params.id

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)

    const json = await response.json()

    return {
        props: {user: json}
    }

}

const Detail = ({user}) => {
  return (
    <>
    <section className={classes.singleBlog}>
    <Typography variant='h2' className={classes.singleBlogHdr} >{user.title}</Typography>

    <Grid container className={classes.singleBlogHdr} 
    rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={4}>
  <Image
  src={`/images/logo/name_tag.png`}
  alt={'Spad Software Logo'}
  className={classes.blogImg}
  width={20}
  height={56}
/>
  <div>By Spad Software</div>
  </Grid>
  <Grid item xs={4}>
  <Image
  src={`/images/logo/cal.png`}
  alt={'Spad Software Logo'}
  className={classes.blogImg}
  width={20}
  height={56}
/>
<div> 30 December 2022</div>
 
  </Grid>
  <Grid item xs={4}>
  <Image
  src={`/images/logo/eye.png`}
  alt={'Spad Software Logo'}
  className={classes.blogImg}
  width={20}
  height={56}
/>  <div>2222</div>
  
  </Grid>

</Grid>

    </section>
    <Box sx={{ flexGrow: 1 }}>
   
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={8} className={classes.blogTopic}>
    <Stack spacing={3}>
   
   <Typography variant='h3'>{user.name}</Typography>
   <Typography variant='subtitle1' color='gray'>{user.title}</Typography>
   <Typography variant='subtitle1' color='gray'>{user.body}</Typography>
    </Stack>
    </Grid>
    <Grid item xs={4}>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 250,
        },
      }}
    >
      <Paper variant="outlined" className={classes.blogLeftTopic} >
      <List className={classes.blogLeftTopicHdr} 
      sx={{ width: '100%', maxWidth: 360,color:'#e2423c', bgcolor: '#021f61' }}>

      <ListItem className={classes.blogLeftTopicHdr}  disablePadding>
       
          {/* <ListItemText className={classes.blogLeftTopicHdr}  
          primary="Related Category" /> */}
          <Typography variant="h5" className={classes.blogLeftTopicHdr} >
          Related Category
      </Typography>
      </ListItem>
      </List>
      <List className={classes.blogLeftTopicRelated}  
      sx={{ width: '100%', maxWidth: 360,color:'white', bgcolor: '#021f61' }}>
     
      
      {[1, 2, 3,4].map((value) => (
        <ListItem
        disablePadding
         
        >
          <ListItemText primary={`Line item details ${value}`} />
        </ListItem>
      ))}
    </List>
    </Paper>
    </Box>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 250,
        },
      }}
    >
    <Grid container className={classes.blogTopicRecents}
     rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Card className={classes.blogTopicRecent} sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Link href= {`blogs`} >
    Read More &nbsp;
    </Link>
    <Image
  src={`/images/logo/rarrow.png`}
  alt={'Spad Software Logo'}
  className={classes.blogImg}
  width={20}
  height={56}
/>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={6}>
  <Card className={classes.blogTopicRecent} sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Link href= {`blogs`} >
    Read More &nbsp;
    </Link>
    <Image
  src={`/images/logo/rarrow.png`}
  alt={'Spad Software Logo'}
  className={classes.blogImg}
  width={20}
  height={56}
/>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={6}>
  <Card className={classes.blogTopicRecent} sx={{ maxWidth: 345 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Link href= {`blogs`}>
    Read More &nbsp;
    </Link>
    <Image
  src={`/images/logo/rarrow.png`}
  alt={'Spad Software Logo'}
  className={classes.blogImg}
  width={20}
  height={56}
/>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={6}>
  <Card className={classes.blogTopicRecent} sx={{ maxWidth: 345 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Link href= {`blogs`} >
    Read More &nbsp;
    </Link>
    <Image
  src={`/images/logo/rarrow.png`}
  alt={'Spad Software Logo'}
  className={classes.blogImg}
  width={20}
  height={56}
/>
      </CardActions>
    </Card>
  </Grid>
</Grid>


   


    </Box>
    </Grid>

    </Grid>

    </Box>
    </>
    

  
  )
}

export default Detail

