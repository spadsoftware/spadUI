import React from "react";
import Head from "next/head";
import FaqComponent from '../components/faq/faq'
import PushNotificationLayout from "../components/PushNotificationLayout";

const Faq = () => {
  return (
    <>
      <Head>
        <title>Spad Software | Faq</title>
        <meta name="keyword" content="Faq" />
      </Head>
      <PushNotificationLayout>

     <FaqComponent />
     </PushNotificationLayout>

    </>
  );
};

export default Faq;