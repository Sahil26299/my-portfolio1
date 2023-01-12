import React, { useContext } from 'react';
import './Introduction.css';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import { Images } from '../../../Utils/Images';

export default function Introduction() {
    const Colors = useContext(ColorSchema);
    return (
        <div className='wrapper-container' >
            <div className="basic-intro-wrapper" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                <div className="basic-intro-text">
                    <span style={{ color: Colors.newVar.TXTColor }} className={'Intro-Text'} >Full Name : Sahil Dattatray Lokhande</span><br />
                    <span style={{ color: Colors.newVar.TXTColor }} className={'Intro-Text'} >Current Role : React Developer at Mobiloitte</span><br />
                    <span style={{ color: Colors.newVar.TXTColor }} className={'Intro-Text'} >Loaction : Pune, Maharashtra, India</span><br />
                    <span style={{ color: Colors.newVar.TXTColor }} className={'Intro-Text'} >Status : Looking forward for good career opportunities...</span><br />
                </div>
                <div className='verticalLine' style={{ backgroundColor: Colors.isDarkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)' }} ></div>
                <div>
                    <img src={Images.ProfilePicture} className='ProfileMyImage' />
                </div>
            </div>
            <div className='IntroBodyWrapper' >
                <span style={{ color: 'orange', }} className={'Intro-Title'} >
                    About
                </span><br />
                <span style={{ color: Colors.newVar.TXTColor, marginTop: 15 }} className={'Intro-Text'}>
                    Mechanical Engineer
                    & React Developer, seeking for entry level opportunities to assimilate my skills to help the company grow.
                    Experienced React developer with strong grip on React Native, proficient in programming including good grasp in
                    data structure and algorithms and worked on database as well. Experience in team work and project management,
                    having led various college events and projects to completion.
                </span>
            </div>
            <div className='IntroBodyWrapper' >
                <span style={{ color: 'orange', }} className={'Intro-Title'} >
                    Experience
                </span><br />
                <span style={{ color: Colors.newVar.TXTColor, marginTop: 15 }} className={'Intro-Text'}>
                    <dl>
                        <dt>Mobiloitte | React Developer</dt><br />
                        <dd>
                            <ul>
                                <li>
                                    Revamped the entire code of social media and crypto exchange combined application
                                    from changing its theme in UI development till adding new features by API integration,
                                    in react native.
                                </li><br />
                                <li>
                                    Successfuly completed development of native android and ios crypto exchange application based on
                                    blockchain technology for buying, selling, staking and exchanging/swapping
                                    cryptocurrencies using React native and also connected it to backend using API
                                    integration.
                                </li><br />
                                <li>
                                    Revamped a code of social platform for launching NFTs including payment gateway
                                    and connected it to backend using APIs in React native.
                                </li>
                            </ul>
                        </dd>
                        <dt>Milk</dt>
                        <dd>- white cold drink</dd>
                    </dl>
                </span>
            </div>
        </div>
    )
}
