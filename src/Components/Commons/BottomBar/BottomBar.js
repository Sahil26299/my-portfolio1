import React, { useState, useContext, } from 'react'
import { ColorSchema } from '../../../Utils/Context/ColorThemes'
import { Call, Mail, LinkedIn, GitHub } from '@mui/icons-material';
import './BottomBar.css'

export default function BottomBar() {
    const Colors = useContext(ColorSchema);
    const [screenDimensions, setScreenDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    React.useEffect(() => {
        function handleResize() {
            setScreenDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='BottomBarWrapper' >
            <span className='Text1' >
                Designed and Developed by Sahil Lokhande
            </span>
            <span className='Text2' >
                Copyright &copy; 2023 Sahil Lokhande
            </span>
            <div className='IconsContainer' >
                <a href="" className={'socialIconsCopy'}>
                    <Call className='SocialIcons' sx={{ fontSize: screenDimensions.width < 850 ? 18 : screenDimensions.width < 1000 ? 20 : 25 }} />
                </a>
                <a href="mailto:sahillokhande94@gmail.com" className={'socialIconsCopy'}>
                    <Mail className='SocialIcons' sx={{ fontSize: screenDimensions.width < 850 ? 18 : screenDimensions.width < 1000 ? 20 : 25 }} />
                </a>
                <a href="https://www.linkedin.com/in/sahillokhande26" target={'_blank'} className={'socialIconsCopy'}>
                    <LinkedIn className='SocialIcons' sx={{ fontSize: screenDimensions.width < 850 ? 18 : screenDimensions.width < 1000 ? 20 : 25 }} />
                </a>
                <a href="https://github.com/Sahil26299" target={'_blank'} className={'socialIconsCopy'}>
                    <GitHub className='SocialIcons' sx={{ fontSize: screenDimensions.width < 850 ? 18 : screenDimensions.width < 1000 ? 20 : 25 }} />
                </a>
            </div>
        </div>
    )
}
