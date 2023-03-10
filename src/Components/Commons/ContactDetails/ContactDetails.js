import React, { useContext, useRef, useState } from 'react'
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

export default function ContactDetails() {
    const Colors = useContext(ColorSchema);
    const [message, setmessage] = useState('')
    const [messageError, setmessageError] = useState(null);
    const [Name, setName] = useState('')
    const [NameError, setNameError] = useState(null);
    const [Email, setEmail] = useState('')
    const [EmailError, setEmailError] = useState(null);
    const [showLoader, setshowLoader] = useState(false);

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
        e.preventDefault();
        if(ValidateEmail(Email) && ValidateName(Name) && ValidateMessage(message)){
            sendEmail(e)
        }
        else{
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
                console.log(result, 'email sent');
                if (result.status == 200) {
                    notifySuccess('Email sent successfully!')
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
                <TabHeader Children={'Contact Details'} Animation={'ContactHeader'} />
                <Grid container spacing={4}>
                    <Grid item lg={6} sm={12}>
                        <div className='CommonClass' >
                            <a href="" className={'CallMeIcon'}>
                                <Call className='CallIcon' />
                            </a>
                            <span style={{ color: Colors.newVar.TXTColor, marginLeft: 20 }} className={'CallMeText'} >+91 915098814</span>
                        </div>
                        <div className='CommonClass' >
                            <a href="mailto:sahillokhande94@gmail.com" className={'CallMeIcon'}>
                                <Mail className='MailIcon' />
                            </a>
                            <span style={{ color: Colors.newVar.TXTColor, marginLeft: 20 }} className={'MailMeText'} >sahillokhande94@gmail.com</span>
                        </div>
                        <div className='CommonClass' >
                            <a href="https://www.linkedin.com/in/sahillokhande26" target={'_blank'} className={'CallMeIcon'}>
                                <LinkedIn className='MailIcon' />
                            </a>
                            <span style={{ color: Colors.newVar.TXTColor, marginLeft: 20 }} className={'MailMeText'} >sahillokhande26</span>
                        </div>
                        <div className='CommonClass' >
                            <a href="https://github.com/Sahil26299" target={'_blank'} className={'CallMeIcon'}>
                                <GitHub className='MailIcon' />
                            </a>
                            <span style={{ color: Colors.newVar.TXTColor, marginLeft: 20 }} className={'MailMeText'} >Github Link</span>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={12} >
                        <div style={{ marginTop: '5%', paddingBottom: '5%', marginLeft: '10%' }} >
                            <form action="" ref={form} onSubmit={OnSendClick}>
                                <label htmlFor="name" id='emailLabel' style={{ color: Colors.newVar.TXTColor }} >Write a message:</label>
                                <div id={'emailInputdiv'} style={{ borderBottomColor: NameError != null ? 'red' : 'orange' }}>
                                    <input type={'text'} id={'name'} name={'from_name'} style={{ color: Colors.newVar.TXTColor }} maxLength={60} placeholder={'Your name'} onChange={(text) => {
                                        ValidateName(text.target.value)
                                        setName(text.target.value)
                                    }} />
                                    <AccountCircle style={{ color: NameError != null ? 'red' : Colors.newVar.TXTColor, fontSize: 30 }} />
                                </div>
                                <div id={'messageInputdiv'} style={{ borderBottomColor: messageError != null ? 'red' : 'orange' }} >
                                    <textarea id='message' name='message' placeholder='Write a message...' maxLength={500} style={{ color: Colors.newVar.TXTColor }} rows={5} cols={6} onChange={(text) => {
                                        ValidateMessage(text.target.value);
                                        setmessage(text.target.value)
                                    }} />
                                    <Message style={{ color: messageError != null ? 'red' : Colors.newVar.TXTColor, fontSize: 30 }} />
                                </div>
                                <div id={'emailInputdiv'} style={{ borderBottomColor: EmailError != null ? 'red' : 'orange' }}>
                                    <input type={'email'} id={'email'} name={'reply_to'} style={{ color: Colors.newVar.TXTColor }} maxLength={256} placeholder={'Your email'} onChange={(text) => {
                                        setEmail(text.target.value)
                                        // ValidateEmail(text.target.value)
                                    }} onBlur={() => {
                                        ValidateEmail(Email)
                                    }} />
                                    {EmailError != null ?
                                        <Error style={{ color: 'red', fontSize: 30 }} className={'EmailErrorIcon animate__animated animate__shakeX animate__fast'} /> :
                                        <Mail style={{ color: Colors.newVar.TXTColor, fontSize: 30 }} />}
                                </div>
                                {showLoader ?
                                    <Comment
                                        visible={true}
                                        height="70"
                                        width="70"
                                        ariaLabel="comment-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="comment-wrapper"
                                        color="#fff"
                                        backgroundColor="orange"
                                    /> :
                                    <button type="submit" style={{ color: Colors.newVar.TXTColor, backgroundColor: 'orange', borderColor: 'transparent', padding: 10, borderRadius: 5, marginTop: '3%' }} >
                                        <SendRounded id={'sendIcon'} />
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
                {/* Same as */}
                <ToastContainer />
            </Box>
        </div>
    )
}
