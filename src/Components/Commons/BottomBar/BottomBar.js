import React, { useState, useContext, } from 'react'
import { ColorSchema } from '../../../Utils/Context/ColorThemes'
import { Call, Mail, LinkedIn, GitHub } from '@mui/icons-material';
import './BottomBar.css'

export default function BottomBar() {
    const Colors = useContext(ColorSchema)
    return (
        <div style={{ width: '100%', backgroundColor: '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', height: 60, paddingRight:'2%', paddingLeft:'2%' }} >
            <span style={{ fontSize: 16, color: '#fff' }} >
                Designed and Developed by Sahil Lokhande
            </span>
            <span style={{ fontSize: 16, color: '#fff' }} >
                Copyright &copy; 2023 Sahil Lokhande
            </span>
            <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'flex-end'}} >
                <a href="" className={'socialIconsCopy'}>
                    <Call className='CallIcon' />
                </a>
                <a href="mailto:sahillokhande94@gmail.com" className={'socialIconsCopy'}>
                    <Mail className='MailIcon' />
                </a>
                <a href="https://www.linkedin.com/in/sahillokhande26" target={'_blank'} className={'socialIconsCopy'}>
                    <LinkedIn className='MailIcon' />
                </a>
                <a href="https://github.com/Sahil26299" target={'_blank'} className={'socialIconsCopy'}>
                    <GitHub className='MailIcon' />
                </a>
            </div>
        </div>
    )
}
