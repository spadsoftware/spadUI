import React from "react";
import Head from "next/head";
import EventsComponent from '../components/events/events'

const Events = () => {
  return (
    <>
      <Head>
        <title>Next | Events</title>
        <meta name="keyword" content="Events" />
      </Head>

     <EventsComponent />
    </>
  );
};

export default Events;