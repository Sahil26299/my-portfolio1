import React, { useContext, useState, useEffect, useRef } from 'react'
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
import resumePDF from '../../../Assets/DownloadFiles/SahilLokhande_CV.pdf';
import { Link, useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const ImagesArray = [
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
    const navigate = useNavigate();
    const Card1Ref = useRef();
    const Card2Ref = useRef();
    const Card3Ref = useRef();
    const MyDescriptionRef = useRef();
    const SocialLinksRef = useRef();
    const ProfileImageRef = useRef();

    const Colors = useContext(ColorSchema);
    const [isCard1Visible, setisCard1Visible] = useState()
    const [isCard2Visible, setisCard2Visible] = useState()
    const [isCard3Visible, setisCard3Visible] = useState();
    const [DescriptionVisible, setDescriptionVisible] = useState();
    const [SocialLinksVisible, setSocialLinksVisible] = useState();

    const [text] = useTypewriter({
        words: ['Software Engineer', 'Front-End Developer', 'React Js.', 'React Native', 'Redux'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 2000
    })

    const [screenDimensions, setScreenDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        function handleResize() {
            setScreenDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let DescriptionObserver = new IntersectionObserver((entries)=>{
            setDescriptionVisible(entries[0].isIntersecting)
        });
        DescriptionObserver.observe(MyDescriptionRef.current)

        let SocialLinksObserver = new IntersectionObserver((entries)=>{
            setSocialLinksVisible(entries[0].isIntersecting)
        });
        SocialLinksObserver.observe(SocialLinksRef.current)

        let Card1Observer = new IntersectionObserver((entries)=>{
            setisCard1Visible(entries[0].isIntersecting)
        });
        Card1Observer.observe(Card1Ref.current)

        let Card2Observer = new IntersectionObserver((entries)=>{
            setisCard2Visible(entries[0].isIntersecting)
        });
        Card2Observer.observe(Card2Ref.current)

        let Card3Observer = new IntersectionObserver((entries)=>{
            setisCard3Visible(entries[0].isIntersecting)
        });
        Card3Observer.observe(Card3Ref.current)
    }, [])
    

      

    const OpenFile = () => {
        window.open(resumePDF)
    }

    return (
        <div className='WrapperHome' id='Home_ID' style={{ backgroundColor: Colors.newVar.BGColor }} >
            <div className='CoverPhoto' >
                <div >
                    <LazyLoad height={100} offset={100} >
                        <img src={Images.ProfilePicture} className={`ProfilePict`} />
                    </LazyLoad>
                </div>
            </div>
            <div ref={SocialLinksRef} className={`SocialLinks ${SocialLinksVisible ? "FadeYAnimation" : ""}`} style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'flex-end', marginRight: screenDimensions.width < 450 ? '2%' : '5%', marginTop: screenDimensions.width < 450 ? '2%' : '1%' }} >
                <a href="" className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <Call className='CallIcon' style={{ fontSize: screenDimensions.width < 450 ? 18 : screenDimensions.width < 650 ? 25 : 30 }} />
                </a>
                <a href="mailto:sahillokhande94@gmail.com" className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <Mail className='MailIcon' style={{ fontSize: screenDimensions.width < 450 ? 18 : screenDimensions.width < 650 ? 25 : 30 }} />
                </a>
                <a href="https://www.linkedin.com/in/sahillokhande26" target={'_blank'} className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <LinkedIn className='MailIcon' style={{ fontSize: screenDimensions.width < 450 ? 18 : screenDimensions.width < 650 ? 25 : 30 }} />
                </a>
                <a href="https://github.com/Sahil26299" target={'_blank'} className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <GitHub className='MailIcon' style={{ fontSize: screenDimensions.width < 450 ? 18 : screenDimensions.width < 650 ? 25 : 30 }} />
                </a>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '3%', marginLeft: '5%' }}>
                <div className={`IntroWrapper`}>
                    <div ref={MyDescriptionRef} className={`MyDescription ${DescriptionVisible ? "FadeYAnimation" : ""}`} >
                        <div className="heading1" >
                            <span style={{ color: Colors.newVar.TXTColor }} >{INTRODUCTION_LINE}</span>
                        </div>
                        <div className="heading1" >
                            <span style={{ color: Colors.newVar.TXTColor, marginTop: 5 }} >I am<span style={{ color: Colors.isDarkMode ? 'orange' :'#ff8c00' }} id={'FullNameHome'} >{FIRST_NAME} {LAST_NAME}</span></span>
                        </div>
                        <div style={{ display: 'inline-block' }} >

                            <p className="typewriter" style={{color : Colors.isDarkMode ? 'orange' :'#ff8c00'}} >{text}<span className='Cursor' style={{ color: Colors.isDarkMode ? 'orange' :'#ff8c00' }} >|</span></p>

                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: screenDimensions.width<300 ? 'column' : 'row', alignItems: 'center' }} >
                        <Button BtnStyle={{ height: screenDimensions.width > 650 ? 50 : 45, width: screenDimensions.width<300 ? 150 :screenDimensions.width > 650 ? 140 : 120, marginTop: 25, marginRight: screenDimensions.width>300 && 15, }} BtnContent={'Contact Me'} Path={'/contact'} BtnTxtStyle={{ fontSize: screenDimensions.width > 650 ? 16 : 14 }} onClick={props.ContactMeClicked} />
                        {/* <a href={resumePDF} download={'SahilLokhande_CV.pdf'} className={'ResumeDownloadLink'} > */}
                        <Button onClick={() => OpenFile()} BtnStyle={{ height: screenDimensions.width > 650 ? 50 : 45, width: screenDimensions.width<300 ? 150 :screenDimensions.width > 650 ? 140 : 120, marginTop: 25 }} BtnContent={'Download CV'} BtnTxtStyle={{ fontSize: screenDimensions.width > 650 ? 16 : 14 }} />
                        {/* </a> */}
                    </div>
                </div>
                {/* <div>
                    <img src={Images.SmileyEmoji} className='SmileyImage' />
                </div> */}
            </div>

            <Grid className='CardContainer' container justifyContent={'center'} spacing={10} marginTop={5} marginBottom={10} >
                <Grid ref={Card1Ref} display={'flex'} alignItems={'center'} flexDirection={'column'} item lg={4} md={6} sm={12} >
                    <Cards classID={`CardWrapper ${isCard1Visible ? 'FadeYAnimation' : ''}`} ReadMorePressed={() => navigate('/services')} isDemo={true} ImagePath={Images.DeveloperImageHome} CardTitle={'Web Development </>'} CardContent={'HTML | CSS | Javascript | Bootstrap | Material UI'} CardBtnContent={'Know More'} />
                </Grid>
                <Grid ref={Card2Ref} display={'flex'} alignItems={'center'} flexDirection={'column'} item lg={4} md={6} sm={12} >
                    <Cards classID={`CardWrapper ${isCard2Visible ? 'FadeYAnimation' : ''}`} ReadMorePressed={() => navigate('/services')} isDemo={true} ImagePath={Images.AppDeveloperTheme} CardTitle={'React {}'} CardContent={'React Js. | React Native | Redux '} CardBtnContent={'Know More'} />
                </Grid>
                <Grid ref={Card3Ref} display={'flex'} alignItems={'center'} flexDirection={'column'} item lg={4} md={6} sm={12} >
                    <Cards classID={`CardWrapper ${isCard3Visible ? 'FadeYAnimation' : ''}`} ReadMorePressed={() => navigate('/services')} isDemo={true} ImagePath={Images.PlatformTheme} CardTitle={'Platforms'} CardContent={'VSCode | Git/GitHub | Android Studios | XCode '} CardBtnContent={'Know More'} />
                </Grid>
            </Grid>
            <div className='HomeCarouselWrapper' >
                <span className='headingProject' style={{ color: 'orange' }}>Project Snapshots</span>
                <ShowcaseCarousel
                    ImageStyleName={'HomeCarouselImage'}
                    CarouselWrapperStyle={'HomeCarouselWrapper'}
                    ImageArray={ImagesArray}
                    SlidesToShow={6}
                    Speed={30000}
                />
            </div>
            <BottomBar />
        </div>
    )
}


