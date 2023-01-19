import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import classes from './blog.module.css';
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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import Link from "next/link";

const BlogComponent = (props) => {
    const { data } = props;
    const [page, setPage] = React.useState(1);
    const [postData, setPostData] = React.useState(1);
    //var shorterArray = data.slice(0, 6).map(item=>item)



    // useEffect(() => {
    //    // if(shorterArray.length){
    //         setPostData(data.slice(0, 6).map(item=>item))
        
    // }
    // )


    const [datas, setDatas] = useState([]);
    const [filterdatas, setFilterdatas] = useState([]);
    const [searchdatas, setSearchDatas] = useState([]);
    const getProfile = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPostData(data);
      setFilterdatas(data.slice(0, 6).map(item=>item))
      setSearchDatas(false)
    };
  
    useEffect(() => {
      getProfile();
    }, []);


    //setPostData(shorterArray)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);
  const [lists, setLists] = React.useState();

  const handleExpandClick = (value) => {
    setExpanded(!expanded);
    setLists(value);
    
  };

  const handleChange = (event, value) => {
    setFilterdatas(data.slice((value-1)*6,6*value).map(item=>item))

    setPage(value);
  };

  const handleChangeSearch = (event, value) => {

    if(event.target.value!==''){
        setFilterdatas(data.filter(x => x.title.toLowerCase().includes(event.target.value.toLowerCase()))
        )
        setSearchDatas(true)
        // .slice(0,6).map(item=>item))
        
        //data.filter(x => setPage(1);
    }
    else{
        setSearchDatas(false)

        setFilterdatas(data.slice(0, 6).map(item=>item))
        setPage(1);
    }
    // setFilterdatas(data.slice((value-1)*6,6*value).map(item=>item))

    // setPage(value);
  };
  

  return (
    
    <>
   
      <section id="faq" className= {classes.section_blog}>
    <div className= {classes.section_blog}>

          
      <h2>
      
      Right Information is wealth

</h2>
<h5>Is written by research, professional experience, and diverse service expertise.
</h5>
    </div>


    <div className= {classes.section_blog}>
    <Box sx={{ flexGrow: 1 }}>
    <Typography  >All Blogs1 </Typography>

    <Grid container 
     className= {classes.section_blog_hdr}
     rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={9}>
  </Grid>
  <Grid item xs={3}  >
  <TextField
   onChange={handleChangeSearch}
     InputProps={{
        sx: {
            "& MuiInputBase-input": {
                textAlign: "right"
            }
        }
    }}
   
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
  </Grid>

  </Grid>

   

  

  

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
       // Array.from(Array(6)).map((_, index) => (

       
        Array.isArray(filterdatas) ? filterdatas.map(i => {
            return (
            
            
          //  <p>{ i.id}</p>
          <Grid item xs={2} sm={4} md={4} key={i.id}>
          <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                  avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                  </Avatar>
                  }
                  action={
                  <IconButton aria-label="settings">
                      <MoreVertIcon />
                  </IconButton>
                  }
                  title={ i.title}
                  subheader={ i.id}
              />
          <CardMedia
              component="img"
              height="194"
              image="https://mui.com/static/images/cards/paella.jpg"
              alt="Paella dish"
          />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      { i.body}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    <>
    <Link href= {`blogs/${i.id}`} key={i.id}>
    Read More &nbsp;
    </Link>
    <Image
  src={`/images/logo/rarrow.png`}
  alt={'Spad Software Logo'}
  className={classes.blogImg}
  width={20}
  height={56}
/>
    </>
      <ExpandMore
        expand={expanded}
        //onClick={handleExpandClick}
        onClick={() => handleExpandClick(i.id)} 
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    {lists==i.id ? (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
       {i.id}
        </Typography>
      
        <Typography>
        {i.body}
        </Typography>
      </CardContent>
    </Collapse>
    ):''}

          </Card>
        </Grid>
            
            
            )
        }):'dsw'
      
              
              
    
        

     //   ))
        }
      </Grid>
    </Box>      
        
    </div>

    {!searchdatas?
    <Stack spacing={2} className= {classes.section_blog}>
      <Typography>Page: {page}-item:{data.length}</Typography>
      <Pagination  size="large" count={Math.round(data.length/6)} page={page} onChange={handleChange} />
    </Stack>
    :""}


</section>
    </>
  
  )
}

export default BlogComponent