import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { ColorSchema } from '../../Utils/Context/ColorThemes';

export default function LinearBufferProgress(props) {
    const Colors = React.useContext(ColorSchema)
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const [ProgressValue, setProgressValue] = React.useState('Basic')
    const progressRef = React.useRef(() => {});
    React.useEffect(() => {
      progressRef.current = () => {
        if (progress >= props.Progress) {
          setProgress(props.Progress);
          setBuffer(props.Buffer)
        } else {
          const diff = Math.random();
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });

    const progressText = React.useMemo(()=>{
        if(progress<20){
            return 'Basic'
        }
        else if(progress<60){
            return 'Intermediate'
        }
        else if(progress<80){
            return 'Advance'
        }
        else{
            return 'Professional'
        }
    },[progress])
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 25);
  
      if(progress == props.Progress) {
        clearInterval(timer);
      };
    }, []);
    return (
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} className={'ProgressWrapper'} >
            <span className='progressTitle' style={{ color: Colors.newVar.TXTColor, fontSize: 18 }} >{props.Skill}</span>
            <LinearProgress className='LinearBufferProgress' variant="buffer" value={progress} valueBuffer={buffer} />
            <span className='ProgressTextStyle' style={{color:Colors.newVar.TXTColor, fontSize: 16}} >{progressText}</span>
        </div>
    )
}
