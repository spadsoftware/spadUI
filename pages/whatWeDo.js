import React from "react";
import Head from "next/head";
import WhatWeDoComponent from '../pages/whatWeDo/whatWeDo'

function WhatWeDo(){
  return (
    <>
      <Head>
        <title>Spad Software | WhatWeDo</title>
        <meta name="keyword" content="WhatWeDo" />
      </Head>

     <WhatWeDoComponent />
    </>
  );
};

export default WhatWeDo;