import React, {useContext, useState} from 'react'
import { Images } from '../../Utils/Images'
import './Home.css'
import Button from '../Commons/Button'
import {ColorSchema} from '../../Utils/Context/ColorThemes'
import Cards from '../Commons/Cards'
import ShowcaseCarousel from '../Commons/ShowcaseCarousel';
import { requirePropFactory } from '@mui/material'

const ImagesArray = [Images.TaralShowcase1, 
    Images.TaralShowcase2, 
    Images.TaralShowcase3, 
    Images.TaralShowcase4, 
    Images.TaralShowcase5,
    Images.TaralShowcase6, 
    Images.TaralShowcase7, 
    Images.TaralShowcase8, 
    Images.TaralShowcase9, 
    Images.TaralShowcase10, 
    Images.TaralShowcase11, 
    Images.TaralShowcase12, 
    Images.TaralShowcase13, 
    Images.TaralShowcase14, 
    Images.TaralShowcase15]
export default function Home(props) {
    
    const Colors = useContext(ColorSchema);
  return (
    <div className='WrapperHome'>
        <div style={{flexDirection:'row', display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
            <div className="IntroWrapper">
                <span className="heading1" style={{color:Colors.newVar.TXTColor}}>
                    {'<Hello'}, I am <span style={{color:'orange'}}>Sahil Lokhande</span>{'/>'}
                </span><br />
                <span className="heading2" style={{color:Colors.newVar.TXTColor}}>
                    Experienced React Developer,
                    with strong grip on React Native, proficient in programming including good grasp in data structure and algorithms.
                </span><br />
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}} >
                    <Button BtnStyle={{height:50, width:120, marginTop:25, marginRight:15}} BtnContent={'Contact Me'} onClick={props.ContactMeClicked} />
                    <a href={require('../../Assets/DownloadFiles/Resume_Sahil.pdf')} download={'Resume_Sahil'} className={'ResumeDownloadLink'} >
                        <Button BtnStyle={{height:50, width:120, marginTop:25}} BtnContent={'Download CV'} />
                    </a>
                </div>
            </div>
            <div>
                <img src={Images.SmileyEmoji} className='SmileyImage' />
            </div>
        </div>
        <div className='AllCardsWrapper' >
            <div className="d-flex my-5 align-items-center">
                <Cards classID={'CardWrapper1 animate__animated animate__bounceIn'} ReadMorePressed={props.ReadMorePressed_} isDemo={true} ImagePath={Images.DeveloperImageHome} CardTitle={'Web Development </>'} CardContent={'HTML | CSS | Javascript | Bootstrap '} CardBtnContent={'Know More'} />
                <h5 style={{color:Colors.newVar.TXTColor}} className={`Card1Description`} >Learned fundamentals of Web and App Development from scratch till deployment...</h5>
            </div>
            <div className="d-flex my-5 align-items-center">
                <h5 style={{color:Colors.newVar.TXTColor, textAlign:'start'}} className='Card2Description' >Good hands on app development using React Native, worked on live projects...</h5>
                <Cards classID={'CardWrapper2 animate__animated animate__bounceIn'} ReadMorePressed={props.ReadMorePressed_} isDemo={true} ImagePath={Images.AppDeveloperTheme} CardTitle={'React Native {}'} CardContent={'React Native | React Native paper | Android | iOS '} CardBtnContent={'Know More'} />
            </div>
            <div className="d-flex my-5 align-items-center">
                <Cards classID={'CardWrapper3'} ReadMorePressed={props.ReadMorePressed_} isDemo={true} ImagePath={Images.PlatformTheme} CardTitle={'Platforms'} CardContent={'VSCode | Git/GitHub | Android Studios | XCode '} CardBtnContent={'Know More'} />
                <h5 style={{color:Colors.newVar.TXTColor}} className='Card3Description' >Used various platforms for development and deployment...</h5>
            </div>
        </div>
        <div className='CarouselWrapper' >
            <span className='headingProject' style={{color:'orange'}}>Project Snapshots</span>
            <ShowcaseCarousel
            ImageStyleName={'HomeCarouselImage'}
            CarouselWrapperStyle={'HomeCarouselWrapper'}
            ImageArray = {ImagesArray}
            />
        </div>
    </div>
  )
}


