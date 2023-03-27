import React, { useContext, useEffect } from 'react'
import './Services.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Images } from '../../../Utils/Images';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import Cards from '../Cards'
import BottomBar from '../BottomBar/BottomBar';


const servicesBody = ['With good hands on HTML, CSS, Javascript and React Js., I develop full-blown web apps based on UI designs and wireframes provided.',
    'Developed good grip on React Native, by working for around 7-8 months, I develop fully functional UI for native android and iOS application along with API integration.',
    'I use various platforms for development and deployment, like Git/Github for maintaining the code, VSCode majorly for development and android studio and XCode for deploying apk and aab(for android) and ipa(for iOS) files for testing and production.']
export default function Services() {
    const Colors = useContext(ColorSchema);

    return (
        <div id='Services_ID' style={{ backgroundColor: Colors.newVar.BGColor }} >
            <div className='ServiceDetailsWrapper' >
                <div className='ServiceDetails' >
                    <ul>
                        <li style={{ color: Colors.newVar.TXTColor, marginTop: '5%' }}  >
                            <span className={'serviceBody'} >
                                {servicesBody[0]}
                            </span>
                        </li>
                        <li style={{ color: Colors.newVar.TXTColor, marginTop: '5%' }}  >
                            <span className={'serviceBody'} >
                                {servicesBody[1]}
                            </span>
                        </li>
                        <li style={{ color: Colors.newVar.TXTColor, marginTop: '5%' }}  >
                            <span className={'serviceBody'} >
                                {servicesBody[2]}
                            </span>
                        </li>
                    </ul>
                </div>
                <img src={Images.ServicesImage} className={'ServicesImageClass'} />
            </div>
            <Box sx={{ alignItems: 'center' }} className={'ServicesWrapper'} >
                <Grid sx={{}} container spacing={2} marginTop={5} >
                    <Grid item lg={4} md={6} sm={12} >
                        <Cards isDemo={false} ImagePath={Images.DeveloperImageHome} CardTitle={'Web Development </>'} CardContent={'HTML | CSS | Javascript | Bootstrap '} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} >
                        <Cards isDemo={false} ImagePath={Images.AppDeveloperTheme} CardTitle={'React Native {}'} CardContent={'React Native | React Native paper | Android | iOS '} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} >
                        <Cards isDemo={false} ImagePath={Images.PlatformTheme} CardTitle={'Platforms'} CardContent={'VSCode | Git/GitHub | Android Studios | XCode '} />
                    </Grid>
                </Grid>
            </Box>
            <BottomBar />
        </div>
    )
}
