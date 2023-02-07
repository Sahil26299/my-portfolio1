import React, {useContext, useRef} from 'react'
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import './ContactDetails.css'
import TabHeader from '../TabHeader'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Call, Mail, LinkedIn, GitHub, SendRounded, AccountCircle, Message } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

export default function ContactDetails() {
    const Colors = useContext(ColorSchema);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <Box className='ContactWrapper' >
        <TabHeader Children={'Contact Details'} Animation={'ContactHeader'} />
        <Grid container spacing={4}>
            <Grid item lg={2} sm={12} sx={{color:Colors.newVar.TXTColor, display:'flex', alignItems:'center', justifyContent:'flex-end', }} >
                <a href="" className={'CallMeIcon'}>
                    <Call className='CallIcon'/>
                </a>
            </Grid>
            <Grid item lg={10} sm={12} >
                <span style={{color:Colors.newVar.TXTColor}} className={'CallMeText'} >+91 915098814</span>
            </Grid>
            <Grid item lg={2} sm={12} sx={{color:Colors.newVar.TXTColor, display:'flex', alignItems:'center', justifyContent:'flex-end', }} >
                <a href="mailto:sahillokhande94@gmail.com" className={'CallMeIcon'}>
                    <Mail className='MailIcon'/>
                </a>
            </Grid>
            <Grid item lg={10} sm={12} >
                <span style={{color:Colors.newVar.TXTColor}} className={'MailMeText'} >sahillokhande94@gmail.com</span>
            </Grid>
            <Grid item lg={2} sm={12} sx={{color:Colors.newVar.TXTColor, display:'flex', alignItems:'center', justifyContent:'flex-end', }} >
                <a href="https://www.linkedin.com/in/sahillokhande26" target={'_blank'} className={'CallMeIcon'}>
                    <LinkedIn className='MailIcon'/>
                </a>
            </Grid>
            <Grid item lg={10} sm={12} >
                <span style={{color:Colors.newVar.TXTColor}} className={'MailMeText'} >sahillokhande26</span>
            </Grid>
            <Grid item lg={2} sm={12} sx={{color:Colors.newVar.TXTColor, display:'flex', alignItems:'center', justifyContent:'flex-end', }} >
                <a href="https://github.com/Sahil26299" target={'_blank'} className={'CallMeIcon'}>
                    <GitHub className='MailIcon'/>
                </a>
            </Grid>
            <Grid item lg={10} sm={12} >
                <span style={{color:Colors.newVar.TXTColor}} className={'MailMeText'} >Github Link</span>
            </Grid>
        </Grid>
        <div style={{marginTop:'5%', paddingBottom:'5%', marginLeft:'10%'}} >
            <form action="" ref={form} onSubmit={sendEmail}>
                <label htmlFor="name" id='emailLabel' style={{color:Colors.newVar.TXTColor}} >Write a message:</label>
                <div id={'emailInputdiv'}>
                    <input type={'text'} id={'name'} style={{color:Colors.newVar.TXTColor}} maxLength={60} placeholder={'Your name'} />
                    <AccountCircle style={{color:Colors.newVar.TXTColor, fontSize:30}} />
                </div>
                <div id={'messageInputdiv'}>
                    <textarea id='message' placeholder='Write a message...' maxLength={500} style={{color:Colors.newVar.TXTColor}} rows={5} cols={5} />
                    <Message style={{color:Colors.newVar.TXTColor, fontSize:30}} />
                </div>
                <div id={'emailInputdiv'}>
                    <input type={'email'} id={'email'} style={{color:Colors.newVar.TXTColor}} maxLength={256} placeholder={'Your email'} />
                    <Mail style={{color:Colors.newVar.TXTColor, fontSize:30}} />
                </div>
                <button type="submit" style={{color:Colors.newVar.TXTColor, backgroundColor:'orange', borderColor:'transparent', padding:10, borderRadius:5, marginTop:'3%'}}>
                    <SendRounded id={'sendIcon'} />
                </button>
            </form>
        </div>
    </Box>
  )
}
