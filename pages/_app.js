import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.css';
import Layout from '../components/layout/layout';
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        
        <meta name="description" content="Top Web Design & Development Company in Bangalore. Our expert team of website developers creates high quality websites and digital marketing. " />
  <meta name="keywords" content="Software Training Institute,Java Training,Full stack Training,Python Training, 
  Web Design Company, Web Development Company, Website Design Company, Website Development Company, web designing company." />
<meta name="abstract" content="Web Development Company in Bangalore, Web Design Company in Bangalore, Website Development in Bangalore, Website Designing Company in India"></meta>

<meta name="Author" content="spad software" />
<meta name="copyright" content="spad software" />
<meta name="Distribution" content="global" />
<meta name="robots" content="index, follow"></meta>
<meta name="googlebot" content="index, follow"></meta>
<meta property="og:type" content="website">

</meta>
<meta property="og:url" content="https://www.spadsoftware.com">

</meta>
<meta property="og:site_name" content="spad software">

</meta>
<meta property="og:title" content="Web Design & Development Company in Bangalore, India– spad software">

</meta>
<meta property="og:author" content="spad software">

</meta>
<meta property="og:image" content="https://www.spadsoftware.com/images/logo/spadLogov1.jpg">

</meta>
<meta name="Language" content="en"></meta>
<meta name="Rating" content="General"></meta>
<meta name="audience" content="all"></meta>
<meta name="expires" content="never"></meta>
<meta name="Designer" content="spad software"></meta>
<meta name="owner" content="spad software"></meta>
<link rel="canonical" href="https://www.spadsoftware.com"></link>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HM2WBMT0Q0"></Script>

      <Script>
      {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HM2WBMT0Q0');
        `}
      </Script>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
