import React  , { useReducer }from 'react'

import Head from "next/head";
import {Typography } from '@mui/material'
import Image from 'next/image';
import { loadCSS } from 'fg-loadcss';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Notification from '../components/ui/notification';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import NativeSelect from '@mui/material/NativeSelect';
import Textarea from '@mui/joy/Textarea';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const tc = () => {
 
  return (
    <>
     <Head>
    <title>Top 10 Web design company in Bangalore,Best Web Development Company in Bangalore, Web Design Company, Website Development Agency in India -Spad Software</title>
        <meta name="keyword" content="Hire Talent" />
      </Head>
  
   

    <Box sx={{textAlign:'left',background:'white',color:'black',
        
    boxShadow:' 0px 0px 30px rgba(127, 137, 161, 0.25)'}}>

<Grid container rowSpacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
style={{top:'60px',position:'relative',background: 'linear-gradient(180deg, #FEF7E2 0%, #EEEEFD 100%)'}}>
        <Grid item xs={12} style={{left: '0px',position: 'relative'}}>
      <div style={{left: '50px',width:'85%',position: 'relative'}}>
   <h3 style={{color:'#da4536',textAlign:'center'}}>Terms of Service</h3>
   <div>
   The website www.spadsoftware.com belongs to SPAD Software; which is a registered brand and powered by SPAD Software consultancy services private limited Company (“SPAD Software”, “us”, and “we”).

These Terms of Use (“Agreement”) set forth the legally binding terms for your use of the Site 
and Services (whether as a Customer or as a Designer). By registering for Services, you are 
accepting this Agreement and you represent and warrant that you have the right, authority, 
and capacity to enter into this Agreement. You may not access or use the Site or Services 
if you are not at least 18 years old.
 If you do not agree with all of the provisions of this Agreement, you cannot use the Services.
   </div>
        <div>
<h4  style={{marginTop:'20px'}}>1.Service</h4>
   <div>
   1.1 General.
    </div>
    SPAD Software provides an online platform that helps connect and support customers who wish to purchase designs (“Customers”) and designers who wish to provide such designs (“Designers”), including, for example, through Design Projects. “User” means any user of the Site or Service, and may be a Designer or a Customer. “Sold Design” means the applicable winning Design Concept, purchased Design Template (and any customized version thereof), or the design sold under the Project Service. “Sale” means the applicable sale. “IPR” means all trade secrets, copyrights, trademarks, mask work rights, patents and other intellectual property rights recognized by the laws of any country.
    <div>
    1.2 Design Project.
   </div>
   <div>
   (a) Customer may create a design Project (“Design Project”) by creating a design brief (“Design Brief”), paying the Customer Payment, and following the other instructions on the Site. The Design Brief must specify the requirements for the Design Project, such that Designers know the rules and criteria on which their Design Concepts will be judged. Designers assigned by SPAD Software (in SPAD Software’ sole discretion) to enter a Design Project may submit design concepts (“Design Concepts”) in the format specified by SPAD Software by following the instructions on the Site. Design Concepts must comply with the Design Brief. (b) For All the Projects, the Customer must select one winning Design Concept by a certain time specified by SPAD Software. If no winner is selected in the submission or selection round of a Project, SPAD Software will retain the Customer's Advance Payment, and the Customer will have no right to a refund or to use the Design Concepts. (c) Any project placed on SPAD Software Online Platform will have (from the Date & Time of placed project), (I) 10 Days of Design Submission Round & 5 Days of Design Selection Round. (II) After 15 Days, Project will get held automatically and the Client needs to contact the SPAD Software Support to reactivate the Project. For every reactivation request, the project will be reactivated for 3 more days. (III) If the project doesn’t complete within 45 Days & if the Client still needs reactivation of the Project in that case, the client needs to complete all the remaining due payments for that project. (IV) If the client doesn’t complete the project in 90 Days, in that case, Project will be closed forever from the SPAD Software side and SPAD Software will keep all the initial payments made for the project. (d) For the avoidance of doubt, the Customer has no right or license to use any Design Concepts other than the Sold Design. Customer may not: (a) run a Design Project if Customer is tendering the creation of the same design through a service other than the Site; (b) allow or request Designers to submit Design Concepts to Customer via any means other than via the Site; and (c) collude concerning the awarding of a winner in a Design Project or awarding a separate account held by Customer as the successful Designer in a Design Project. (d) Customers and Designers must deal on an arm’s length basis and the Customer may not cancel any Design Project to contract separately with a Designer who the Customer meets through the Site which results in the Customer avoiding paying SPAD Software any Customer Payment or any fees and charges of SPAD Software. (e) Some jurisdictions provide Customers certain mandatory statutory rights (e.g., right to supplementary performance (e.g., rectification or replacement), right for a refund, right to withdrawal, right to reduce the price, and right to damages in case the Design Concepts are defective) (collectively, “Mandatory Statutory Rights”) which remain unaffected.
   </div>

 
</div>

<div>
<h4  style={{marginTop:'20px'}}> 2. Payment Terms</h4>
   <div>
   The following terms apply to Customers who have purchased a Sold Design and Designers who have sold a Sold Design.
    </div>
    <div>
    2.1 Payment and Delivery.
   </div>
   <div>
   (a) the Customer will pay the Payment to SPAD Software and will clear all the remaining dues of the project, and (b) the Designer will upload the appropriate files of the design to the Design Handover Tab, in a format specified by SPAD Software. For the Project Services, (1) the Designer will upload the Design and if the Customer accepts the Design as described above, then (2) the Customer needs to complete all the due payments before selecting the final design. The “Customer Payment” means (i) the price selected by the Customer when the Customer created a Design Project as set forth at https://SPAD Software.com/pricing/ and addon prices if selected while placing the projector while working on a project through the project addon page. or (ii) the invoiced price for the Bulk Project Request issued through the SPAD Software before starting the project.
   </div>
   <div>
   2.2 Refunds.
   </div>
   <div>
   All the payments made to SPAD Software are completely nonrefundable. We believe in quality work towards any design task and we give our best to satisfy the clients from our end. For the same reason, we do not believe in full advance payment and wants to keep our dues to our clients until our designers satisfy clients’ need. SPAD Software may refund Customers for the following reasons: (i) the Sold Design is Defective; (ii) SPAD Software is required by law or considers that it is required by law to do so; (iii) SPAD Software determines that issuing a refund to the Customer will avoid any dispute or increased costs to SPAD Software; (iv) SPAD Software issues the refund to Customer under any refund policy specified by SPAD Software from time to time; (v) the order placed (or request made) by Customer is found to be fraudulent. A Sold Design will be deemed to be “Defective” if: (i) Customer and Designer agree it is defective and notify SPAD Software of this fact; (ii) the Sold Design is subject to a third party claim that the Sold Design infringes/misappropriates such party’s IPR, that is not frivolous. If any reason regarding design, SPAD Software refunds the payment to the Customer; then the designer will have to reimburse the total project amount (not only the project incentive) to the SPAD Software. If the designer failed to do so or failed to cooperate with the SPAD Software then SPAD Software will take appropriate legal action against the designer and the designer may face consequences for the same.
   </div>
   <div>
   2.3 General Payment Terms
   </div>
   <div>
   All payments will be in the local currency based on the location of the Site. You agree that you are responsible for the collection and/or payment of all Taxes which you may be liable for in any jurisdiction arising from your sale or purchase of any Sold Designs via the Site. SPAD Software is not responsible for collecting, reporting, paying, or remitting to you any such Taxes. “Taxes” means any applicable duties, sales taxes, GST, VAT, or other taxes which may be levied in respect of a transaction contemplated by this Agreement.
   </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>3. Design Transfer Agreement</h4>
   <div>
   The Design Transfer Agreement is available at https://SPAD Software.com/design-transfer-agreement/ and sets forth the legally binding terms between the applicable Designer and Customer for the sale of a Sold Design through the Design Project.
    </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>4. Important Disclaimers</h4>
   <div>
   4.1 Disclaimer
    </div>
    <div>
    We make no warranties regarding the Design Projects or any other products or services provided by us, Designers, Customers, or other Users and each of the foregoing are provided by us “AS IS”. Designers sell and Customers buy Sold Designs at their own risk. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction. Your interactions with other users are solely between you and such Users and SPAD Software will not be responsible for any loss or damage incurred as the result of any such interactions (excluding those directly due to SPAD Software’ acts or the Services). If there is a dispute between you and any User, we are under no obligation to become involved. Notwithstanding the foregoing, SPAD Software will use commercially reasonable efforts to provide the Services described in this Agreement.
You hereby release and forever discharge us (and our officers, employees, agents, successors, and assigns) from, and hereby waive and release, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or relates directly or indirectly to, your use of the Site and/or Services, any interactions or transactions of you with, or act or omission of you in relation to other Users, including Customers and Designers and Third Party Sites & Ads (excluding those directly due to SPAD Software’ acts or the Services). SPAD Software does not warrant that the functions supplied by, consultation or advice, will be uninterrupted or error-free. The entire risk as to the quality and performance of the service is with client. In no event will Company be liable to the client or any third party for any damages, including any lost profits, lost savings or other incidental, consequential or special damages arising out of the reproduction of, or appearance of the logo(s) or any design/material, even if company has been advised of the possibility of such damages.
Our telephonic support will not be available for international calls (calls from outside India) but user/client can get in touch with us on the same contact number (+91 8438353493) through a WhatsApp call, but that too should be within the working telephonic hours (IST 10:30 AM to 6:30 PM).

   </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>5. User Content</h4>
   <div>
   5.1 Your User Content
    </div>
    <div>
    “User Content” means any information and content that a User submits to, or uses with, the Site or Services. User Content includes Design Projects, Design Concepts, reviews, and/or testimonials (“Reviews”). You are solely responsible for your User Content. You assume all risks associated with the use of your User Content, including any reliance on its accuracy, completeness, or usefulness by others, or any disclosure of your User Content that makes you or any third party personally identifiable. You hereby represent and warrant that your User Content does not violate the Acceptable Use Policy (defined below). You may not state or imply that your User Content is in any way provided, sponsored, or endorsed by SPAD Software. Because you alone are responsible for your User Content (and not SPAD Software), you may expose yourself to liability if, for example, your User Content violates the Acceptable Use Policy. SPAD Software is not obligated to remove any Design Projects, Design Concepts, or Reviews from the Site unless required by applicable law. SPAD Software is not obligated to backup any User Content and User Content may be deleted at any time. You are solely responsible for creating backup copies of your User Content if you desire.
   </div>
   <div>
   5.2 License to User Content
   </div>
   <div>
   You hereby grant, and you represent and warrant that you have the right to grant, to SPAD Software an irrevocable, nonexclusive, royalty-free, and fully-paid, worldwide license for all the duration of the intellectual property rights to reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise use your User Content, and to grant sublicenses of the foregoing, solely to include your User Content in the Site and Services; provided that SPAD Software will only use your Design Brief and Design Concepts to run the applicable Design Project under the private or public settings of the Design Project. You agree to irrevocably waive (and cause to be waived) any claims and assertions of moral rights or attribution concerning your User Content. For the avoidance of doubt, the Designer’s license or assignment of the Sold Design to the Customer is outlined in the applicable Design Transfer Agreement.
   </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>6. Site</h4>
   <div>
   6.1 License
    </div>
    <div>
    Subject to the terms of this Agreement, SPAD Software grants you a non-transferable, non-exclusive, license to use the Site and Services (excluding Design Projects, designs in the Project Service, and Sold Designs) for your internal business purposes. For the avoidance of doubt, the Designer’s license or assignment of the Sold Design to the Customer is outlined in the applicable Design Transfer Agreement.
   </div>
   <div>
   6.2 Certain Restrictions
   </div>
   <div>
   The rights granted to you in this Agreement are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, distribute, customize, or otherwise commercially exploit the Site or Services, or otherwise host or sub-license the Site and/or Services (or any part thereof); (b) you shall not modify, make derivative works of, adapt, translate, disassemble, reverse compile, decompile or reverse engineer any part of the Site or Services, or otherwise attempt to discover the source code in the Site and/or Services (or any part thereof); (c) you shall not access the Site or Services to build or promote a similar or competitive service; and (d) except as expressly stated herein, no part of the Site or Services may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means. Any future release, update, or other addition to functionality of the Site or Services shall be subject to the terms of this Agreement. All copyright and other proprietary notices on any Site or Services content must be retained on all copies thereof. SPAD Software reserves the right, at any time, to modify, suspend, or discontinue the Site or Services or any part thereof with or without notice. You agree that SPAD Software will not be liable to you or any third party for any modification, suspension, or discontinuance of the Site or Services or any part thereof. You acknowledge and agree that SPAD Software will have no obligation to provide you with any support or maintenance in connection with the Site or Services.
   </div>
   <div>
   6.3 Feedback / Review
   </div>
   <div>
   If you provide SPAD Software any feedback or suggestions regarding the Site or Services (“Feedback”), you hereby assign and agree to assign upon our request to SPAD Software all rights in the Feedback and agree that SPAD Software shall have the right to use such Feedback and related information in any manner it deems appropriate. SPAD Software will treat any Feedback you provide to SPAD Software as non-confidential and non-proprietary. You agree that you will not submit to SPAD Software any information or ideas that you consider to be confidential or proprietary.
   </div>
   <div>
   6.4 Ownership
   </div>
   <div>
   Each User owns its own User Content. Excluding your User Content, you acknowledge that all the IPR in the Site and Services are owned by SPAD Software or SPAD Software’ licensors. The provision of the Site and Services does not transfer to you or any third party any rights, title or interest in or to such IPR. SPAD Software and its suppliers reserve all rights not granted in this Agreement.
   </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>7. Acceptable Use Policy</h4>
   <div>
   7.1 Privacy
    </div>
    <div>
    You agree that you will only use the personal information of other Designers made available to you only to interact with them concerning the Services. You must not use their personal information for any other purpose, including for marketing purposes. You represent and warrant that you will comply with applicable privacy laws and data protection laws concerning the storage, use, and transfer of personal information.
   </div>
   <div>
   7.2 User Content
   </div>
   <div>
   You agree not to use the Site or Services with any User Content or to provide any products or services that
You agree not to use the Site or Services with any User Content or to provide any products or services that (a) violates any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right (including by allowing any third party to download or reuse any User Content in violation of any such third party rights, by using any work in an editorial manner without affixing the necessary credit or attribution or by posting or uploading or allowing any third party to post or upload any User Content on social media sites that grant exclusive rights or ownership in respect of such User Content to any third party); (b) is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another’s privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, slanderous, indecent, pornographic, obscene, patently offensive (e. g. , material that promotes racism, bigotry, hatred, or physical harm of any kind against any group or individual) or otherwise objectionable material of any kind or nature or which is harmful to minors in any way or that would otherwise imply that the creator of the User Content, or the persons or property appearing in the User Content (if any), endorse any political, economic or other opinion-based movements or parties or in a way that places any person in the User Content in a bad light or in a defamatory, unlawful, immoral or offensive manner; (c) is in violation of any Laws, or obligations or restrictions imposed by any third party; or (d) would cause a material risk to the security or operations of SPAD Software or any third party.
   </div>
   <div>
   7.3 Use Restrictions
   </div>
   <div>
   you agree not to use the Site or Services to: (a) upload, transmit, or distribute any computer viruses, worms, or any software intended to damage or alter a computer system or data; (b) send unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of duplicative or unsolicited messages, whether commercial or otherwise, or to offer, use, or permit the use of the Site and/or Services in a computer service business, third-party outsourcing service, on a membership or subscription basis, on a service bureau basis, on a time-sharing basis, as part of a hosted service, or on behalf of any third party, or to sell, license or distribute any work as stand-alone or as part of an online database or any other database, or any derivative product containing any work in such way that is intended to allow a third party to use, download, extract or access the work as a stand-alone file or otherwise share any work with any third party; (c) harvest, collect, gather or assemble information or data regarding other users, including e-mail addresses, without their consent; (d) interfere with, disrupt, or create an undue burden on servers or networks connected to the Site or Services or violate the regulations, policies or procedures of such networks, or remove, obscure, or alter any proprietary notices associated with the Site and/or Services; (e) attempt to gain unauthorized access to the Site or Services, other computer systems or networks connected to or used together with the Site or Services, through password mining or other means; (f) harass or interfere with another user’s use and enjoyment of the Site or Services; (g) introduce software or automated agents or scripts to the Site or Services so as to produce multiple accounts, generate automated searches, requests and queries, or to strip, scrape, or mine data from the Site or Services; (h) impersonate any person or entity or falsify or misrepresent yourself or your affiliation with any person or entity; or (i) display, mirror, or frame the Site, or otherwise attempt to interact with the operating system underlying the Site and/or Services.
   </div>
   <div>
   7.4 Guidelines & Policies
   </div>
   <div>
   Please see the following (which you agree to comply with in your use of the Site and/or Services):
(a) Client Guidelines
URL

(b) Copyright/IP Guidelines
URL

(c) Privacy policy
URL

(d) Design Transfer Agreement
URL
   </div>
   <div>
   7.5
   </div>
   <div>
   We reserve the right (but have no obligation) to review any User Content, investigate, and/or take appropriate action against you in our sole discretion (including removing or modifying your User Content, terminating your Account, and/or reporting you to law enforcement authorities) if you violate the Acceptable Use Policy or any other provision of this Agreement or otherwise create liability for us or any other person.
   </div>
 
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>8. Indemnity</h4>
   <div>
   You agree to indemnify and hold SPAD Software (and its officers, employees, and agents) harmless, including reasonable costs and attorneys’ fees, from any claim or demand made by any third party due to or arising out of (i) your use of the Site or Services, (ii) your User Content (including your Design Project, Design Concept, designs in the Project Service, and Reviews), (iii) your interaction with any other User, (iv) your violation of this Agreement or any applicable laws. SPAD Software reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us and you agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior written consent of SPAD Software. SPAD Software will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.
    </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>9. Third Party Sites & Ads</h4>
   <div>
   The Site might contain links to third-party websites, services, and advertisements for third parties (collectively, “Third Party Sites & Ads”). Such Third-Party Sites & Ads are not under the control of SPAD Software and SPAD Software is not responsible for any Third Party Sites & Ads. SPAD Software provides these Third Party Sites & Ads only as a convenience and does not review, approve, monitor, endorse, warrant, or make any representations concerning Third Party Sites & Ads. You use all Third-Party Sites & Ads at your own risk. When you link to a Third Party Site & Ad, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction in connection with such Third Party Sites & Ads.
    </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>10 . Term and Termination</h4>
   <div>
   Subject to this Section, this Agreement will remain in full force and effect while you use the Site or Services. We may (a) suspend your rights to use the Site and/or Services (including your Account), including in part or in full, or (b) terminate this Agreement, at any time for a legitimate purpose, including in part or in full, and including for any use of the Site or Services in violation of this Agreement or where any of our licensors terminates our license to use any content. Upon termination of this Agreement, your Account and right to access and use the Site and Services (or relevant part thereof) will terminate immediately. You understand that any termination of your Account may involve deletion of your User Content associated therewith from our live databases. However, we reserve the right to continue to use your User Content to the extent permitted under applicable law. SPAD Software will not have any liability whatsoever to you for any termination of this Agreement, including for termination of your Account or deletion of your User Content.
    </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>11 . Disclaimers</h4>
   <div>
   The Site and Services are provided “AS-IS” and “AS AVAILABLE” and we (and our suppliers) expressly disclaim any warranties and conditions of any kind, whether express or implied, including the warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement. We (and our suppliers) make no warranty that the Site or Services: (a) will meet your requirements; (b) will be available on an uninterrupted, timely, secure, or error-free basis; or (c) will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe. Some states do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.
    </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>12. Limitation on Liability</h4>
   <div>
   In no event shall we (and our suppliers) be liable to you or any third party for any lost profit or any indirect, consequential, exemplary, incidental, special, or punitive damages arising from or relating to this Agreement or your use of, or inability to use, the Site or Services, even if we have been advised of the possibility of such damages. Access to, and use of, the Site and Services are at your discretion and risk, and you will be solely responsible for any damage to your computer system or loss of data resulting therefrom. Notwithstanding anything to the contrary contained herein (but subject to clause 14.4), our (and our suppliers’) liability to you for any damages arising from or related to this Agreement (for any cause whatsoever and regardless of the form of the action), will at all times be limited to the greater of (a) Three Thousand Rupees (INR 3000) or (b) amounts you have paid SPAD Software in the prior 12 months (if any). The existence of more than one claim will not enlarge this limit. Some states do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you and you may also have other legal rights that vary from state to state.**
    </div>
 
</div>
<div>
<h4  style={{marginTop:'20px'}}>13. General</h4>
   <div>
   13.1 Changes to Terms of Use
    </div>
    <div>
    This Agreement (including pricing terms) is subject to occasional revision, and if we make any substantial changes, we may (or may not be) notify you by sending you an e-mail to the last e-mail address you provided to us (if any) and/or by prominently posting notice of the changes on our Site. Any changes to this agreement will be effective upon the earlier of thirty (30) calendar days following our dispatch of an e-mail notice to you (if applicable) or thirty (30) calendar days following our posting of notice of the changes on our Site. These changes will be effective immediately for new users of our Site or Services. You are responsible for providing us with your most current e-mail address. If the last e-mail address that you have provided us is not valid, or for any reason is not capable of delivering to you the notice described above, our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice. Continued use of our Site or Services following notice of such changes shall indicate your acknowledgment of such changes and agreement to be bound by the terms and conditions of such changes.
   </div>
   <div>
   13.2 Entire Agreement
   </div>
   <div>
   This Agreement constitutes the entire agreement between you and us regarding the use of the Site and Services. Our failure to exercise or enforce any right or provision of this Agreement shall not operate as a waiver of such right or provision. The section titles in this Agreement are for convenience only and have no legal or contractual effect. The word including means including without limitation. If any provision of this Agreement is, for any reason, held to be invalid or unenforceable, the other provisions of this Agreement will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law. Your relationship to SPAD Software is that of an independent contractor, and neither party is an agent or partner of the other. This Agreement, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without SPAD Software’ prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. The terms of this Agreement shall be binding upon assignees.
   </div>
   <div>
   13.3 Copyright/Trademark Information
   </div>
   <div>
   Copyright © 2022 – 23, SPAD Software. All rights reserved. All trademarks, logos, and service marks (“Marks”) displayed on the Site are our property or the property of other third parties. You are not permitted to use these Marks without our prior written consent or the consent of such a third party that may own the Marks.
   </div>
   <div>
   13.4 Contact Information
   </div>
   <div>
   softwareservices.helpdesk@gmail.com / 8438353493
   </div>
   
</div>



        

<div>
        
</div>

</div>

        </Grid>
       

     
      </Grid>

   
  </Box>

 
 
  </>
  )
}

export default tc