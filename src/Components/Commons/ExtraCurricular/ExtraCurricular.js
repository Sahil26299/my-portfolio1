import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { ColorSchema } from '../../../Utils/Context/ColorThemes';
import { Images } from '../../../Utils/Images';
import ShowcaseCarousel from '../ShowcaseCarousel';
import TabHeader from '../TabHeader';
import './ExtraCurricular.css'

const MesaImages = [Images.MesaImage1, Images.MesaImage2, Images.MesaImage3, Images.MesaImage4, Images.MesaImage5];
const NSSImages = [Images.NSSImage1, Images.NSSImage2,Images. NSSImage3, Images.NSSImage4, Images.NSSImage5, Images.NSSImage6, Images.NSSImage7, Images.NSSImage8, Images.NSSImage9]

export default function ExtraCurricular() {
  const Colors = useContext(ColorSchema);
  const showActivity = (Org, Descr, ImagesArr, carouselSpeed, Descr2) => {
    return (
      <div className='ActivityWrapper' >
        <span style={{ color: 'orange', }} className={'Title'} >{Org}</span><br />
        <span style={{ color: Colors.newVar.TXTColor, }} className={'Body'} >{Descr}</span><br />
       {Descr2!=undefined ? <span style={{ color: Colors.newVar.TXTColor, }} className={'Body'} >{Descr2}</span> : null}<br/>
        <div style={{ marginTop: '3%' }} >
          <ShowcaseCarousel Speed={carouselSpeed} CarouselWrapperStyle={'ExtraCurrCarouselWrapper'} ImageStyleName={'ExtraCurrCarouselImage'} ImageArray={ImagesArr} SlidesToShow={3} />
        </div>
      </div>
    )
  }
  return (
    <Box>
      <TabHeader Children={'Extra-Curricular'} />
      {showActivity('MESA', 'Represented myself as an active MESA(Mechanical Engineering Student Association) volunteer for the acedemic year 2018-19 and Treasurer for the acedemic year 2019-20, wherein we used to organize various technical and non-technical events as a team.', MesaImages, 30000)}
      {showActivity('NSS', `Represented myself as an active NSS(National Service Scheme) volunteer for the acedemic year 2018-19 and Technical head for the acedemic year 2019-20, wherein we used to organize various events, workshops and seminars based on social awareness and social affairs as a team.`, NSSImages, 35000, `And finally arranged a annual 7 day winter camp in a village Khamgaon, near Singahad, where we spread basic awareness regarding health, cleanliness, management and knowledge regarding science and history through some guest lectures, events, street plays, dramas, acts etc.`)}
    </Box>
  )
}
