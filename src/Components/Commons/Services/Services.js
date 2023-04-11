import React, { useContext, useEffect, useState, useRef } from 'react'
import './Services.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Images } from '../../../Utils/Images';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import Cards from '../Cards'
import BottomBar from '../BottomBar/BottomBar';


const servicesBody = ['With good hands on HTML, CSS, Javascript and React Js., I develop full-blown web apps based on required UI designs.',
    'I specialize in providing top-quality mobile app development services using React Native for both Android and iOS platforms. With my expertise and experience, I can help you bring your vision to life by delivering intuitive, user-friendly, and visually appealing apps that will exceed your expectations.',
    'I use various platforms for development and deployment, like Git/Github for maintaining the code, VSCode majorly for development and android studio and XCode for deploying apk and aab(for android) and ipa(for iOS) files for testing and production.']
export default function Services() {
    const Colors = useContext(ColorSchema);
    const [HeaderVisible, setHeaderVisible] = useState();
    const [Card1Visible, setCard1Visible] = useState();
    const [Card2Visible, setCard2Visible] = useState();
    const [Card3Visible, setCard3Visible] = useState();
    const HeaderRef = useRef()
    const Card1Ref = useRef()
    const Card2Ref = useRef()
    const Card3Ref = useRef()

    useEffect(() => {
        let HeaderObserver = new IntersectionObserver((entries) => {
            setHeaderVisible(entries[0].isIntersecting)
        });
        HeaderObserver.observe(HeaderRef.current)
        
        let Card1Observer = new IntersectionObserver((entries) => {
            setCard1Visible(entries[0].isIntersecting)
        });
        Card1Observer.observe(Card1Ref.current)

        let Card2Observer = new IntersectionObserver((entries) => {
            setCard2Visible(entries[0].isIntersecting)
        });
        Card2Observer.observe(Card2Ref.current)

        let Card3Observer = new IntersectionObserver((entries) => {
            setCard3Visible(entries[0].isIntersecting)
        });
        Card3Observer.observe(Card3Ref.current)
    }, [])
    

    return (
        <div id='Services_ID' style={{ backgroundColor: Colors.newVar.BGColor }} >
            <div ref={HeaderRef} className={`ServiceDetailsWrapper ${HeaderVisible ? "FadeYAnimationServices" : ""}`} >
                <div className={`ServiceDetails ${HeaderVisible ? "FadeXAnimationServices" : ""}`} >
                    <p style={{ color: Colors.newVar.TXTColor, }} className={'serviceBody'} >
                        I specialize in providing <span style={{color: Colors.newVar.HighlightColor}} >top-quality mobile app development services</span> using <span style={{color: Colors.newVar.HighlightColor}} >React Native</span> for both Android and iOS platforms. With my expertise and experience, I can help you bring your vision to life by delivering intuitive, user-friendly, and visually appealing apps that will exceed your expectations.
                    </p>
                </div>
                <img src={Images.ServicesImage} className={`ServicesImageClass ${HeaderVisible ? "FadeXAnimationServices" : ""}`} />
            </div>
            <Box sx={{ alignItems: 'center', marginTop: '3%' }} className={'ServicesWrapper'} >
                <Grid className='ServicesCardsContainer' container spacing={10} justifyContent={'center'} >
                    <Grid ref={Card1Ref} className={`ServiceCard ${Card1Visible ? "FadeYAnimationServices" : ""}`} item display={'flex'} alignItems={'center'} flexDirection={'column'} lg={4} md={6} sm={12} >
                        <Cards isDemo={false} ImagePath={Images.DeveloperImageHome} CardTitle={'Web Development </>'} CardContent={'HTML | CSS | Javascript | React Js. | Bootstrap | Material UI'} />
                    </Grid>
                    <Grid ref={Card2Ref} className={`ServiceCard ${Card2Visible ? "FadeYAnimationServices" : ""}`} item display={'flex'} alignItems={'center'} flexDirection={'column'} lg={4} md={6} sm={12} >
                        <Cards isDemo={false} ImagePath={Images.AppDeveloperTheme} CardTitle={'App Development {}'} CardContent={'React Native | Redux | Android | iOS '} />
                    </Grid>
                    <Grid ref={Card3Ref} className={`ServiceCard ${Card3Visible ? "FadeYAnimationServices" : ""}`} item display={'flex'} alignItems={'center'} flexDirection={'column'} lg={4} md={6} sm={12} >
                        <Cards isDemo={false} ImagePath={Images.PlatformTheme} CardTitle={'Platforms'} CardContent={'VSCode | Git/GitHub | Android Studios | XCode '} />
                    </Grid>
                </Grid>
            </Box>
            {/* <div className='ReviewSection' >
                <p style={{color:Colors.newVar.TXTColor}} >Client Reviews<sup>error:(</sup></p>
            </div> */}
            <BottomBar />
        </div>
    )
}
