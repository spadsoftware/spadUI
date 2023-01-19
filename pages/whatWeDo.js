import React from "react";
import Head from "next/head";
import WhatWeDoComponent from '../components/whatWeDo/whatWeDo'

function WhatWeDo(){
  return (
    <>
      <Head>
        <title>Next | WhatWeDo</title>
        <meta name="keyword" content="WhatWeDo" />
      </Head>

     <WhatWeDoComponent />
    </>
  );
};

export default WhatWeDo;