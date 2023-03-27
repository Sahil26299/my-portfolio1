import React, { useState, useEffect, useContext, useCallback } from 'react'
import SideNav from '../../Components/SideNavBar/SideNav'
import './LandingScreenStyles.css'
import Home from '../../Components/Commons/Home/Home'
import { ColorSchema } from '../../Utils/Context/ColorThemes'
import Introduction from '../../Components/Commons/Introduction/Introduction'
import Services from '../../Components/Commons/Services/Services'
import ExtraCurricular from '../../Components/Commons/ExtraCurricular/ExtraCurricular'
import ContactDetails from '../../Components/Commons/ContactDetails/ContactDetails'
import ResponsiveAppBar from '../../Components/Commons/AppBar'
var element = null;
const LandingScreen = () => {
  const [TabSelected, setTabSelected] = useState('Home');
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
    if (element.scrollTop > 1000 && element.scrollTop < 4800) {
      setTabSelected('Profile')
    }
    else if (element.scrollTop > 4800 && element.scrollTop < 5500) {
      setTabSelected('Services')
    }
    else if (element.scrollTop > 5500 && element.scrollTop < 7400) {
      setTabSelected('Extra')
    }
    else if (element.scrollTop > 7400) {
      setTabSelected('Contact')
    }
    else {
      setTabSelected('Home')
    }

    // if (element.scrollTop < 550) {
    //   animationReplace('animate__zoomOut', 'animate__bounceIn', '.CardWrapper1');
    // }
    // else {
    //   animationReplace('animate__bounceIn', 'animate__zoomOut', '.CardWrapper1');
    // }
    // if (element.scrollTop < 920) {
    //   animationReplace('animate__zoomOut', 'animate__bounceIn', '.CardWrapper2');
    // }
    // else {
    //   animationReplace('animate__bounceIn', 'animate__zoomOut', '.CardWrapper2');
    // }
    // if (element.scrollTop >420 && element.scrollTop < 1300) {
    //   animationReplace('animate__zoomOut', 'animate__bounceIn', '.CardWrapper3');
    // }
    // else {
    //   animationReplace('animate__bounceIn', 'animate__zoomOut', '.CardWrapper3');
    // }

    if ((element.scrollTop > 980 && element.scrollTop < 1450)) {
      animationAdd('animate__tada', '.HeaderIntro')
    }
    else {
      AnimationRemove('animate__tada', '.HeaderIntro')
    }
    if ((element.scrollTop > 4800 && element.scrollTop < 5300)) {
      animationAdd('animate__tada', '.HeaderServices')
    }
    else {
      AnimationRemove('animate__tada', '.HeaderServices')
    }
    if ((element.scrollTop > 5600 && element.scrollTop < 6150)) {
      animationAdd('animate__tada', '.HeaderExtraCurr')
    }
    else {
      AnimationRemove('animate__tada', '.HeaderExtraCurr')
    }
    if (element.scrollTop > 7400) {
      animationAdd('animate__tada', '.ContactHeader')
    }
    else {
      AnimationRemove('animate__tada', '.ContactHeader')
    }


    // if (element.scrollTop > 2700 && element.scrollTop < 3550) {
    //   animationReplace('animate__fadeOut', 'animate__fadeIn', '.fadeAnimation1')
    // } else {
    //   animationReplace('animate__fadeIn', 'animate__fadeOut', '.fadeAnimation1')
    // }
    // if (element.scrollTop > 2930 && element.scrollTop < 3920) {
    //   animationReplace('animate__fadeOut', 'animate__fadeIn', '.fadeAnimation2')
    // }
    // else {
    //   animationReplace('animate__fadeIn', 'animate__fadeOut', '.fadeAnimation2')
    // }
    // if (element.scrollTop > 3300 && element.scrollTop < 4220) {
    //   animationReplace('animate__fadeOut', 'animate__fadeIn', '.fadeAnimation3')
    // }
    // else {
    //   animationReplace('animate__fadeIn', 'animate__fadeOut', '.fadeAnimation3')
    // }
    // if (element.scrollTop > 3620 && element.scrollTop < 4400) {
    //   animationReplace('animate__fadeOut', 'animate__fadeIn', '.fadeAnimation4')
    // }
    // else {
    //   animationReplace('animate__fadeIn', 'animate__fadeOut', '.fadeAnimation4')
    // }

  }

  const ScrollToHome = () => {
    setTabSelected('Home')
    const element = document.getElementById('Home_ID');
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const ScrollToIntroduction = () => {
    setTabSelected('Profile');
    const element = document.getElementById('Introduction_ID');
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const ScrollToServices = () => {
    setTabSelected('Services');
    const element = document.getElementById('');
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const ScrollToExtraCurricular = () => {
    setTabSelected('Extra')
    const element = document.getElementById('Extra_ID');
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const ScrollToContact = () => {
    setTabSelected('Contact');
    const element = document.getElementById('Contact_ID');
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='Container' style={{ backgroundColor: Colors.newVar.BGColor }} >
      <ResponsiveAppBar />
      <div
        onScroll={(e) => handleScroll(e.target)}
        className='Wrapper'>
        <div className='ContentBody'>
          {/* <Home ReadMorePressed_={() => ScrollToServices()} ContactMeClicked={() => ScrollToContact()} /> */}
          {/* <Introduction />
          <Services />
          <ExtraCurricular />
          <ContactDetails /> */}
        </div>
      </div>
    </div>
  )
}

export default LandingScreen;
