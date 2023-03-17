import React, { useState, useContext, } from 'react'
import { ColorSchema } from '../../../Utils/Context/ColorThemes'
import { Call, Mail, LinkedIn, GitHub } from '@mui/icons-material';
import './BottomBar.css'

export default function BottomBar() {
    const Colors = useContext(ColorSchema);
    React.useEffect(() => {
        const handleWindowResize = () => {
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });

      const ScreenWidth = React.useMemo(()=>{
        return window.innerWidth
      },[window.innerWidth])
    return (
        <div className='BottomBarWrapper' >
            <span style={{ fontSize: ScreenWidth<350 ? 12 : ScreenWidth<850 ? 14 : ScreenWidth<1000 ? 14 : 16, color: '#fff', }} >
                Designed and Developed by Sahil Lokhande
            </span>
            <span style={{ fontSize: ScreenWidth<350 ? 12 : ScreenWidth<850 ? 14 : ScreenWidth<1000 ? 14 : 16, color: '#fff', marginTop: ScreenWidth<850 && 10 }} >
                Copyright &copy; 2023 Sahil Lokhande
            </span>
            <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'flex-end', marginTop: ScreenWidth<850 && 15}} >
                <a href="" className={'socialIconsCopy'}>
                    <Call className='CallIcon' sx={{fontSize: ScreenWidth<850 ?18 : ScreenWidth<1000 ? 20 : 25}} />
                </a>
                <a href="mailto:sahillokhande94@gmail.com" className={'socialIconsCopy'}>
                    <Mail className='MailIcon' sx={{fontSize: ScreenWidth<850 ?18 : ScreenWidth<1000 ? 20 : 25}} />
                </a>
                <a href="https://www.linkedin.com/in/sahillokhande26" target={'_blank'} className={'socialIconsCopy'}>
                    <LinkedIn className='MailIcon' sx={{fontSize: ScreenWidth<850 ?18 : ScreenWidth<1000 ? 20 : 25}} />
                </a>
                <a href="https://github.com/Sahil26299" target={'_blank'} className={'socialIconsCopy'}>
                    <GitHub className='MailIcon' sx={{fontSize: ScreenWidth<850 ?18 : ScreenWidth<1000 ? 20 : 25}} />
                </a>
            </div>
        </div>
    )
}
