import React, {useState, useEffect, useContext} from 'react'
import SideNav from '../../Components/SideNavBar/SideNav'
import './LandingScreenStyles.css'
import Home from '../../Components/Home/Home'
import { ColorSchema } from '../../Utils/Context/ColorThemes'
import Introduction from '../../Components/Commons/Introduction/Introduction'
import Services from '../../Components/Commons/Services/Services'
import ExtraCurricular from '../../Components/Commons/ExtraCurricular/ExtraCurricular'

export default function LandingScreen() {
  const [TabSelected, setTabSelected] = useState('Home');
  const Colors = useContext(ColorSchema);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    // clean up code
    onScrollComponent()
    window.removeEventListener('scroll', onScrollComponent);
    window.addEventListener('scroll', onScrollComponent, { passive: true });
    return () => window.removeEventListener('scroll', onScrollComponent);
  }, []);
  const onScrollComponent = () => {
    console.log(window.scrollY,'121212')
    setOffset(window.scrollY)};
  

  return (
    <div className='Container'>
        <div onScroll={()=>onScrollComponent()}  className='Wrapper' style={{backgroundColor:Colors.newVar.BGColor}}>
            <SideNav TabBar = {TabSelected} HomePressed={()=>setTabSelected('Home')} ProfilePressed={()=>setTabSelected('Profile')} ServicesPressed={()=>setTabSelected('Services')} ExtraCurrPressed={()=>setTabSelected('Extra')} ContactPressed={()=>setTabSelected('Contact')} />
            <div className='ContentBody'>
              {TabSelected=='Home' ? 
              <Home ContactMeClicked={()=>setTabSelected('Contact')} /> : 
              TabSelected=='Profile' ? 
              <Introduction  /> : 
              TabSelected=='Services' ? 
              <Services/> : 
              TabSelected=='Extra' ?
              <ExtraCurricular/> : null 
              }
            </div>
        </div>
    </div>
  )
}
