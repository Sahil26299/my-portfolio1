import { Box, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import { Images } from '../../../Utils/Images';
import ShowcaseCarousel from '../ShowcaseCarousel';
import TabHeader from '../TabHeader';
import './ExtraCurricular.css'
import BottomBar from '../BottomBar/BottomBar';

const MesaImages = [{ ImagePath: Images.MesaImage1, }, { ImagePath: Images.MesaImage2 }, { ImagePath: Images.MesaImage3, }, { ImagePath: Images.MesaImage4, }, { ImagePath: Images.MesaImage5 }];
const NSSImages = [{ ImagePath: Images.NSSImage1, }, { ImagePath: Images.NSSImage2, }, { ImagePath: Images.NSSImage3, }, { ImagePath: Images.NSSImage4, }, { ImagePath: Images.NSSImage5, }, { ImagePath: Images.NSSImage6, }, { ImagePath: Images.NSSImage7, }, { ImagePath: Images.NSSImage8, }, { ImagePath: Images.NSSImage9, }]
const MPulseImages = [{ ImagePath: Images.MPulseImage1, }, { ImagePath: Images.MPulseImage2, }, { ImagePath: Images.MPulseImage3, }, { ImagePath: Images.MPulseImage4, }, { ImagePath: Images.MPulseImage6, }, { ImagePath: Images.MPulseImage7, }, { ImagePath: Images.MPulseImage8, }, { ImagePath: Images.MPulseImage9, }, { ImagePath: Images.MPulseImage11, }, { ImagePath: Images.MPulseImage12, }]

export default function ExtraCurricular() {
  const Colors = useContext(ColorSchema);
  const showActivity = (Org, Descr, ImagesArr, carouselSpeed, Descr2) => {
    return (
      <div className='ActivityWrapper' id='Extra_ID' >
        <span style={{ color: 'orange', }} className={'Title'} >{Org}</span><br />
        <ul style={{ color: '#fff' }} >
          <li> <span style={{ color: Colors.newVar.TXTColor, }} className={'Body'} >{Descr}</span></li><br />
          {Descr2 != undefined ? <li><span style={{ color: Colors.newVar.TXTColor, }} className={'Body'} >{Descr2}</span></li> : null}<br />
        </ul>


        <Grid className='PhotosContainer' justifyContent={'center'} container spacing={2} >
          {ImagesArr.map((item) => {
            return (
              <Grid display={'flex'} alignItems={'center'} flexDirection={'column'} item md={4} lg={3} sm={6} xs={12} >
                <div style={{ height: 220, width: 275, overflow: 'hidden', position: 'relative' }} >
                  <img className='ImageCLass' src={item?.ImagePath} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
  return (
    <Box style={{ backgroundColor: Colors.newVar.BGColor, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
      <div className='ExtraCurricularHeader' >
        <p className='HeaderTextExtras' style={{ color: Colors.newVar.TXTColor }} >
          I spent a significant amount of my free time participating in co-curricular activities and pursuing my interests such as 
          college events, trekking, and traveling. Engaging in these activities has allowed me to explore my other passions, including 
          <span style={{color:'orange'}}> photography, photo editing, graphic designing,</span> and <span style={{color:'orange'}}>video editing</span>. Through these pursuits, I have developed new skills and 
          expanded my creative abilities, which have been invaluable to my personal and professional growth.
        </p>
        <img src={Images.ExtraCurricular} alt="" className='HeaderImageExtraas' />
      </div>
      {showActivity('MESA', 'Represented myself as an active MESA(Mechanical Engineering Student Association) volunteer for the acedemic year 2018-19 and Treasurer for the acedemic year 2019-20, wherein we used to organize various technical and non-technical events as a team.', MesaImages, 25000)}
      {showActivity('NSS', `Represented myself as an active NSS(National Service Scheme) volunteer for the acedemic year 2018-19 and Technical head for the acedemic year 2019-20, wherein we used to organize various events, workshops and seminars based on social awareness and social affairs as a team.`, NSSImages, 35000, `And finally arranged a annual 7 day winter camp in a village Khamgaon, near Singahad, where we spread basic awareness regarding health, cleanliness, management and knowledge regarding science and history through some guest lectures, events, street plays, dramas, acts etc.`)}
      {showActivity('MPulse', `Participated in an annual departmental event MPulse Mechnicax 2019 as a volunteer and MPulse Mechverse 2020 as a Technical Head wherein we used to organized technical and non-technical games and competitions and announced winners and runner-ups.`, MPulseImages, 45000, `Here as a Technical Lead, I was responsible for photo and video editing for marketing and advertising of the event.`)}
      <BottomBar />
    </Box>
  )
}
