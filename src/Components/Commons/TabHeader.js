import React, {useContext} from 'react'
import { Box } from '@mui/material'
import {ColorSchema} from '../../Utils/Context/ColorThemes'

export default function TabHeader({ Children, Animation}) {
    const Colors = useContext(ColorSchema);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '25%', marginBottom: '5%', alignItems: 'center' }} >
            <div className='horizontalLine1' style={{ backgroundColor: Colors.isDarkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)', height: 0.75, width: '30%' }} />
            <span className={`ServicesHeading ${Animation}`} style={{ color: 'orange' }} >{Children}</span>
            <div className='horizontalLine2' style={{ backgroundColor:Colors.isDarkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)', height: 0.75, width: '30%' }} />
        </Box>
    )
}
