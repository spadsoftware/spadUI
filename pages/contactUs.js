import React from "react";
import Head from "next/head";
import ContactUsComponent from '../components/contactUs/contactUs'

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Spad Software | ContactUs</title>
        <meta name="keyword" content="ContactUs" />
      </Head>
<ContactUsComponent />
    </>
  );
};

export default ContactUs;