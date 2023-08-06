import React, { useContext, useState, useEffect, useRef } from "react";
import { Images } from "../../../Utils/Images";
import "./Home.scss";
import Button from "../Button";
import { ColorSchema } from "../../../Utils/Context/ColorThemes";
import Cards from "../Cards";
import ShowcaseCarousel from "../ShowcaseCarousel";
import { Grid } from "@mui/material";
import {
  FIRST_NAME,
  INTRODUCTION_LINE,
  LAST_NAME,
} from "../../../Utils/Constants";
import { useTypewriter } from "react-simple-typewriter";
import { Call, Mail, LinkedIn, GitHub } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import BottomBar from "../BottomBar/BottomBar";
import resumePDF from "../../../Assets/DownloadFiles/SahilLokhande_CV.pdf";
import { useNavigate } from "react-router-dom";
import { loadBlurrImage } from "../../../Utils/helper/Helper";
import { LazyImage } from "../../../Utils/helper/lazyBackgroundLoader";
// import BackgroundImage from '../../../Assets/Images/BackgroundImage.jpg';
// import BackgroundImage from '../../../Assets/Images/BackgroundImageLoading.jpg';
const ImagesArray = [
  Images.TaralShowcase4,
  // Images.TaralShowcase5,
  Images.TaralShowcase8,
  Images.TaralShowcase9,
  Images.TaralShowcase11,
  Images.TaralShowcase12,
  Images.TaralShowcase14,
  // Images.TaralShowcase15,
  Images.sNProjectSnapshot1,
  Images.sNProjectSnapshot2,
  Images.sNProjectSnapshot3,
  Images.sNProjectSnapshot4,
  Images.sNProjectSnapshot5,
  Images.sNProjectSnapshot6,
  Images.findLocationProjectSnapshot1,
  Images.findLocationProjectSnapshot2,
  Images.findLocationProjectSnapshot3,
  Images.findLocationProjectSnapshot4,
  // Images.findLocationProjectSnapshot5,
  Images.findLocationProjectSnapshot6,
  Images.findLocationProjectSnapshot7,
  Images.findLocationProjectSnapshot8,
  Images.findLocationProjectSnapshot9,
];
export default function Home(props) {
  const navigate = useNavigate();
  const Card1Ref = useRef();
  const Card2Ref = useRef();
  const Card3Ref = useRef();
  const MyDescriptionRef = useRef();
  const SocialLinksRef = useRef();
  const ProfileImageRef = useRef();

  const Colors = useContext(ColorSchema);
  const [isCard1Visible, setisCard1Visible] = useState(false);
  const [isCard2Visible, setisCard2Visible] = useState(false);
  const [isCard3Visible, setisCard3Visible] = useState(false);
  const [DescriptionVisible, setDescriptionVisible] = useState(false);
  const [SocialLinksVisible, setSocialLinksVisible] = useState(false);
  const [ProfileImageVisible, setProfileImageVisible] = useState(false);

  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Front-End Developer",
      "React Js.",
      "React Native",
      "Redux",
    ],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const [screenDimensions, setScreenDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let DescriptionObserver = new IntersectionObserver((entries) => {
      setTimeout(() => {
        setDescriptionVisible(true);
      }, 500);
    });

    if (!DescriptionVisible) {
      DescriptionObserver.observe(MyDescriptionRef.current);
    }

    let ProfileImageObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setProfileImageVisible(true);
        }, 500);
      }
    });
    if (!ProfileImageVisible) {
      ProfileImageObserver.observe(ProfileImageRef.current);
    }

    let SocialLinksObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setSocialLinksVisible(true);
        }, 1500);
      }
    });
    if (!SocialLinksVisible) {
      SocialLinksObserver.observe(SocialLinksRef.current);
    }

    let Card1Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setisCard1Visible(true);
        }, 500);
      }
    });
    if (!isCard1Visible) {
      Card1Observer.observe(Card1Ref.current);
    }

    let Card2Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setisCard2Visible(true);
        }, 500);
      }
    });
    if (!isCard2Visible) {
      Card2Observer.observe(Card2Ref.current);
    }

    let Card3Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setisCard3Visible(true);
        }, 500);
      }
    });
    if (!isCard3Visible) {
      Card3Observer.observe(Card3Ref.current);
    }
  }, []);

  useEffect(() => {
    loadBlurrImage(".ProfilePictBackground", "loadedProfileImage");
  }, [ProfileImageVisible]);

  const OpenFile = () => {
    window.open(resumePDF);
  };

  return (
    <div
      className="WrapperHome"
      id="Home_ID"
      style={{ backgroundColor: Colors.newVar.BGColor }}
    >
      <LazyImage
        src={Images.BackgroundImage}
        placeholder={Images.BackgroundImageLoading}
        enableGradient={true}
        className="CoverPhoto"
      >
        <div
          ref={ProfileImageRef}
          className={`ProfilePictBackground ${
            ProfileImageVisible ? "fadeYIn" : ""
          }`}
          style={{ backgroundImage: `url(${Images.ProfilePictureLoading})` }}
        >
          <img src={Images.ProfilePicture} className={`ProfilePict`} />
        </div>
      </LazyImage>
      <div
        ref={SocialLinksRef}
        className={`SocialLinks ${SocialLinksVisible ? "FadeYAnimation" : ""}`}
        style={{
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          justifyContent: "flex-end",
          marginRight: screenDimensions.width < 450 ? "2%" : "5%",
          marginTop: screenDimensions.width < 450 ? "2%" : "1%",
        }}
      >
        <Tooltip title={"9175098814"}>
          <a
            href={`tel:9175098814`}
            className={Colors.isDarkMode ? "socialIcons" : "SocialIconsDark"}
          >
            <Call
              className="CallIcon"
              style={{
                fontSize:
                  screenDimensions.width < 450
                    ? 18
                    : screenDimensions.width < 650
                    ? 25
                    : 30,
              }}
            />
          </a>
        </Tooltip>
        <Tooltip title={"sahillokhande94@gmail.com"}>
          <a
            href="mailto:sahillokhande94@gmail.com"
            className={Colors.isDarkMode ? "socialIcons" : "SocialIconsDark"}
          >
            <Mail
              className="MailIcon"
              style={{
                fontSize:
                  screenDimensions.width < 450
                    ? 18
                    : screenDimensions.width < 650
                    ? 25
                    : 30,
              }}
            />
          </a>
        </Tooltip>
        <Tooltip title={"Connect me on LinkedIn"}>
          <a
            href="https://www.linkedin.com/in/sahillokhande26"
            target={"_blank"}
            className={Colors.isDarkMode ? "socialIcons" : "SocialIconsDark"}
          >
            <LinkedIn
              className="MailIcon"
              style={{
                fontSize:
                  screenDimensions.width < 450
                    ? 18
                    : screenDimensions.width < 650
                    ? 25
                    : 30,
              }}
            />
          </a>
        </Tooltip>
        <Tooltip title={"Github Profile"}>
          <a
            href="https://github.com/Sahil26299"
            target={"_blank"}
            className={Colors.isDarkMode ? "socialIcons" : "SocialIconsDark"}
          >
            <GitHub
              className="MailIcon"
              style={{
                fontSize:
                  screenDimensions.width < 450
                    ? 18
                    : screenDimensions.width < 650
                    ? 25
                    : 30,
              }}
            />
          </a>
        </Tooltip>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginTop: screenDimensions.width > 650 ? "2%" : "3%",
          marginLeft: "5%",
        }}
      >
        <div className={`IntroWrapper`}>
          <div
            ref={MyDescriptionRef}
            className={`MyDescription ${
              DescriptionVisible ? "FadeYAnimation" : ""
            }`}
          >
            <div className="heading1">
              <span style={{ color: Colors.newVar.TXTColor }}>
                {INTRODUCTION_LINE}
              </span>
            </div>
            <div
              className="heading1"
              style={{ marginTop: screenDimensions.width > 650 ? 20 : 15 }}
            >
              <span style={{ color: Colors.newVar.TXTColor }}>
                I am
                <span
                  style={{ color: Colors.newVar.HighlightColor }}
                  id={"FullNameHome"}
                >
                  {FIRST_NAME} {LAST_NAME}
                </span>
              </span>
            </div>
            <div style={{ display: "inline-block" }}>
              <p
                className="typewriter"
                style={{ color: Colors.newVar.HighlightColor }}
              >
                {text}
                <span
                  className="Cursor"
                  style={{ color: Colors.newVar.HighlightColor }}
                >
                  |
                </span>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: screenDimensions.width < 300 ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Button
              BtnStyle={{
                height: screenDimensions.width > 650 ? 50 : 45,
                width:
                  screenDimensions.width < 300
                    ? 150
                    : screenDimensions.width > 650
                    ? 140
                    : 120,
                marginTop: 20,
                marginRight: screenDimensions.width > 300 && 15,
              }}
              BtnContent={"Contact Me"}
              Path={"/contact"}
              BtnTxtStyle={{
                fontSize: screenDimensions.width > 650 ? 16 : 14,
                textShadow: "0px 0px 5px rgba(0,0,0,0.25)",
              }}
              onClick={props.ContactMeClicked}
            />
            {/* <a href={resumePDF} download={'SahilLokhande_CV.pdf'} className={'ResumeDownloadLink'} > */}
            <Button
              onClick={() => OpenFile()}
              BtnStyle={{
                height: screenDimensions.width > 650 ? 50 : 45,
                width:
                  screenDimensions.width < 300
                    ? 150
                    : screenDimensions.width > 650
                    ? 140
                    : 120,
                marginTop: 20,
              }}
              BtnContent={"Download CV"}
              BtnTxtStyle={{
                fontSize: screenDimensions.width > 650 ? 16 : 14,
                textShadow: "0px 0px 5px rgba(0,0,0,0.25)",
              }}
            />
          </div>
        </div>
      </div>

      <Grid
        className="CardContainer"
        container
        justifyContent={"center"}
        spacing={10}
        marginTop={5}
        marginBottom={10}
      >
        <Grid
          ref={Card1Ref}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          item
          lg={4}
          md={6}
          sm={12}
        >
          <Cards
            classID={`CardWrapper ${isCard1Visible ? "FadeYAnimation" : ""}`}
            ReadMorePressed={() => navigate("/services")}
            isDemo={true}
            ImagePath={Images.DeveloperImageHome}
            CardTitle={"Web Development </>"}
            CardContent={"HTML | CSS | Javascript | Bootstrap | Material UI"}
            CardBtnContent={"Know More"}
          />
        </Grid>
        <Grid
          ref={Card2Ref}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          item
          lg={4}
          md={6}
          sm={12}
        >
          <Cards
            classID={`CardWrapper ${isCard2Visible ? "FadeYAnimation" : ""}`}
            ReadMorePressed={() => navigate("/services")}
            isDemo={true}
            ImagePath={Images.AppDeveloperTheme}
            CardTitle={"React {}"}
            CardContent={"React Js. | React Native | Redux "}
            CardBtnContent={"Know More"}
          />
        </Grid>
        <Grid
          ref={Card3Ref}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          item
          lg={4}
          md={6}
          sm={12}
        >
          <Cards
            classID={`CardWrapper ${isCard3Visible ? "FadeYAnimation" : ""}`}
            ReadMorePressed={() => navigate("/services")}
            isDemo={true}
            ImagePath={Images.PlatformTheme}
            CardTitle={"Platforms"}
            CardContent={"VSCode | Git/GitHub | Android Studios | XCode "}
            CardBtnContent={"Know More"}
          />
        </Grid>
      </Grid>
      <div className="HomeCarouselWrapper">
        <span
          className="headingProject"
          style={{ color: Colors.newVar.HighlightColor, fontWeight: "700" }}
        >
          Project Snapshots
        </span>
        {/* <ProjectHorizontalCard/> */}
        <ShowcaseCarousel
          ImageStyleName={"HomeCarouselImage"}
          CarouselWrapperStyle={"HomeCarouselWrapper"}
          ImageArray={ImagesArray}
          SlidesToShow={6}
          Speed={50000}
        />
      </div>
      <BottomBar />
    </div>
  );
}
