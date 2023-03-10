import React, { useState, useContext, useEffect } from 'react'
import { colors } from '../../Utils/Themes'
import { LightMode, DarkMode, Menu } from '@mui/icons-material';
import { ColorSchema } from '../../Utils/Context/ColorThemes';
import { Home, Person, DeveloperMode, VolunteerActivism, AlternateEmail } from '@mui/icons-material';
import ProfileCarousel from '../Commons/ProfileCarousel';
import { Images } from '../../Utils/Images';
import { Sidebar, useProSidebar } from 'react-pro-sidebar';
import { TAB_NAMES } from '../../Utils/Constants';

export default function SideNav(props) {
    const Colors = useContext(ColorSchema);
    const [menuCollapse, setMenuCollapse] = useState(false);
    const { collapseSidebar, collapsed } = useProSidebar();

    const switchModes = () => {
        Colors.setisDarkMode(!Colors.isDarkMode)
    }

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
          console.log(window.innerWidth,'window.innerWidth')
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
    
    


    return (
        <div className='StickyWrapper' >
           {windowSize[0]>1000 ? 
           <nav className="sideNav" style={{ backgroundColor: Colors.newVar.BGColor }}>
                {/* <div className='ProfileContainer' >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
                        <ProfileCarousel ImagePath1={Images.ProfilePicture} ImagePath2={Images.ProfilePicture2} />
                        </div>
                        <div>
                        <p className='ProfileDetails' >Sahil Dattatray Lokhande</p>
                        <p className='ProfileDetails' >+91 9175098814</p>
                        </div>
                    </div> */}
                <ul className="navListContainer">
                        <div style={{ color: props.TabBar == 'Home' ? 'orange' : Colors.newVar.TXTColor }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.HomePressed} >
                                <Home className='HomeIcon' fontSize={'medium'} />
                                <p className="ListItem1" >{TAB_NAMES[0]}</p><br />
                            </li>
                        </div>
                        <div style={{ color: props.TabBar == 'Profile' ? 'orange' : Colors.newVar.TXTColor }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.ProfilePressed} >
                                <Person className='UserIcon' fontSize={'medium'} />
                                <p className="ListItem2" >{TAB_NAMES[1]}</p><br />
                            </li>
                        </div>
                        <div style={{ color: props.TabBar == 'Services' ? 'orange' : Colors.newVar.TXTColor }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.ServicesPressed} >
                                <DeveloperMode className='ServicesIcon' fontSize={'medium'} />
                                <p className="ListItem3" >{TAB_NAMES[2]}</p><br />
                            </li>
                        </div>
                        <div style={{ color: props.TabBar == 'Extra' ? 'orange' : Colors.newVar.TXTColor }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.ExtraCurrPressed} >
                                <VolunteerActivism className='ExtraCurrIcon' fontSize={'medium'} />
                                <p className="ListItem5" >{TAB_NAMES[3]}</p><br />
                            </li>
                        </div>
                        <div style={{ color: props.TabBar == 'Contact' ? 'orange' : Colors.newVar.TXTColor }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.ContactPressed} >
                                <AlternateEmail className='ContactIcon' fontSize={'medium'} />
                                <p className="ListItem5" >{TAB_NAMES[4]}</p>
                            </li>
                        </div>
                    </ul>
                    {/* <button className='ThemeSwitchBtn' onClick={() => switchModes()} >
                        {Colors.isDarkMode ?
                            <DarkMode color='dark' fontSize='large' style={{ marginTop: 10 }} /> :
                            <LightMode color='light' fontSize='large' style={{ marginTop: 10 }} />}
                    </button> */}
            </nav> :
            <Sidebar backgroundColor={Colors.newVar.BGColor} defaultCollapsed={true} rootStyles={{ borderWidth: 0, flex: 1, display: 'flex', alignItems: 'center' }} >
                <div className={!collapsed && "sideNav"}>
                    <div className='ProfileContainer' style={{}} >
                        {collapsed ?
                            <div>
                                <div className='CollapseSideBarDiv' >
                                    <button className='ShowHideNavbar' onClick={() => collapseSidebar()} style={{ backgroundColor: 'transparent' }} >
                                        <Menu color={Colors.newVar.TXTColor} fontSize='large' style={{ marginTop: 5 }} />
                                    </button>
                                </div>
                                <div className='CollapseSideBarDiv' >
                                    <button className='ThemeSwitchBtn' onClick={() => switchModes()} >
                                        {Colors.isDarkMode ?
                                            <DarkMode color='dark' fontSize='large' style={{ marginTop: 10 }} /> :
                                            <LightMode color='light' fontSize='large' style={{ marginTop: 10 }} />}
                                    </button>
                                </div>
                            </div>
                            :
                            <div>
                                <div className='CollapseSideBarDiv' >
                                    <button className='ShowHideNavbar' onClick={() => collapseSidebar()} style={{ backgroundColor: 'transparent' }} >
                                        <Menu color={Colors.newVar.TXTColor} fontSize='medium' style={{ marginTop: 5 }} />
                                    </button>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
                                    <ProfileCarousel ImagePath1={Images.ProfilePicture} ImagePath2={Images.ProfilePicture2} />
                                    <button className='ThemeSwitchBtn' onClick={() => switchModes()} >
                                        {Colors.isDarkMode ?
                                            <DarkMode color='dark' fontSize='large' style={{ marginTop: 10 }} /> :
                                            <LightMode color='light' fontSize='large' style={{ marginTop: 10 }} />}
                                    </button>
                                </div>
                                <div>
                                    <p className='ProfileDetails' >Sahil Dattatray Lokhande</p>
                                    <p className='ProfileDetails' >+91 9175098814</p>
                                </div>
                            </div>
                        }
                        {/* <div style={{ position:'absolute', bottom:-20, left:'30%' }} className={'CollapseSideBarDiv'} >
                            <button className='ShowHideNavbar' onClick={() => collapseSidebar()} style={{backgroundColor:Colors.newVar.TXTColor, height:40, width:40, display:'flex', alignItems:'center', justifyContent:'center'}} >
                            {collapsed ? 
                            <ChevronRight color={Colors.newVar.BGColor} fontSize='large' /> :
                                <ChevronLeft color={Colors.newVar.BGColor} fontSize='large' />}
                            </button>
                        </div> */}
                    </div>
                    <ul className="navListContainer">
                        <div style={{ color: props.TabBar == 'Home' ? 'orange' : Colors.newVar.TXTColor, paddingTop:collapsed && 25 }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.HomePressed} >
                                <Home className='HomeIcon' fontSize={collapsed ? 'large' : 'medium'} />
                                {!collapsed && <p className="ListItem1" >Home</p>}<br />
                            </li>
                        </div>
                        <div style={{ color: props.TabBar == 'Profile' ? 'orange' : Colors.newVar.TXTColor, paddingTop:collapsed && 25 }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.ProfilePressed} >
                                <Person className='UserIcon' fontSize={collapsed ? 'large' : 'medium'} />
                                {!collapsed && <p className="ListItem2" >My Profile</p>}<br />
                            </li>
                        </div>
                        <div style={{ color: props.TabBar == 'Services' ? 'orange' : Colors.newVar.TXTColor, paddingTop:collapsed && 25 }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.ServicesPressed} >
                                <DeveloperMode className='ServicesIcon' fontSize={collapsed ? 'large' : 'medium'} />
                                {!collapsed && <p className="ListItem3" >Services</p>}<br />
                            </li>
                        </div>
                        <div style={{ color: props.TabBar == 'Extra' ? 'orange' : Colors.newVar.TXTColor, paddingTop:collapsed && 25 }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.ExtraCurrPressed} >
                                <VolunteerActivism className='ExtraCurrIcon' fontSize={collapsed ? 'large' : 'medium'} />
                                {!collapsed && <p className="ListItem5" >Extra Curricular</p>}<br />
                            </li>
                        </div>
                        <div style={{ color: props.TabBar == 'Contact' ? 'orange' : Colors.newVar.TXTColor, paddingTop:collapsed && 25 }}>
                            <li style={{paddingBottom:collapsed && 5}} onClick={props.ContactPressed} >
                                <AlternateEmail className='ContactIcon' fontSize={collapsed ? 'large' : 'medium'} />
                                {!collapsed && <p className="ListItem5" >Contact</p>}
                            </li>
                        </div>
                    </ul>
                </div>
            </Sidebar>}
        </div>
    )
}
