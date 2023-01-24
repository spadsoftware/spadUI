import React, { useReducer } from "react";

import Head from "next/head";
import { Typography } from "@mui/material";
import Image from "next/image";
import { loadCSS } from "fg-loadcss";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Notification from "../components/ui/notification";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import NativeSelect from "@mui/material/NativeSelect";
import Textarea from "@mui/joy/Textarea";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const privacy = () => {
  return (
    <>
      <Head>
        <title>
        Spad Software privacy policy in Bangalore India
        </title>
        <meta name="keyword" content="Hire Talent" />
      </Head>

      <Box
        sx={{
          textAlign: "left",
          background: "white",
          color: "black",

          boxShadow: " 0px 0px 30px rgba(127, 137, 161, 0.25)",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{
            top: "60px",
            position: "relative",
            background: "linear-gradient(180deg, #FEF7E2 0%, #EEEEFD 100%)",
          }}
        >
          <Grid item xs={12} style={{ left: "0px", position: "relative" }}>
            <div style={{ left: "50px", width: "85%", position: "relative" }}>
              <h3 style={{ color: "#da4536", textAlign: "center" }}>
                Spad Software Privacy Policy
              </h3>
              <div>
                <h4 style={{ marginTop: "20px" }}>In General:</h4>
                <div>
                At SPAD Software, we believe in the confidentiality and security of your information. We completely respect your privacy rights. We take a different types of measures to protect your information from disclosure to or access by third parties. Please note that we do not guarantee the security of information, as no method of internet transmission or storage is completely secure. Also, note that we may retain and store your information in our databases and systems even after your SPAD Software account is deactivated as long as we have a legitimate purpose to do so and under applicable law.
We only collect your information with your consent or with lawful reasons; we only collect the personal information that is necessary to fulfill the purpose of your interaction with us; we don't sell it to third parties, and we only use it as this Privacy policy describes below.
We have prepared this Privacy Policy to describe to you our practices regarding the Personal Information (as defined below) we collect from users of our Site at www.SPAD Software.com or www.SPAD Software.co and Services (as defined in the Terms of Use). It also describes the choices available to you regarding the use of your Personal Information and how you can access and update this information. Capitalized terms not defined in this Privacy Policy have the meanings given in our Terms of Use.
                </div>
              </div>
              <h3 style={{ color: "#da4536", textAlign: "center" }}>
              Information about using SPAD Software
              </h3>
              <div>
                <h4 style={{ marginTop: "20px" }}>1. User Consent</h4>
                <div>
                By submitting Personal Information through our Site or Services, you expressly consent 
                to the collection, use, and disclosure of your Personal Information under this Privacy Policy.
                </div>

              </div>


              <div>
                <h4 style={{ marginTop: "20px" }}>2. Visitors under the age of 18</h4>
                <div>
                Our Service is not offered to persons under the age of 18. Thus,
                 we do not intentionally gather Personal Information from visitors who are under the age of 18.
                </div>
              </div>

              <div>
                <h4 style={{ marginTop: "20px" }}>3. Types of Data We Collect</h4>
                <div>
                “Personal Information” means data that allows someone to identify or contact 
                you, including, for example, your name, address, telephone number, e-mail address,
                 as well as any other non-public information about you that is associated with or linked to 
                any of the foregoing data. We collect Personal Information, only as described below.
                </div>
                 <div>   Information You Provide to Us</div>
                 <div>
                 We may collect Personal Information from you, such as your name, e-mail and mailing addresses, phone number, and password when you create an account with us (“Account”).
If you are a Designer, we may require that you provide your bank account information for payment deposit and your KYC documents (PAN Card or Driving Licence) for identity verification.
When you make a purchase, we (or our third-party service provider) will collect all information necessary to complete the transaction, including your name, credit card information, debit card information, billing information, and/or PayPal information.
We retain information on your behalfs, such as Design Briefs, Design projects, Design Concepts, Design Templates, Invoice Service invoices, transactional history, messages, and any other information you store using your Account.
If you provide us feedback or contact us via e-mail, we will collect your name and e-mail address and any other content included in the e-mail to send you a reply.
When you post messages on our Site, the information contained in your posting will be stored on our servers and other users will be able to see it.
We may also collect Personal Information at other points on our Site that state that Personal Information is being collected.
                 </div>
                 <div>  Google Analytics</div>
                 <div>We currently use Google Analytics as well as Google Analytics for Display Advertising.
                     Google Analytics collects information and reports website trends without identifying individual 
                     visitors. Google Analytics uses its own cookie to track visitor interactions. Website owners can
                      view a variety of reports about how visitors interact with their website so they can improve their
                       website and how people find it. Please see the following links for more information about Google 
                       Analytics: http://www.google.com/analytics/,
                     http://www.google.com/privacy.html, and http://www.google.com/analytics/tos.html.</div>
             
             <div>  Tracking Technologies / Cookies</div>
             <div>SPAD Software and our marketing partners, affiliates, or analytics or service providers use
                 cookies or similar technologies 
                in analyzing trends, administering the website, tracking users’ movements around the site,
                 and gathering demographic information about our user base as a whole. We may receive reports 
                 based on the use of these technologies by these companies on an individual as well as aggregated 
                 basis. We use cookies to gather information regarding the date and time of your visit and the 
                 information for which you searched and which you viewed. Users can control the use of cookies
                  at the individual browser level. If you reject cookies, you may still use our site, but your 
                  ability to use some features or areas of our site may be limited.
To make our Site and Services more useful to you, our servers (which may be hosted by a third-party service provider) collect information from you automatically and store it in log files. The information may include your browser type, operating system, Internet Protocol (IP) address (a number that is automatically assigned to your computer when you use the Internet, which may vary from session to session), domain name, internet service provider (ISP), referring/exit pages, clickstream data and/or a date/time stamp for your visit. We may link this automatically-collected data to Personal Information for the purposes of security and to detect fraudulent activity.
We partner with a third-party ad network to manage our advertising on other sites. Our ad network partner uses
 cookies and Web beacons to collect information about your activities on this and other websites to 
 provide you with targeted advertising based on your interests.</div>
         
              </div>


              <div>
                <h4 style={{ marginTop: "20px" }}>Third-Party Websites</h4>
                <div>
                 
                </div>
              </div>

              <div>
                <h4 style={{ marginTop: "20px" }}>Third-Party Sites</h4>
                <div>
                When you click on a link to any other website or location, you will leave our Site 
                and go to another site and another entity may collect Personal Information. We have 
                no control over, do not review, and cannot be responsible for, these outside websites
                 or their content. Please be aware that the terms of this Privacy Policy do not apply 
                 to these outside websites
                 or content, or any collection of data after you click on links to such outside websites.
                </div>
                <div>
                Social Media
                </div>
                <div>
                Our Site includes social media features (“Features”) such as the Facebook Like button, 
                Tweet button, and other widgets or interactive mini-programs that run on our Site. 
                These Features may collect your IP address, and which page you are visiting on our Site, 
                and may set a cookie to enable the Feature to function properly. These Features are either 
                hosted by a third party or hosted directly on our Site. Your interactions with these Features
                 are governed
                 by the terms of use and privacy policy of the company providing them (e.g., Facebook or Twitter).
                </div>
              </div>

              <div>
                <h4 style={{ marginTop: "20px" }}> Choices Regarding Your Personal Information</h4>
                <div>
                Please contact us using the information in the “Contact” section, if you would like further
                 information concerning your legal rights under applicable law or would like to exercise any 
                 of them. We will consider all requests and provide our response within the time stated 
                 by applicable law. Depending on the circumstances and the information you request, 
                 we may require additional methods of verification at our discretion. Please note that
                  certain information may be exempt from your requests if we need to keep processing your
                 information for our legitimate interests or to comply with a legal obligation.
                </div>
                <div>
                    1.Choices
                </div>
                <div>
                    2.When you create an Account on SPAD Software, 
                    we may periodically send you free newsletters and 
                    e-mails that directly promote the use of our Site or Services. 
                    When you receive newsletters or promotional communications from us, 
                    you may indicate a preference to stop receiving further communications 
                    from us and you will have the opportunity to “opt-out” by getting in touch with us at
                     info@spadsoftware.com through email and with the appropriate subject.
                    </div>
                    <div>
                    3.Despite your indicated e-mail preferences, we may send you service-related 
                    communication (for instance, if our service is temporarily suspended for maintenance)
                     or notices of any updates to our Terms of Use or Privacy Policy. 
                    You do not have an option to opt out of these emails, which are not promotional.
                    </div>
                    <div>
                    4.Deletion or Changes
Upon request, SPAD Software will provide you with information about whether we hold any of your 
personal information. You may change any of your Personal Information get in touch with us at 
info@spadsoftware.com through email and with the appropriate subject. You may request deletion
 of your Personal Information by getting in touch with us at info@spadsoftware.com through email 
 and with the appropriate subject, but please note that we may be required to keep this information 
 and not delete it (or to keep this information for a certain time, in which case we will comply
  with your deletion request only after we have fulfilled such requirements). When we delete any 
  information, it will be deleted from the active database, 
but may remain in our archives. We will respond to your request to access within 30 days.
                    </div>
              </div>
              <div>
                <h4 style={{ marginTop: "20px" }}>Security</h4>
                <div>
                SPAD Software is committed to protecting the security of your Personal Information. 
                We (and our third-party service providers) use a variety of industry-standard security 
                technologies and procedures to help protect your Personal Information from unauthorized 
                access, use, or disclosure. When you enter sensitive information 
                (such as a credit card number or SS#) on our order forms, we
                 (or our third-party service providers) encrypt the transmission
                  of that information using secure socket layer technology (SSL). 
                  We also require you to enter a password to access your Account information.
                   Please do not disclose your Account password to unauthorized people.
                    No method of transmission over the Internet, or method of electronic storage, 
                    is 100% secure, however. Therefore, while SPAD Software uses reasonable efforts
                 to protect your Personal Information, SPAD Software cannot guarantee its absolute security.
                </div>
              </div>

              <div>
                <h4 style={{ marginTop: "20px" }}>Reviews/Testimonials</h4>
                <div>
                We display personal testimonials of satisfied customers on
                 our Site in addition to other endorsements. If you choose to 
                 provide a testimonial on the Site, we may post your testimonial
                  for marketing purposes. If you wish to update or delete your
                 testimonial, you can contact us at info@spadsoftware.com.
                </div>
              </div>

              <div>
                <h4 style={{ marginTop: "20px" }}> Changes to This Privacy Policy</h4>
                <div>
                This Privacy Policy is subject to occasional revision, and if
                 we make any material changes in the way we use your Personal 
                 Information, we will notify you (sometimes we may not) by sending you an
                  e-mail (if you are still a registered user of our services) to the 
                  last e-mail address you provided to us and/or by prominently posting 
                  notice of the changes on our Site. We will not reduce any of your rights
                   under this Privacy Policy without your explicit consent. Any changes to
                    this Privacy Policy will be effective upon the earliest of thirty (30) 
                    calendar days following our dispatch of an e-mail notice to you or thirty
                     (30) calendar days following our posting of notice of the changes on our Site. 
                     These changes will be effective immediately for new users of our Service.
                      Please note that at all times you are responsible for updating your Personal 
                      Information to provide us with your most current e-mail address. If the last
                       e-mail address that you have provided us is not valid, or for any reason is 
                       not capable of delivering to you the notice described above, our dispatch of 
                       the e-mail containing such notice will nonetheless constitute effective notice 
                       of the changes described in the notice. In any event, changes to this Privacy 
                       Policy may affect our use of Personal Information that you provided us before 
                       our notification to you of the changes. If you do not wish to permit changes 
                       in our use of your Personal Information, you must notify us before the effective 
                       \date of the changes that you wish to deactivate your Account with us. Continued 
                       use of our Site or Service, following notice of such changes, shall indicate your 
                       acknowledgment of
                 such changes and agreement to be bound by the terms and conditions of such changes.
                </div>
              </div>

              <div>
                <h4 style={{ marginTop: "20px" }}>Contact</h4>
                <div>
                You may contact us regarding this policy by getting in touch
                 with us at info@spadsoftware.com through email and with the appropriate subject.
                </div>
              </div>

            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default privacy;
