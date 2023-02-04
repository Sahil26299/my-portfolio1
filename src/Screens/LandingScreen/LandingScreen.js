import React, { useState, useEffect, useContext, useCallback } from 'react'
import SideNav from '../../Components/SideNavBar/SideNav'
import './LandingScreenStyles.css'
import Home from '../../Components/Home/Home'
import { ColorSchema } from '../../Utils/Context/ColorThemes'
import Introduction from '../../Components/Commons/Introduction/Introduction'
import Services from '../../Components/Commons/Services/Services'
import ExtraCurricular from '../../Components/Commons/ExtraCurricular/ExtraCurricular'
var element = null;
export default function LandingScreen() {
  const [TabSelected, setTabSelected] = useState('Home');
  const Colors = useContext(ColorSchema);

  const handleScroll = (item) => {
    element = item;
    console.log(element.scrollTop, 'as')
    if(element.scrollTop>1600){
      setTabSelected('Profile')
    }
    else{
      setTabSelected('Home')
    }


    if(element.scrollTop<400){
      let comp = document.querySelector('.Card1Description');
      let comp_ = document.querySelector('.cardsWrapper');
      comp.classList.remove('animate__animated', 'animate__bounceOut')
      comp.classList.add('animate__animated', 'animate__bounceIn')
      comp_.classList.remove('animate__animated', 'animate__bounceOut')
      comp_.classList.add('animate__animated', 'animate__bounceIn')
    }
    else{
      let comp = document.querySelector('.Card1Description');
      let comp_ = document.querySelector('.cardsWrapper');
      comp.classList.remove('animate__animated', 'animate__bounceIn')
      comp.classList.add('animate__animated', 'animate__bounceOut')
      comp_.classList.remove('animate__animated', 'animate__bounceIn')
      comp_.classList.add('animate__animated', 'animate__bounceOut')
    }

    if(element.scrollTop>1800){
      let comp = document.querySelector('.ServicesHeading');
      comp.classList.add('animate__animated','animate__jackInTheBox')
      comp.classList.remove('animate__animated','animate__jackInTheBox')
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
            ScrollToHome
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
          <Home ReadMorePressed_={()=>setTabSelected('Profile')} ContactMeClicked={() => setTabSelected('Contact')} />
          <Introduction />
          <Services />
          <ExtraCurricular />
        </div>
      </div>
    </div>
  )
}
