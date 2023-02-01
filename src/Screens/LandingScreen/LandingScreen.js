import React, {useState, useContext} from 'react'
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
  return (
    <div className='Container'>
        <div className='Wrapper' style={{backgroundColor:Colors.newVar.BGColor}}>
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
