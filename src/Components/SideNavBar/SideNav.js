import React, { useState, useContext } from 'react'
import { colors } from '../../Utils/Themes'
import { LightMode, DarkMode } from '@mui/icons-material';
import { ColorSchema } from '../../Utils/Context/ColorThemes';
import { Home, Person, DeveloperMode, VolunteerActivism, AlternateEmail } from '@mui/icons-material';
import ProfileCarousel from '../Commons/ProfileCarousel';
import { Images } from '../../Utils/Images';

export default function SideNav(props) {
    const Colors = useContext(ColorSchema)
    const switchModes = () => {
        Colors.setisDarkMode(!Colors.isDarkMode)
    }

    return (
        <div>
            <nav className="sideNav" style={{backgroundColor:Colors.newVar.BGColor}}>
                <div className='ProfileContainer' >
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingRight: 20}}>
                        {/* <img src={props.ImagePath} className="ProfilePicStyle" /> */}
                        <ProfileCarousel ImagePath1={Images.ProfilePicture} ImagePath2={Images.ProfilePicture2} />
                        <button className='ThemeSwitchBtn' onClick={()=>switchModes()} >
                            {Colors.isDarkMode ? 
                            <DarkMode color='dark' fontSize='large' style={{marginTop:10}} /> :
                            <LightMode color='light' fontSize='large' style={{marginTop:10}} />}
                        </button>
                    </div>
                    <div>
                        <p className='ProfileDetails' >Sahil Dattatray Lokhande</p>
                        <p className='ProfileDetails' >+91 9175098814</p>
                    </div>
                </div>
                <ul className="navListContainer">
                    <div style={{color:props.TabBar=='Home' ? 'orange' : Colors.newVar.TXTColor}}>
                        <Home className='HomeIcon' />
                        <li className="ListItem1" onClick={props.HomePressed} >Home</li><br />
                    </div>
                    <div style={{color:props.TabBar=='Intro' ? 'orange' : Colors.newVar.TXTColor}}>
                        <Person className='UserIcon' />
                        <li className="ListItem2" onClick={props.IntroPressed}>My Introduction</li><br />
                    </div>
                    <div style={{color:props.TabBar=='Services' ? 'orange' : Colors.newVar.TXTColor}}>
                        <DeveloperMode className='ServicesIcon' />
                        <li className="ListItem3" onClick={props.ServicesPressed}>Services</li><br />
                    </div>
                    <div style={{color:props.TabBar=='Extra' ? 'orange' : Colors.newVar.TXTColor}}>
                        <VolunteerActivism className='ExtraCurrIcon' />
                        <li className="ListItem5" onClick={props.ExtraCurrPressed}>Extra Curricular</li><br/>
                    </div>
                    <div style={{color:props.TabBar=='Contact' ? 'orange' : Colors.newVar.TXTColor}}>
                        <AlternateEmail className='ContactIcon' />
                        <li className="ListItem5" onClick={props.ContactPressed}>Contact</li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
