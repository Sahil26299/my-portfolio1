import React, { useContext, useState, useEffect } from 'react'
import { Images } from '../../../Utils/Images'
import './Home.css'
import Button from '../Button'
import { ColorSchema } from '../../../Utils/Context/ColorThemes'
import Cards from '../Cards'
import ShowcaseCarousel from '../ShowcaseCarousel';
import { Grid } from '@mui/material'
import { FIRST_NAME, INTRODUCTION_LINE, LAST_NAME } from '../../../Utils/Constants'
import { useTypewriter } from 'react-simple-typewriter'
import { Call, Mail, LinkedIn, GitHub } from '@mui/icons-material';
import BottomBar from '../BottomBar/BottomBar'
const ImagesArray = [Images.TaralShowcase1,
Images.TaralShowcase2,
Images.TaralShowcase3,
Images.TaralShowcase4,
Images.TaralShowcase5,
Images.TaralShowcase6,
Images.TaralShowcase7,
Images.TaralShowcase8,
Images.TaralShowcase9,
Images.TaralShowcase10,
Images.TaralShowcase11,
Images.TaralShowcase12,
Images.TaralShowcase13,
Images.TaralShowcase14,
Images.TaralShowcase15]
export default function Home(props) {

    const Colors = useContext(ColorSchema);
    const [text] = useTypewriter({
        words: ['Software Engineer', 'Front-End Developer', 'React Js.', 'React Native', 'Redux'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 2000
    })

    return (
        <div className='WrapperHome' id='Home_ID' style={{ backgroundColor: Colors.newVar.BGColor }} >
            <div className='CoverPhoto' >
                <div>
                    <img src={Images.ProfilePicture} className='ProfilePict' />
                </div>
            </div>
            <div style={{flexDirection:'row', alignItems:'center', display:'flex', justifyContent:'flex-end', marginRight:'5%', marginTop:'1%'}} >
                <a href="" className={'socialIcons'}>
                    <Call className='CallIcon' />
                </a>
                <a href="mailto:sahillokhande94@gmail.com" className={'socialIcons'}>
                    <Mail className='MailIcon' />
                </a>
                <a href="https://www.linkedin.com/in/sahillokhande26" target={'_blank'} className={'socialIcons'}>
                    <LinkedIn className='MailIcon' />
                </a>
                <a href="https://github.com/Sahil26299" target={'_blank'} className={'socialIcons'}>
                    <GitHub className='MailIcon' />
                </a>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '3%', marginLeft: '5%' }}>
                <div className="IntroWrapper">
                    <div className="heading1" >
                        <span style={{ color: Colors.newVar.TXTColor }} >{INTRODUCTION_LINE}</span>  <p className='animate__animated animate__tada animate__infinite' >👋</p>
                    </div>
                    <div className="heading1" >
                        <span style={{ color: Colors.newVar.TXTColor }} >I am <span style={{ color: 'orange' }} >{FIRST_NAME} {LAST_NAME}</span></span>
                    </div><br />
                    <div style={{ marginLeft: 7, display: 'inline-block' }} >
                        {/* <span className="heading2" style={{ color: Colors.newVar.TXTColor }}>
                            Experienced React Developer,
                            with strong grip on React Native, proficient in programming including good grasp in data structure and algorithms.
                        </span><br /> */}
                        <p class="typewriter">{text}<span className='Cursor'>|</span></p>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                        <Button BtnStyle={{ height: 50, width: 120, marginTop: 25, marginRight: 15 }} BtnContent={'Contact Me'} onClick={props.ContactMeClicked} />
                        <a href={require('../../../Assets/DownloadFiles/Resume_Sahil.pdf')} download={'Resume_Sahil'} className={'ResumeDownloadLink'} >
                            <Button BtnStyle={{ height: 50, width: 120, marginTop: 25 }} BtnContent={'Download CV'} />
                        </a>
                    </div>
                </div>
                {/* <div>
                    <img src={Images.SmileyEmoji} className='SmileyImage' />
                </div> */}
            </div>

            <Grid className='CardContainer' container spacing={10} marginTop={5} marginBottom={10} >
                <Grid item lg={4} md={12} >
                    <Cards classID={'CardWrapper1'} ReadMorePressed={props.ReadMorePressed_} isDemo={true} ImagePath={Images.DeveloperImageHome} CardTitle={'Web Development </>'} CardContent={'HTML | CSS | Javascript | Bootstrap | Material UI'} CardBtnContent={'Know More'} />
                </Grid>
                <Grid item lg={4} md={12} >
                    <Cards classID={'CardWrapper2'} ReadMorePressed={props.ReadMorePressed_} isDemo={true} ImagePath={Images.AppDeveloperTheme} CardTitle={'React {}'} CardContent={'React Js. | React Native | Redux '} CardBtnContent={'Know More'} />
                </Grid>
                <Grid item lg={4} md={12} >
                    <Cards classID={'CardWrapper3'} ReadMorePressed={props.ReadMorePressed_} isDemo={true} ImagePath={Images.PlatformTheme} CardTitle={'Platforms'} CardContent={'VSCode | Git/GitHub | Android Studios | XCode '} CardBtnContent={'Know More'} />
                </Grid>
            </Grid>

            {/* <div className='AllCardsWrapper' >
            <div className="d-flex my-5 align-items-center">
                <h5 style={{color:Colors.newVar.TXTColor}} className={`Card1Description`} >Learned fundamentals of Web and App Development from scratch till deployment...</h5>
            </div>
            <div className="d-flex my-5 align-items-center">
                <h5 style={{color:Colors.newVar.TXTColor, textAlign:'start'}} className='Card2Description' >Good hands on app development using React Native, worked on live projects...</h5>
            </div>
            <div className="d-flex my-5 align-items-center">
                <h5 style={{color:Colors.newVar.TXTColor}} className='Card3Description' >Used various platforms for development and deployment...</h5>
            </div>
        </div> */}
            <div className='HomeCarouselWrapper' >
                <span className='headingProject' style={{ color: 'orange' }}>Project Snapshots</span>
                <ShowcaseCarousel
                    ImageStyleName={'HomeCarouselImage'}
                    CarouselWrapperStyle={'HomeCarouselWrapper'}
                    ImageArray={ImagesArray}
                    SlidesToShow={6}
                />
            </div>
            <BottomBar/>
        </div>
    )
}


