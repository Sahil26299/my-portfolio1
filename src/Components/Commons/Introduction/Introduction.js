import React, { useContext } from 'react';
import './Introduction.css';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import { Images } from '../../../Utils/Images';
import LinearBufferProgress from '../LinearBufferProgress';
import TabHeader from '../TabHeader';

export default function Introduction(props) {

    const Colors = useContext(ColorSchema);
    const SkillProgressIndicator = (skill, prog, buff) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} className='SkillProgressContainer'  >
                <LinearBufferProgress Progress={prog} Buffer={buff} Skill={skill} />
            </div>
        )
    }

    return (
        <div className='wrapper-container' >
            <TabHeader Children={'My Profile'} />
            <div className="basic-intro-wrapper" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                <div className="basic-intro-text">
                    <span style={{ color: Colors.newVar.TXTColor }} className={'Intro-Text'} >Full Name : Sahil Dattatray Lokhande</span><br />
                    <span style={{ color: Colors.newVar.TXTColor }} className={'Intro-Text'} >Current Role : React Developer at Mobiloitte</span><br />
                    <span style={{ color: Colors.newVar.TXTColor }} className={'Intro-Text'} >Loaction : Pune, Maharashtra, India</span><br />
                    <span style={{ color: Colors.newVar.TXTColor }} className={'Intro-Text'} >Status : Looking forward for good career opportunities...</span><br />
                </div>
                {/* <div className='verticalLine' style={{ backgroundColor: Colors.isDarkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)' }} ></div> */}
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
                        <dt>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                <span>Mobiloitte | React Developer</span>
                                <span className='ListHeaderRight' >Pune, India | April 2022 – Present</span>
                            </div>
                        </dt><br />
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
                        </dd><br />
                        <dt>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <span>GRROOM | Machine Learning Intern</span>
                                <span className='ListHeaderRight' >Pune, India | May 2021 – June 2021</span>
                            </div>
                        </dt><br />
                        <dd>
                            <ul>
                                <li>
                                    Trained and tested an open-CV (Computer Vision) model that predicts the types of
                                    garments to show or recommend similar types to the user. Largely used in the fashion
                                    and ecommerce fields.
                                </li>
                                <a href="https://drive.google.com/file/d/1OgxNqlr9NQT3Tbfwrp-QF75siL4LFUck/view" target={'_blank'} className={'CertificateHyperLink'} ><i>Verify Credential</i></a>
                            </ul>
                        </dd>
                    </dl>
                </span>
            </div>
            <div className='IntroBodyWrapper' >
                <span style={{ color: 'orange', }} className={'Intro-Title'} >
                    Technical Skills
                </span><br />
                <div style={{ marginTop: 25 }} >
                    <div>
                        <dl style={{ color: Colors.newVar.TXTColor, border: Colors.isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)', borderRadius: 10, padding: 25, position: 'relative' }} className={'Intro-Text'} >
                            <dt className='TechnicalSkillDT' style={{ backgroundColor: Colors.newVar.BGColor, padding: 5 }} >Programming Languages</dt> <br />
                            <dd >
                                {SkillProgressIndicator('Javascript', 80, 90)} <br />
                                {SkillProgressIndicator('C', 65, 80)} <br />
                                {SkillProgressIndicator('Python', 70, 90)}
                            </dd>
                        </dl>
                    </div>

                    <div style={{ marginTop: 50 }} >
                        <dl style={{ color: Colors.newVar.TXTColor, border: Colors.isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)', borderRadius: 10, padding: 25, position: 'relative' }} className={'Intro-Text'} >
                            <dt className='TechnicalSkillDT1' style={{ backgroundColor: Colors.newVar.BGColor, padding: 5 }} >Front-End Technologies</dt> <br />
                            <dd >
                                {SkillProgressIndicator('HTML5', 80, 90)} <br />
                                {SkillProgressIndicator('CSS & Bootstrap', 65, 80)} <br />
                                {SkillProgressIndicator('React Js.', 50, 70)} <br />
                                {SkillProgressIndicator('React Native', 80, 90)} <br />
                                {SkillProgressIndicator('Redux', 40, 60)}
                            </dd>
                        </dl>
                    </div>

                    <div style={{ marginTop: 50 }} >
                        <dl style={{ color: Colors.newVar.TXTColor, border: Colors.isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)', borderRadius: 10, padding: 25, position: 'relative' }} className={'Intro-Text'} >
                            <dt className='TechnicalSkillDT' style={{ backgroundColor: Colors.newVar.BGColor, padding: 5 }} >Tools/ Platforms</dt> <br />
                            <dd >
                                {SkillProgressIndicator('Git/Github', 80, 90)} <br />
                                {SkillProgressIndicator('VSCode', 80, 90)} <br />
                                {SkillProgressIndicator('XCode', 30, 45)} <br />
                                {SkillProgressIndicator('Android Studios', 40, 50)}
                            </dd>
                        </dl>
                    </div>

                    <div style={{ marginTop: 50 }} >
                        <dl style={{ color: Colors.newVar.TXTColor, border: Colors.isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)', borderRadius: 10, padding: 25, position: 'relative' }} className={'Intro-Text'} >
                            <dt className='TechnicalSkillDT1' style={{ backgroundColor: Colors.newVar.BGColor, padding: 5 }} >Database</dt> <br />
                            <dd >
                                {SkillProgressIndicator('MySQL', 40, 50)}
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="IntroBodyWrapper">
                <span style={{ color: 'orange', }} className={'Intro-Title'} >
                    Education
                </span><br />
                <ul style={{ color: Colors.newVar.TXTColor }}>
                    <li>
                        <span className={'Intro-Text'}>
                            Completed my gradtuation in Mechanical Engineering from P. E. S. Modern college of Engineering, Pune with 6.5 CGPA (62%).
                        </span>
                    </li><br />
                    <li>
                        <span className={'Intro-Text'}>
                            Completed HSC in science from M. E. S. Boy's highschool, Pune with 64%.
                        </span>
                    </li><br />
                    <li>
                        <span className={'Intro-Text'}>
                            Completed SSC from Aranyeshwar English Medium school, Pune with 77%.
                        </span>
                    </li>
                </ul>
            </div>
            <div className="IntroBodyWrapper">
                <span style={{ color: 'orange', }} className={'Intro-Title'} >
                    Personal / Acedemic Projects
                </span><br />
                <ul style={{ color: Colors.newVar.TXTColor }}>
                    <li>
                        <span className={'Intro-Text'}>
                            Developed a UI of NFT Marketplace (ref. OpenSea) for native (android/iOS)
                            platform using react native.
                        </span>
                    </li><br />
                    <li>
                        <span className={'Intro-Text'}>
                            Developed a UI for uploading blogs, along with registration page, login page and
                            forgot password page with validations using javascript.
                        </span>
                    </li><br />
                    <li>
                        <span className={'Intro-Text'}>
                            Created Machine Learning model on "Prediction of calories burnt after the
                            exercise" and developed a UI for the same using python.
                            (June 2021 - Aug. 2021)
                        </span>
                    </li>
                </ul>
                <div className='CarouselWrapper' >
                    <video loop autoPlay muted className="carouselVideo" >
                        <source src={Images.CalorieTrackerShowcaseVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="IntroBodyWrapper">
                <span style={{ color: 'orange', }} className={'Intro-Title'} >
                    Certifications
                </span><br />
                <ul style={{ color: Colors.newVar.TXTColor }} className={'Intro-Text'} >
                    <li>
                        Machine Learning Engineer and AI Analyst (Org. Symbiosis Skills and Professional University, Pune)
                    </li>
                    <a href="https://drive.google.com/file/d/1mF7HQ9V1x6Fvb4MDy7WMkuigPyrww3Zj/view" target={'_blank'} className={'CertificateHyperLink'} ><i>Verify Credential</i></a><br /><br />
                    <li>
                        Introduction to TensorFlow for Artificial Intelligence, Machine Learning and Deep Learning (Org. Coursera)
                    </li>
                    <a href="https://www.coursera.org/account/accomplishments/verify/3UMSBR7HF5WE?utm_source=link" target={'_blank'} className={'CertificateHyperLink'} ><i>Verify Credential</i></a><br /><br />
                    <li>
                        Convolution Neural Networks in TensorFlow (Org. Coursera)
                    </li>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/X7FLSKU4GMS8" target={'_blank'} className={'CertificateHyperLink'} ><i>Verify Credential</i></a><br /><br />
                    <li>
                        Machine Learning (Org. Coursera) 
                    </li>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/W97UEVBPP7WV" target={'_blank'} className={'CertificateHyperLink'} ><i>Verify Credential</i></a><br /><br />
                </ul>
                
            </div>
        </div>
    )
}
