import React from 'react' 
import classes from './howItWorks.module.css';   
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

const HowItWorks = () => {
  return (
    <section style={{top:'0px',position:'relative',
    borderStyle: 'solid',
    borderWidth: "0px 0px 0px 5px",
    borderColor: "#212861",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "70px 0px 0px 0px", 
        textAlign: 'center'
    }}>
      <div className='subTitleHeading'>Working Process</div>
      <h3 className='subTitleMainHeading'>How Spad Software Works-It's 3 step process.</h3> 
      <div className={classes.workingProcessContainer}>
        <div className={classes.workingProcessrow}>
          <div className={classes.workingProcessCol}>
              <div className={classes.workingStepsCont}>
                  <div className={classes.stepMoving}>
                    <img src={`/images/process/steps-moving.png`} />
                  </div>
                  <div className={classes.wrokingSteps}>
                    <div className={classes.borderCircel}>
                      <h6 className={classes.countValue}>01</h6>
                      <span>Step</span>
                    </div>
                  </div>
                  <div className={classes.workingDetail}>
                    <h4>Tell Us your Requirement</h4>
                    <p className={classes.workingContent}>You can select the requirement like web development,web design,digital marketing,real time Training,Placement services through book an Appoinment</p>
                  </div>
                  <div className={classes.workingHoverDetail}>
                      <MenuBookOutlinedIcon className={classes.icons}/>
                    <h4>Through Book an Appoinment</h4>
                   </div>
              </div>
            </div>
            <div className={classes.workingProcessCol}>
              <div className={classes.workingStepsCont}>
                  <div className={classes.stepMoving}>
                    <img src={`/images/process/steps-moving.png`} />
                  </div>
                  <div className={classes.wrokingSteps}> 
                      <div className={classes.borderCircel}>
                        <h6 className={classes.countValue}>02</h6>
                        <span>Step</span>
                    </div>
                  </div>
                  <div className={classes.workingDetail}>
                    <h4>We will alalyze your requirement</h4>
                    <p className={classes.workingContent}>Our Expert team will look into your requirement and will prepare the process and quote</p>
                  </div>
                  <div className={classes.workingHoverDetail}>
                      <ZoomInOutlinedIcon className={classes.icons}/>
                    <h4>within 12 hours</h4>
                   </div>
              </div>
            </div>
            <div className={classes.workingProcessCol}>
              <div className={classes.workingStepsCont}>  
                  <div className={classes.wrokingSteps}> 
                      <div className={classes.borderCircel}>
                        <h6 className={classes.countValue}>03</h6>
                        <span>Step</span>
                    </div>
                  </div>
                  <div className={classes.workingDetail}>
                    <h4>Get the quote</h4>
                    <p className={classes.workingContent}>we will get back with you within 24 hours and provide estimation quote & development Ideas</p>
                  </div>
                  <div className={classes.workingHoverDetail}>
                      <RequestQuoteOutlinedIcon className={classes.icons}/>
                    <h4>within 12 hours</h4>
                   </div>
              </div>
          </div>  
        </div>
      </div>
  </section>
  )
}

export default HowItWorks