import React, { useContext, useRef, useState, useEffect } from 'react'
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import './ContactDetails.css'
import TabHeader from '../TabHeader'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Call, Mail, LinkedIn, GitHub, SendRounded, AccountCircle, Message, Error } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import { Images } from '../../../Utils/Images';
import { ToastContainer, toast } from 'react-toastify';
import { Comment } from 'react-loader-spinner'
import BottomBar from '../BottomBar/BottomBar';

export default function ContactDetails() {
    const Colors = useContext(ColorSchema);
    const [message, setmessage] = useState('')
    const [messageError, setmessageError] = useState(null);
    const [Name, setName] = useState('')
    const [NameError, setNameError] = useState(null);
    const [Email, setEmail] = useState('')
    const [EmailError, setEmailError] = useState(null);
    const [showLoader, setshowLoader] = useState(false);

    const [screenDimensions, setScreenDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const SocialIconsRef = useRef();
    const [SocialIconsVisible, setSocialIconsVisible] = useState()
    const ContactFormRef = useRef();
    const [ContactFormVisible, setContactFormVisible] = useState()

    useEffect(() => {
        function handleResize() {
            setScreenDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let SocialIconsObserver = new IntersectionObserver((entries) => {
            setSocialIconsVisible(entries[0].isIntersecting)
        });
        SocialIconsObserver.observe(SocialIconsRef.current)

        let ContactFormObserver = new IntersectionObserver((entries) => {
            setContactFormVisible(entries[0].isIntersecting)
        });
        ContactFormObserver.observe(ContactFormRef.current)
    }, [])
    

    const ValidateMessage = (msg) => {
        if (msg) {
            setmessageError(null);
            return true
        }
        else {
            setmessageError('Required !!');
            return false;
        }
    }

    const ValidateName = (name) => {
        if (name) {
            setNameError(null);
            return true
        }
        else {
            setNameError('Required !!');
            return false;
        }
    }

    const notifySuccess = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyWarn = (msg) => {
        toast.warn(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    const notifyError = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    const ValidateEmail = (email) => {
        const re = /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
        if (email) {
            if (re.test(email)) {
                setEmailError(null);
                return true
            }
            else {
                setEmailError('Required !!');
                return false
            }
        }
        else {
            setEmailError('Required !!');
            return false;
        }
    }

    const OnSendClick = (e) => {
        // prevent default; prevents page reload or a redirect to a different page.
        // Browser by default does this while form submission to submit the form data. 
        e.preventDefault();
        if (ValidateEmail(Email) && ValidateName(Name) && ValidateMessage(message)) {
            sendEmail()
        }
        else {
            ValidateName(Name)
            ValidateMessage(message)
        }
    }

    const form = useRef();
    const sendEmail = () => {
        setshowLoader(true)
        console.log(form.current, 'form.current');
        emailjs.sendForm('service_4urekv8', 'template_ddfster', form.current, '5-sdyRHTAl5GyQuEb')
            .then((result) => {
                setshowLoader(false)
                if (result.status == 200) {
                    setEmail('')
                    setName('')
                    setmessage('')

                    notifySuccess('Email sent successfully!');
                }
                else {
                    notifyWarn(result.text)
                }
            }, (error) => {
                setshowLoader(false)
                console.log(error.text, 'email not send');
                notifyError(error.text)
            });
    };

    return (
        <div id='Contact_ID' style={{ backgroundColor: Colors.newVar.BGColor }} >
            <Box className='ContactWrapper'  >
                <Grid className='ContactDetailsAndForm' container spacing={2} alignItems={'center'} direction={screenDimensions.width < 600 ? 'column' : 'row'} >
                    <Grid display={'flex'} sx={{ width: '45%' }} alignItems={'center'} flexDirection={'column'} item lg={6} md={6} sm={6} xs={12}>
                        <div ref={SocialIconsRef} className={`ContactDetails ${SocialIconsVisible ? "FadeYAnimationContact" : ""}`} >
                            <div className='CommonClass' >
                                <a href="" className={ Colors.isDarkMode ? 'CallMeIcon' : "CallMeIconLight"}>
                                    <Call className='CallIcon' style={{ fontSize: (screenDimensions.width < 1000 && screenDimensions.width > 600) && 20 }} />
                                </a>
                                <span style={{ color: Colors.newVar.TXTColor, marginLeft: 20 }} className={'MailMeText'} >+91 915098814</span>
                            </div>
                            <div className='CommonClass' >
                                <a href="mailto:sahillokhande94@gmail.com" className={Colors.isDarkMode? 'CallMeIcon' : "CallMeIconLight"}>
                                    <Mail className='MailIcon' style={{ fontSize: (screenDimensions.width < 1000 && screenDimensions.width > 600) && 20 }} />
                                </a>
                                <span style={{ color: Colors.newVar.TXTColor, marginLeft: 20 }} className={'MailMeText'} >sahillokhande94@gmail.com</span>
                            </div>
                            <div className='CommonClass' >
                                <a href="https://www.linkedin.com/in/sahillokhande26" target={'_blank'} className={ Colors.isDarkMode ? 'CallMeIcon' : "CallMeIconLight"}>
                                    <LinkedIn className='MailIcon' style={{ fontSize: (screenDimensions.width < 1000 && screenDimensions.width > 600) && 20 }} />
                                </a>
                                <span style={{ color: Colors.newVar.TXTColor, marginLeft: 20 }} className={'MailMeText'} >sahillokhande26</span>
                            </div>
                            <div className='CommonClass' >
                                <a href="https://github.com/Sahil26299" target={'_blank'} className={ Colors.isDarkMode ? 'CallMeIcon' : "CallMeIconLight"}>
                                    <GitHub className='MailIcon' style={{ fontSize: (screenDimensions.width < 1000 && screenDimensions.width > 600) && 20 }} />
                                </a>
                                <span style={{ color: Colors.newVar.TXTColor, marginLeft: 20 }} className={'MailMeText'} >Github Link</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid display={'flex'} sx={{ width: '45%' }} alignItems={'center'} flexDirection={'column'} item lg={6} md={6} sm={6} xs={12} >
                        <div ref={ContactFormRef} className={`ContactForm ${ContactFormVisible ? "FadeYAnimationContact" : ""}`} style={{ marginTop: screenDimensions.width < 600 ? '20%' : '5%', paddingBottom: '5%', marginLeft: '10%', marginBottom: screenDimensions.width < 600 && '20%' }} >
                            <form action="" ref={form} onSubmit={OnSendClick}>
                                <label htmlFor="name" id='emailLabel' style={{ color: '#1d1d1d', fontWeight:'500' }} >Write a message:</label>
                                <div id={'emailInputdiv'} style={{ borderBottomColor: NameError != null ? 'red' : 'orange' }}>
                                    <input type={'text'} value={Name} id={'name'} name={'from_name'} style={{ color: '#1d1d1d' }} maxLength={60} placeholder={'Your name'} onChange={(text) => {
                                        ValidateName(text.target.value)
                                        setName(text.target.value)
                                    }} />
                                    <AccountCircle style={{ color: NameError != null ? 'red' : '#1d1d1d', fontSize: screenDimensions.width < 1000 ? 25 : 30 }} />
                                </div>
                                <div id={'messageInputdiv'} style={{ borderBottomColor: messageError != null ? 'red' : 'orange' }} >
                                    <textarea value={message} id='message' name='message' placeholder='Write a message...' maxLength={500} style={{ color: '#1d1d1d', resize:'none' }} rows={screenDimensions.width < 1000 ? 3 : 5} cols={6} onChange={(text) => {
                                        ValidateMessage(text.target.value);
                                        setmessage(text.target.value)
                                    }} />
                                    <Message style={{ color: messageError != null ? 'red' : '#1d1d1d', fontSize: screenDimensions.width < 1000 ? 25 : 30 }} />
                                </div>
                                <div id={'emailInputdiv'} style={{ borderBottomColor: EmailError != null ? 'red' : 'orange' }}>
                                    <input type={'email'} value={Email} id={'email'} name={'reply_to'} style={{ color: '#1d1d1d' }} maxLength={256} placeholder={'Your email'} onChange={(text) => {
                                        setEmail(text.target.value)
                                        // ValidateEmail(text.target.value)
                                    }} onBlur={() => {
                                        ValidateEmail(Email)
                                    }} />
                                    {EmailError != null ?
                                        <Error style={{ color: 'red', fontSize: 30 }} className={'EmailErrorIcon animate__animated animate__shakeX animate__fast'} /> :
                                        <Mail style={{ color: '#1d1d1d', fontSize: screenDimensions.width < 1000 ? 25 : 30 }} />}
                                </div>
                                {showLoader ?
                                    <Comment
                                        visible={true}
                                        height={screenDimensions.width < 1000 ? "50" : "70"}
                                        width={screenDimensions.width < 1000 ? "50" : "70"}
                                        ariaLabel="comment-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="comment-wrapper"
                                        color="#fff"
                                        backgroundColor="orange"
                                    /> :
                                    <button type="submit" style={{ color: Colors.newVar.TXTColor, backgroundColor: 'orange', borderColor: 'transparent', padding: 7, borderRadius: 5, marginTop: '3%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                        <SendRounded id={'sendIcon'} style={{ fontSize: screenDimensions.width < 1000 ? 25 : 30 }} />
                                    </button>}
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: 100 }} >
                    <img src={Images.SmileyEmoji} className='SmileyEndImage' />
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Box>
            <BottomBar />
        </div>
    )
}
