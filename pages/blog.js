import React from "react";
import Head from "next/head";
import BlogComponent from './blogs'

const Blog = (props) => {
  return (
    <>
      <Head>
        <title>Spad Software | Blog</title>
        <meta name="keyword" content="Blog" />
       
      </Head>

     <BlogComponent  data={props.data}/>
    </>
  );
};

export  const getServerSideProps = async () => {
  const url =
    "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  const resJson = await res.json();
  return {
    props: {
      data: resJson
    }
  };
};
export default Blog;