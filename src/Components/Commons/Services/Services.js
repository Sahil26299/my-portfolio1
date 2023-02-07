import React, { useContext, useEffect } from 'react'
import './Services.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Images } from '../../../Utils/Images';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import Cards from '../Cards'
import TabHeader from '../TabHeader';

const servicesBody = ['Learned fundamentals of Web and App Development from scratch till deployment. Started with HTML, CSS and Javascript; gained good hands on web development by building and maintaining websites and applications, using programming, design tools, and libraries/frameworks such as React Js, React Native, Redux to meet both client and end-user needs.',
    'Gained good hands on app development using React Native, from responsive UI development with validations till API integration. Also started exploring redux in my last project which was majorly based on redux after react native.',
    'Used various platforms for development and deployment, like Git/Github for maintaining the code, VSCode majorly for development and android studio and XCode for deploying apk & aab(for android) and ipa(for iOS) files for testing and production.']
export default function Services() {
    const Colors = useContext(ColorSchema);
    
    return (
        <div id='Services_ID' >
            <Box sx={{ alignItems: 'center' }} className={'ServicesWrapper'} >
                <TabHeader Animation={'HeaderServices'} Children={'My Services'} />
                <Grid sx={{}} container alignSelf={'center'} spacing={2} >
                    <Grid item lg={4} md={6} sm={12} >
                        <div style={{width:'20rem', textAlign:'center', alignItems:'center', display:'flex', flexDirection:'column'}} >
                            <Cards isDemo={false} ImagePath={Images.DeveloperImageHome} CardTitle={'Web Development </>'} CardContent={'HTML | CSS | Javascript | Bootstrap '} CardBtnContent={'Know More'} />
                            <span style={{ color: Colors.newVar.TXTColor, marginTop:'5%'}} className={'serviceBody'} >
                                {servicesBody[0]}
                            </span>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} >
                        <div style={{width:'20rem', textAlign:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
                            <Cards isDemo={false} ImagePath={Images.AppDeveloperTheme} CardTitle={'React Native {}'} CardContent={'React Native | React Native paper | Android | iOS '} CardBtnContent={'Know More'} />
                            <span style={{ color: Colors.newVar.TXTColor, marginTop:'5%' }} className={'serviceBody'} >
                                {servicesBody[1]}
                            </span>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} >
                        <div style={{width:'20rem', textAlign:'center', alignItems:'center', display:'flex', flexDirection:'column'}} >
                            <Cards isDemo={false} ImagePath={Images.PlatformTheme} CardTitle={'Platforms'} CardContent={'VSCode | Git/GitHub | Android Studios | XCode '} CardBtnContent={'Know More'} />
                            <span style={{ color: Colors.newVar.TXTColor, marginTop:'5%' }} className={'serviceBody'} >
                                {servicesBody[2]}
                            </span>
                        </div>
                    </Grid>
                </Grid>
                {/* <Grid lg={4} sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }} >
                    <Box sx={{ width: '18rem' }} >

                    </Box>
                    <Box sx={{ width: '18rem' }}>

                    </Box>
                    <Box sx={{ width: '18rem' }}>

                    </Box>
                </Grid> */}
            </Box>
        </div>
    )
}
