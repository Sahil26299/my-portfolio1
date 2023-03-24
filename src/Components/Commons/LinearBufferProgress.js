import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { ColorSchema } from '../../Utils/Context/ColorThemes';

export default function LinearBufferProgress(props) {
    const Colors = React.useContext(ColorSchema)

    const progressText = React.useMemo(()=>{
        if(props.Progress<40){
            return 'Basic'
        }
        else if(props.Progress<75){
            return 'Intermediate'
        }
        else if(props.Progress<90){
            return 'Advance'
        }
        else{
            return 'Professional'
        }
    },[props.Progress])

    
    return (
        <div style={{}} className={'ProgressWrapper'} >
            <span className='progressTitle' style={{ color: Colors.newVar.TXTColor }} >{props.Skill}</span>
            <LinearProgress className='LinearBufferProgress' variant="buffer" value={props.Progress} valueBuffer={props.Buffer} />
            <span className='ProgressTextStyle' style={{color:Colors.newVar.TXTColor}} >{progressText}</span>
        </div>
    )
}
