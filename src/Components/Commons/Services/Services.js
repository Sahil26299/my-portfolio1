import React, { useContext } from 'react'
import './Services.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Images } from '../../../Utils/Images';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import Cards from '../Cards'

const servicesBody = ['Learned fundamentals of Web and App Development from scratch till deployment. Started with HTML, CSS and Javascript; gained good hands on web development by building and maintaining websites and applications, using programming, design tools, and libraries/frameworks such as React Js, React Native, Redux to meet both client and end-user needs.',
    'Good hands on app development using React Native, worked on live projects...',
    'Used various platforms for development and deployment...']
export default function Services() {
    const Colors = useContext(ColorSchema);
    return (
        <Box sx={{ alignItems: 'center' }} className={'ServicesWrapper'} >
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '3%', marginBottom: '3%', alignItems: 'center' }} >
                <div className='horizontalLine1' style={{ backgroundColor: 'rgba(255,255,255,0.25)', height: 0.75, width: '30%' }} />
                <span className={'ServicesHeading'} style={{ color: 'orange' }} >My Services</span>
                <div className='horizontalLine2' style={{ backgroundColor: 'rgba(255,255,255,0.25)', height: 0.75, width: '30%' }} />
            </Box>
            <Grid container alignSelf={'center'} spacing={2} >
                <Grid item lg={4} >
                    <div style={{width:'20rem', textAlign:'center', alignItems:'center', display:'flex', flexDirection:'column'}} >
                        <Cards isDemo={false} ImagePath={Images.DeveloperImageHome} CardTitle={'Web Development </>'} CardContent={'HTML | CSS | Javascript | Bootstrap '} CardBtnContent={'Know More'} />
                        <span style={{ color: Colors.newVar.TXTColor, marginTop:'5%'}} className={'serviceBody'} >
                            {servicesBody[0]}
                        </span>
                    </div>
                </Grid>
                <Grid item lg={4} >
                    <div style={{width:'20rem', textAlign:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
                        <Cards isDemo={false} ImagePath={Images.AppDeveloperTheme} CardTitle={'React Native {}'} CardContent={'React Native | React Native paper | Android | iOS '} CardBtnContent={'Know More'} />
                        <span style={{ color: Colors.newVar.TXTColor, marginTop:'5%' }} className={'serviceBody'} >
                            {servicesBody[1]}
                        </span>
                    </div>
                </Grid>
                <Grid item lg={4} >
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
    )
}
