import React, {useContext} from 'react'
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import './ContactDetails.css'
import TabHeader from '../TabHeader'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Call } from '@mui/icons-material';

export default function ContactDetails() {
    const Colors = useContext(ColorSchema)
  return (
    <Box className='ContactWrapper' >
        <TabHeader Children={'Contact Details'} Animation={'ContactHeader'} />
        <Grid container spacing={2}>
            <Grid item lg={2} sm={12} sx={{color:Colors.newVar.TXTColor, display:'flex', alignItems:'center', justifyContent:'center'}} >
                <a href="" className={'CallMeIcon'}>
                    <Call className='CallIcon'/>
                </a>
            </Grid>
            <Grid item lg={8} sm={12} >
                <span style={{color:Colors.newVar.TXTColor}} className={'CallMeText'} >+91 915098814</span>
            </Grid>
        </Grid>
    </Box>
  )
}
