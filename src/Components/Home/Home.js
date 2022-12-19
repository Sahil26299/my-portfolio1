import React, {useContext} from 'react'
import { Images } from '../../Utils/Images'
import './Home.css'
import Button from '../Commons/Button'
import {ColorSchema} from '../../Utils/Context/ColorThemes'
import Cards from '../Commons/Cards'

export default function Home(props) {
    const Colors = useContext(ColorSchema);
  return (
    <div className='WrapperHome'>
        <div style={{flexDirection:'row', display:'flex', alignItems:'flex-start'}}>
            <div className="IntroWrapper">
                <span className="heading1" style={{color:Colors.newVar.TXTColor}}>
                    Hi, I am <span style={{color:'orange'}}>Sahil Lokhande</span>
                </span><br />
                <span className="heading2" style={{color:Colors.newVar.TXTColor}}>
                    Experienced React Developer,
                    with strong grip on React Native, proficient in programming including good grasp in data structure and algorithms.
                </span><br />
                <Button BtnStyle={{  padding:10, marginTop:25}} BtnContent={'Contact Me'} onClick={props.ContactMeClicked} />
            </div>
            <div>
                <img src={Images.SmileyEmoji} className='SmileyImage' />
            </div>
        </div>
        <div className="d-flex my-5 align-items-center">
            <Cards ImagePath={Images.DeveloperImageHome} CardTitle={'Web Development </>'} CardContent={'HTML | CSS | Javascript | Bootstrap '} CardBtnContent={'Know More'} />
            <h5 style={{color:Colors.newVar.TXTColor}} className='Card1Description' >Learned fundamentals of Web and App Development from scratch till deployment...</h5>
        </div>
        <div className="d-flex my-5 align-items-center">
            <h5 style={{color:Colors.newVar.TXTColor, textAlign:'start'}} className='Card1Description' >Good hands on app development using React Native, worked on live projects...</h5>
            <Cards ImagePath={Images.AppDeveloperTheme} CardTitle={'React Native {}'} CardContent={'React Native | React Native paper | Android | iOS '} CardBtnContent={'Know More'} />
        </div>
        <div className="d-flex my-5 align-items-center">
            <Cards ImagePath={Images.PlatformTheme} CardTitle={'Platforms'} CardContent={'VSCode | Git/GitHub | Android Studios | XCode '} CardBtnContent={'Know More'} />
            <h5 style={{color:Colors.newVar.TXTColor}} className='Card1Description' >Used various platforms for development and deployment...</h5>
        </div>
    </div>
  )
}


