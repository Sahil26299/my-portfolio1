import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import { Images } from '../../../Utils/Images';
import ShowcaseCarousel from '../ShowcaseCarousel';
import TabHeader from '../TabHeader';
import './ExtraCurricular.css'

const MesaImages = [Images.MesaImage1, Images.MesaImage2, Images.MesaImage3, Images.MesaImage4, Images.MesaImage5];
const NSSImages = [Images.NSSImage1, Images.NSSImage2,Images. NSSImage3, Images.NSSImage4, Images.NSSImage5, Images.NSSImage6, Images.NSSImage7, Images.NSSImage8, Images.NSSImage9]
const MPulseImages = [Images.MPulseImage1, Images.MPulseImage2,Images. MPulseImage3, Images.MPulseImage4, Images.MPulseImage14, Images.MPulseImage6, Images.MPulseImage7, Images.MPulseImage8, Images.MPulseImage9, Images.MPulseImage11, Images.MPulseImage12, Images.MPulseImage13]

export default function ExtraCurricular() {
  const Colors = useContext(ColorSchema);
  const showActivity = (Org, Descr, ImagesArr, carouselSpeed, Descr2) => {
    return (
      <div className='ActivityWrapper' id='Extra_ID' >
        <span style={{ color: 'orange', }} className={'Title'} >{Org}</span><br />
        <ul style={{color:'#fff'}} >
          <li> <span style={{ color: Colors.newVar.TXTColor, }} className={'Body'} >{Descr}</span></li><br />
          {Descr2!=undefined ? <li><span style={{ color: Colors.newVar.TXTColor, }} className={'Body'} >{Descr2}</span></li> : null}<br/>
        </ul>
       
       
        <div style={{}} >
          <ShowcaseCarousel Speed={carouselSpeed} CarouselWrapperStyle={'ExtraCurrCarouselWrapper'} ImageStyleName={'ExtraCurrCarouselImage'} VideoStyleName={'ExtraCurrCarouselVideo'} ImageArray={ImagesArr} SlidesToShow={3} />
        </div>
      </div>
    )
  }
  return (
    <Box>
      <TabHeader Animation={'HeaderExtraCurr'} Children={'Extra-Curricular'} />
      {showActivity('MESA', 'Represented myself as an active MESA(Mechanical Engineering Student Association) volunteer for the acedemic year 2018-19 and Treasurer for the acedemic year 2019-20, wherein we used to organize various technical and non-technical events as a team.', MesaImages, 25000)}
      {showActivity('NSS', `Represented myself as an active NSS(National Service Scheme) volunteer for the acedemic year 2018-19 and Technical head for the acedemic year 2019-20, wherein we used to organize various events, workshops and seminars based on social awareness and social affairs as a team.`, NSSImages, 35000, `And finally arranged a annual 7 day winter camp in a village Khamgaon, near Singahad, where we spread basic awareness regarding health, cleanliness, management and knowledge regarding science and history through some guest lectures, events, street plays, dramas, acts etc.`)}
      {showActivity('MPulse', `Participated in an annual departmental event MPulse Mechnicax 2019 as a volunteer and MPulse Mechverse 2020 as a Technical Head wherein we used to organized technical and non-technical games and competitions and announced winners and runner-ups.`, MPulseImages, 45000, `Here as a Technical Lead, I was responsible for photo and video editing for marketing and advertising of the event.`)}
    </Box>
  )
}
