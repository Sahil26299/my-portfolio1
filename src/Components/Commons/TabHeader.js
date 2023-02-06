import React from 'react'
import { Box } from '@mui/material'

export default function TabHeader({ Children, Animation}) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '25%', marginBottom: '5%', alignItems: 'center' }} >
            <div className='horizontalLine1' style={{ backgroundColor: 'rgba(255,255,255,0.25)', height: 0.75, width: '30%' }} />
            <span className={`ServicesHeading ${Animation}`} style={{ color: 'orange' }} >{Children}</span>
            <div className='horizontalLine2' style={{ backgroundColor: 'rgba(255,255,255,0.25)', height: 0.75, width: '30%' }} />
        </Box>
    )
}
