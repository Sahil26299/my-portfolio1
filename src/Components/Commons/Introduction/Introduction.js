import React, {useContext} from 'react';
import './Introduction.css';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import { Images } from '../../../Utils/Images';

export default function Introduction() {
    const Colors = useContext(ColorSchema);
  return (
    <div  >
        <div className="basic-intro-wrapper">
            <div className="basic-intro-text">
                <span style={{color:Colors.newVar.TXTColor}} className={'Intro-Text'} >Full Name : Sahil Dattatray Lokhande</span><br />
                <span style={{color:Colors.newVar.TXTColor}} className={'Intro-Text'} >Current Role : React Developer at Mobiloitte</span><br />
                <span style={{color:Colors.newVar.TXTColor}} className={'Intro-Text'} >Loaction : Pune, Maharashtra, India</span><br />
                <span style={{color:Colors.newVar.TXTColor}} className={'Intro-Text'} >Status : Looking forward for good career opportunities.</span><br />
            </div>
            <div className='verticalLine' ></div>
            <div>
                <img src={Images.ProfilePicture} className='ProfileMyImage' />
            </div>
        </div>
        <span style={{color:Colors.newVar.TXTColor, marginTop:15}} className={'Intro-Text'} >Hello </span>
    </div>
  )
}
