import React, { useState, useEffect, useContext, useCallback } from 'react'
import SideNav from '../../Components/SideNavBar/SideNav'
import './LandingScreenStyles.css'
import Home from '../../Components/Home/Home'
import { ColorSchema } from '../../Utils/Context/ColorThemes'
import Introduction from '../../Components/Commons/Introduction/Introduction'
import Services from '../../Components/Commons/Services/Services'
import ExtraCurricular from '../../Components/Commons/ExtraCurricular/ExtraCurricular'
import ContactDetails from '../../Components/Commons/ContactDetails/ContactDetails'
var element = null;
export default function LandingScreen() {
  const [TabSelected, setTabSelected] = useState('Home');
  const [showskilleset1, setshowskillset1] = useState(false);
  const [showskillset2, setshowskillset2] = useState(false);
  const [showskillset3, setshowskillset3] = useState(false);
  const [showskillset4, setshowskillset4] = useState(false);
  const Colors = useContext(ColorSchema);

  const animationReplace = (currentAnim, newAnim, class1, ...otherClass) => {
    let comp = document.querySelector(class1);
    comp.classList.remove('animate__animated', currentAnim)
    comp.classList.add('animate__animated', newAnim)
    if (otherClass.length != 0) {
      let comp_1 = document.querySelector(otherClass[0])
      comp_1.classList.remove('animate__animated', currentAnim)
      comp_1.classList.add('animate__animated', newAnim)
    }

  }

  const animationAdd = (newAnim, class1) => {
    let comp = document.querySelector(class1);
    comp.classList.add('animate__animated', newAnim);
  }
  const AnimationRemove = (currentAnim, class1) => {
    let comp = document.querySelector(class1);
    comp.classList.remove('animate__animated', currentAnim);
  }

  const handleScroll = (item) => {
    element = item;
    console.log(element.scrollTop, 'as')
    if (element.scrollTop > 1900 && element.scrollTop < 5800) {
      setTabSelected('Profile')
    }
    else if (element.scrollTop > 5800 && element.scrollTop < 6600) {
      setTabSelected('Services')
    }
    else if (element.scrollTop > 6600 && element.scrollTop < 8200) {
      setTabSelected('Extra')
    }
    else if (element.scrollTop > 8200) {
      setTabSelected('Contact')
    }
    else {
      setTabSelected('Home')
    }

    if (element.scrollTop < 520) {
      animationReplace('animate__zoomOut', 'animate__bounceIn', '.CardWrapper1');
    }
    else {
      animationReplace('animate__bounceIn', 'animate__zoomOut', '.CardWrapper1');
    }
    if (element.scrollTop < 900) {
      animationReplace('animate__zoomOut', 'animate__bounceIn', '.CardWrapper2');
    }
    else {
      animationReplace('animate__bounceIn', 'animate__zoomOut', '.CardWrapper2');
    }
    if (element.scrollTop > 480 && element.scrollTop < 1300) {
      animationReplace('animate__zoomOut', 'animate__bounceIn', '.CardWrapper3');
    }
    else {
      animationReplace('animate__bounceIn', 'animate__zoomOut', '.CardWrapper3');
    }

    if ((element.scrollTop > 1900 && element.scrollTop < 2300)) {
      animationAdd('animate__tada', '.HeaderIntro')
    }
    else {
      AnimationRemove('animate__tada', '.HeaderIntro')
    }
    if ((element.scrollTop > 5800 && element.scrollTop < 6150)) {
      animationAdd('animate__tada', '.HeaderServices')
    }
    else {
      AnimationRemove('animate__tada', '.HeaderServices')
    }
    if ((element.scrollTop > 6600 && element.scrollTop < 7050)) {
      animationAdd('animate__tada', '.HeaderExtraCurr')
    }
    else {
      AnimationRemove('animate__tada', '.HeaderExtraCurr')
    }


    if (element.scrollTop > 2800 && element.scrollTop < 3680) {
      setshowskillset1(true)
      animationReplace('animate__fadeOut', 'animate__fadeIn', '.fadeAnimation1')
    } else {
      animationReplace('animate__fadeIn', 'animate__fadeOut', '.fadeAnimation1')
    }
    if (element.scrollTop > 3100 && element.scrollTop < 4020) {
      setshowskillset2(true)
      animationReplace('animate__fadeOut', 'animate__fadeIn', '.fadeAnimation2')
    }
    else {
      animationReplace('animate__fadeIn', 'animate__fadeOut', '.fadeAnimation2')
    }
    if (element.scrollTop > 3450 && element.scrollTop < 4350) {
      setshowskillset3(true)
      animationReplace('animate__fadeOut', 'animate__fadeIn', '.fadeAnimation3')
    }
    else {
      animationReplace('animate__fadeIn', 'animate__fadeOut', '.fadeAnimation3')
    }
    if (element.scrollTop > 3740 && element.scrollTop < 4520) {
      setshowskillset4(true)
      animationReplace('animate__fadeOut', 'animate__fadeIn', '.fadeAnimation4')
    }
    else {
      animationReplace('animate__fadeIn', 'animate__fadeOut', '.fadeAnimation4')
    }

  }

  const ScrollToHome = () => {
    setTabSelected('Home')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.alert('hello')
  }


  return (
    <div className='Container'>
      <div onScroll={(e) => handleScroll(e.target)} className='Wrapper' style={{ backgroundColor: Colors.newVar.BGColor }}>
        <SideNav TabBar={TabSelected}
          HomePressed={() =>
            // ScrollToHome
            setTabSelected('Home')
          }
          ProfilePressed={() =>
            // handleScroll()
            setTabSelected('Profile')
          }
          ServicesPressed={() => setTabSelected('Services')} ExtraCurrPressed={() => setTabSelected('Extra')} ContactPressed={() => setTabSelected('Contact')} />
        <div className='ContentBody'>
          {/* {TabSelected == 'Home' ?
            <Home ContactMeClicked={() => setTabSelected('Contact')} /> :
            TabSelected == 'Profile' ?
              <Introduction /> :
              TabSelected == 'Services' ?
                <Services /> :
                TabSelected == 'Extra' ?
                  <ExtraCurricular /> : null
          } */}
          <Home ReadMorePressed_={() => setTabSelected('Profile')} ContactMeClicked={() => setTabSelected('Contact')} />
          <Introduction showSkillSet1={showskilleset1} showSkillSet2={showskillset2} showSkillSet3={showskillset3} showSkillSet4={showskillset4} />
          <Services />
          <ExtraCurricular />
          <ContactDetails />
        </div>
      </div>
    </div>
  )
}
