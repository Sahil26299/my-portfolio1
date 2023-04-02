import React, { useContext, useEffect } from 'react'
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

    return (
        <div id='Services_ID' style={{ backgroundColor: Colors.newVar.BGColor }} >
            <div className='ServiceDetailsWrapper' >
                <div className='ServiceDetails' >
                    <p style={{ color: Colors.newVar.TXTColor, }} className={'serviceBody'} >
                        I specialize in providing <span style={{color:'orange'}} >top-quality mobile app development services</span> using <span style={{color:'orange'}} >React Native</span> for both Android and iOS platforms. With my expertise and experience, I can help you bring your vision to life by delivering intuitive, user-friendly, and visually appealing apps that will exceed your expectations.
                    </p>
                </div>
                <img src={Images.ServicesImage} className={'ServicesImageClass'} />
            </div>
            <Box sx={{ alignItems: 'center', marginTop: '3%' }} className={'ServicesWrapper'} >
                <Grid className='ServicesCardsContainer' container spacing={10} justifyContent={'center'} >
                    <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} lg={4} md={6} sm={12} >
                        <Cards isDemo={false} ImagePath={Images.DeveloperImageHome} CardTitle={'Web Development </>'} CardContent={'HTML | CSS | Javascript | React Js. | Bootstrap | Material UI'} />
                    </Grid>
                    <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} lg={4} md={6} sm={12} >
                        <Cards isDemo={false} ImagePath={Images.AppDeveloperTheme} CardTitle={'App Development {}'} CardContent={'React Native | Redux | Android | iOS '} />
                    </Grid>
                    <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} lg={4} md={6} sm={12} >
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
