import React, { useContext, useState, useMemo, useRef } from "react";
import "./Introduction.scss";
import { ColorSchema } from "../../../Utils/Context/ColorThemes";
import { Images } from "../../../Utils/Images";
import LinearBufferProgress from "../LinearBufferProgress";
import BottomBar from "../BottomBar/BottomBar";
import Search from "@mui/icons-material/Search";
import LazyLoad from "react-lazy-load";
import { loadBlurrImage } from "../../../Utils/helper/Helper";

const MySkills = {
  Language: [
    { name: "Javascript", Proficiency: 80, Buffer: 90, Type: "Language" },
    { name: "C", Proficiency: 65, Buffer: 80, Type: "Language" },
    { name: "Python", Proficiency: 70, Buffer: 90, Type: "Language" },
    { name: "Typescript", Proficiency: 60, Buffer: 65, Type: "Language" },
  ],
  FrontEnd: [
    { name: "HTML", Proficiency: 80, Buffer: 90, Type: "FrontEnd" },
    { name: "CSS & Bootstrap", Proficiency: 80, Buffer: 85, Type: "FrontEnd" },
    { name: "React Js.", Proficiency: 70, Buffer: 80, Type: "FrontEnd" },
    { name: "React Native", Proficiency: 80, Buffer: 90, Type: "FrontEnd" },
    { name: "Redux", Proficiency: 30, Buffer: 40, Type: "FrontEnd" },
  ],
  BackEnd: [
    { name: "Node Js.", Proficiency: 30, Buffer: 40, Type: "BackEnd" },
    { name: "Express Js.", Proficiency: 25, Buffer: 30, Type: "BackEnd" },
  ],
  Platform: [
    { name: "Git/Github", Proficiency: 60, Buffer: 80, Type: "Platform" },
    { name: "VS Code", Proficiency: 80, Buffer: 90, Type: "Platform" },
    { name: "Android Studios", Proficiency: 40, Buffer: 50, Type: "Platform" },
    { name: "XCode", Proficiency: 30, Buffer: 45, Type: "Platform" },
  ],
  Database: [{ name: "MySQL", Proficiency: 40, Buffer: 50, Type: "Database" }],
};

export default function Introduction(props) {
  // const [SearchedText, setSearchedText] = useState("");
  // const [SearchedFieldFocused, setSearchedFieldFocused] = useState(false)
  const [HeaderVisible, setHeaderVisible] = useState();
  const [SkillSet1Visible, setSkillSet1Visible] = useState();
  const [SkillSet2Visible, setSkillSet2Visible] = useState();
  const [SkillSet3Visible, setSkillSet3Visible] = useState();
  const [SkillSet4Visible, setSkillSet4Visible] = useState();
  const [SkillSet5Visible, setSkillSet5Visible] = useState();
  const HeaderRef = useRef();
  const SkillSet1Ref = useRef();
  const SkillSet2Ref = useRef();
  const SkillSet3Ref = useRef();
  const SkillSet4Ref = useRef();
  const SkillSet5Ref = useRef();

  const Colors = useContext(ColorSchema);
  const SkillProgressIndicator = (skill, prog, buff) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="SkillProgressContainer"
      >
        <LinearBufferProgress Progress={prog} Buffer={buff} Skill={skill} />
      </div>
    );
  };

  const [screenDimensions, setScreenDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    let HeaderObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          loadBlurrImage(".basic-intro-Image", "loadedIntroductionCoverImage");
          setHeaderVisible(true);
        }, 500);
      }
    });
    if (!HeaderVisible) {
      HeaderObserver.observe(HeaderRef.current);
    }
    let SkillSet1Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSkillSet1Visible(true);
      }
    });
    if (!SkillSet1Visible) {
      SkillSet1Observer.observe(SkillSet1Ref.current);
    }

    let SkillSet2Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSkillSet2Visible(true);
      }
    });
    if (!SkillSet2Visible) {
      SkillSet2Observer.observe(SkillSet2Ref.current);
    }

    let SkillSet3Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSkillSet3Visible(true);
      }
    });
    if (!SkillSet3Visible) {
      SkillSet3Observer.observe(SkillSet3Ref.current);
    }

    let SkillSet4Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSkillSet4Visible(true);
      }
    });
    if (!SkillSet4Visible) {
      SkillSet4Observer.observe(SkillSet4Ref.current);
    }

    let SkillSet5Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSkillSet5Visible(true);
      }
    });
    if (!SkillSet5Visible) {
      SkillSet5Observer.observe(SkillSet5Ref.current);
    }
  }, []);

  const FilteredArray = useMemo(() => {
    //     if (SearchedText != "") {
    //         return MySkills.filter((item, index) => {
    //             return item.name?.toLowerCase()?.indexOf(SearchedText.toLowerCase()) != -1;
    //         })
    //     }
    //     else {
    return MySkills;
    //     }
  }, []);

  return (
    <div
      className="wrapper-container"
      id="Introduction_ID"
      style={{
        backgroundColor: Colors.newVar.BGColor,
        marginTop: "3%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <div className="searchBarContainer" >
                <span style={{ color: Colors.newVar.TXTColor }} className='SearchDescription' >You are looking for ?</span>
                <div className='SearchBarWrapper' style={{ borderColor: Colors.isDarkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)' }} >
                    <input placeholder='Search (Skills, etc)' onFocus={() => setSearchedFieldFocused(true)} onBlur={() => setSearchedFieldFocused(false)} type={'text'} maxLength={60} name='Search' className='SearchBar' style={{ color: Colors.newVar.TXTColor }} />
                    <Search style={{ fontSize: 24, color: Colors.newVar.TXTColor }} />
                </div>
            </div> */}

      <div
        ref={HeaderRef}
        className={`basic-intro-wrapper ${
          HeaderVisible && screenDimensions.width > 650
            ? "FadeYAnimationProfile"
            : ""
        }`}
      >
        <div
          className={`basic-intro-text ${
            HeaderVisible && screenDimensions.width < 650
              ? "FadeXAnimationProfile"
              : ""
          }`}
        >
          <span
            style={{ color: Colors.newVar.TXTColor }}
            className={"Intro-TextTop"}
          >
            Full Name : Sahil Dattatray Lokhande
          </span>
          <br />
          <span
            style={{ color: Colors.newVar.TXTColor }}
            className={"Intro-TextTop"}
          >
            Current Role :{" "}
            <span style={{ color: Colors.newVar.HighlightColor }}>
              React Developer at Mobiloitte
            </span>
          </span>
          <br />
          <span
            style={{ color: Colors.newVar.TXTColor }}
            className={"Intro-TextTop"}
          >
            Loaction : Pune, Maharashtra, India
          </span>
          <br />
          <span
            style={{ color: Colors.newVar.TXTColor }}
            className={"Intro-TextTop"}
          >
            Status : Looking forward for good career opportunities...
          </span>
          <br />
        </div>
        {/* <div className='verticalLine' style={{ backgroundColor: Colors.isDarkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)' }} ></div>*/}
        <div>
          <div
            className={`basic-intro-Image ${
              HeaderVisible && screenDimensions.width < 650
                ? "FadeXAnimationProfile"
                : ""
            }`}
            style={{
              backgroundImage: `url(${Images.IntroductionCoverLoading})`,
            }}
          >
            <img src={Images.IntroductionCover} className="ProfileMyImage" />
          </div>
        </div>
      </div>
      <div className="IntroBodyWrapper">
        <span
          style={{ color: Colors.newVar.HighlightColor, fontWeight: "700" }}
          className={"Intro-Title"}
        >
          Headline
        </span>
        <br />
        <span
          style={{ color: Colors.newVar.TXTColor, marginTop: 20 }}
          className={"Intro-Text"}
        >
          Experienced front-end React developer with a solid understanding of
          data science and blockchain technology, seeking to leverage my skills
          in a reputable industry.
        </span>
      </div>
      <div className="IntroBodyWrapper">
        <span
          style={{ color: Colors.newVar.HighlightColor, fontWeight: "700" }}
          className={"Intro-Title"}
        >
          Experience
        </span>
        <br />
        <span
          style={{ color: Colors.newVar.TXTColor }}
          className={"Intro-Text"}
        >
          <dl>
            <dt>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ width: "50%" }}>
                  Chatterbox Technologies | Front-End Engineer
                </span>
                <span className="ListHeaderRight">
                  Pune, India | July 2023 – Present
                </span>
              </div>
            </dt>
            <br />
            <dd>
              <ul>
                <li>
                  I am currently employed as a full-time React Native Developer
                  at Chatterbox Technologies Pvt. Ltd., collaborating with a
                  talented team, on a contractual basis, where my role centers
                  around driving the development of an edutainment-focused
                  application.
                </li>
                <br />
                <li>
                  Developed the new UI of the application and revamped the
                  previous UI as per the requirements along with API integration
                  and major functionalities in the application by increasing the
                  efficiency of the application.
                </li>
                <br />
                <li>
                  Majorly worked on rendering the informative video-series,
                  creatively adapting them into a reels format and managing
                  statistical aspects of the app.
                </li>
                {/* <a
                  href="https://drive.google.com/file/d/1OgxNqlr9NQT3Tbfwrp-QF75siL4LFUck/view"
                  target={"_blank"}
                  className={"CertificateHyperLink"}
                >
                  <i>Verify Credential</i>
                </a> */}
              </ul>
            </dd>
            <br />
            <dt>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ width: "50%" }}>
                  Mobiloitte | React Developer
                </span>
                <span className="ListHeaderRight">
                  Pune, India | April 2022 – June 2023
                </span>
              </div>
            </dt>
            <br />
            <dd>
              <ul>
                <li>
                  Revamped the entire code of social media and crypto exchange
                  combined application from changing its theme in UI development
                  till adding new features by API integration, in react native.
                </li>
                <br />
                <li>
                  Successfuly completed development of native android and ios
                  crypto exchange application based on blockchain technology for
                  buying, selling, staking and exchanging/swapping
                  cryptocurrencies using React native and also connected it to
                  backend using API integration.
                </li>
                <br />
                <li>
                  Revamped a code of social platform for launching NFTs
                  including payment gateway and connected it to backend using
                  APIs in React native.
                </li>
              </ul>
            </dd>
            <br />
            <dt>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ width: "50%" }}>
                  GRROOM | Machine Learning Intern
                </span>
                <span className="ListHeaderRight">
                  Pune, India | May 2021 – June 2021
                </span>
              </div>
            </dt>
            <br />
            <dd>
              <ul>
                <li>
                  Trained and tested an open-CV (Computer Vision) model that
                  predicts the types of garments to show or recommend similar
                  types to the user. Largely used in the fashion and ecommerce
                  fields.
                </li>
                <a
                  href="https://drive.google.com/file/d/1OgxNqlr9NQT3Tbfwrp-QF75siL4LFUck/view"
                  target={"_blank"}
                  className={"CertificateHyperLink"}
                >
                  <i>Verify Credential</i>
                </a>
              </ul>
            </dd>
          </dl>
        </span>
      </div>
      <div className="IntroBodyWrapper">
        <span
          style={{ color: Colors.newVar.HighlightColor, fontWeight: "700" }}
          className={"Intro-Title"}
        >
          Technical Skills
        </span>
        <br />
        <div style={{ marginTop: 25 }}>
          <div
            ref={SkillSet1Ref}
            className={`SkillSet ${
              SkillSet1Visible ? "FadeYAnimationProfile" : ""
            }`}
          >
            <dl
              style={{
                color: Colors.newVar.TXTColor,
                border: Colors.isDarkMode
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                padding: 25,
                position: "relative",
              }}
              className={"Intro-Text fadeAnimation1"}
            >
              <dt
                className="TechnicalSkillDT"
                style={{ backgroundColor: Colors.newVar.BGColor, padding: 5 }}
              >
                Programming Languages
              </dt>{" "}
              <br />
              <dd>
                {FilteredArray.Language?.map((item) => {
                  if (item.Type == "Language")
                    return (
                      <div>
                        {SkillProgressIndicator(
                          item.name,
                          item.Proficiency,
                          item.Buffer
                        )}
                        <br />
                      </div>
                    );
                })}
              </dd>
            </dl>
          </div>

          <div
            ref={SkillSet2Ref}
            className={`SkillSet ${
              SkillSet2Visible ? "FadeYAnimationProfile" : ""
            }`}
            style={{ marginTop: 50 }}
          >
            <dl
              style={{
                color: Colors.newVar.TXTColor,
                border: Colors.isDarkMode
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                padding: 25,
                position: "relative",
              }}
              className={"Intro-Text fadeAnimation2"}
            >
              <dt
                className="TechnicalSkillDT1"
                style={{ backgroundColor: Colors.newVar.BGColor, padding: 5 }}
              >
                Front-End Technologies
              </dt>{" "}
              <br />
              <dd>
                {FilteredArray.FrontEnd.map((item) => {
                  if (item.Type == "FrontEnd")
                    return (
                      <div>
                        {SkillProgressIndicator(
                          item.name,
                          item.Proficiency,
                          item.Buffer
                        )}
                        <br />
                      </div>
                    );
                })}
              </dd>
            </dl>
          </div>

          <div
            ref={SkillSet3Ref}
            className={`SkillSet ${
              SkillSet3Visible ? "FadeYAnimationProfile" : ""
            }`}
            style={{ marginTop: 50 }}
          >
            <dl
              style={{
                color: Colors.newVar.TXTColor,
                border: Colors.isDarkMode
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                padding: 25,
                position: "relative",
              }}
              className={"Intro-Text fadeAnimation2"}
            >
              <dt
                className="TechnicalSkillDT"
                style={{ backgroundColor: Colors.newVar.BGColor, padding: 5 }}
              >
                Back-End Technologies
              </dt>{" "}
              <br />
              <dd>
                {FilteredArray.BackEnd.map((item) => {
                  if (item.Type == "BackEnd")
                    return (
                      <div>
                        {SkillProgressIndicator(
                          item.name,
                          item.Proficiency,
                          item.Buffer
                        )}
                        <br />
                      </div>
                    );
                })}
              </dd>
            </dl>
          </div>

          <div
            ref={SkillSet4Ref}
            className={`SkillSet ${
              SkillSet4Visible ? "FadeYAnimationProfile" : ""
            }`}
            style={{ marginTop: 50 }}
          >
              <dl
                style={{
                  color: Colors.newVar.TXTColor,
                  border: Colors.isDarkMode
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: 10,
                  padding: 25,
                  position: "relative",
                }}
                className={"Intro-Text fadeAnimation3"}
              >
                <dt
                  className="TechnicalSkillDT1"
                  style={{ backgroundColor: Colors.newVar.BGColor, padding: 5 }}
                >
                  Tools/ Platforms
                </dt>{" "}
                <br />
                <dd>
                  {FilteredArray.Platform.map((item) => {
                    if (item.Type == "Platform")
                      return (
                        <div>
                          {SkillProgressIndicator(
                            item.name,
                            item.Proficiency,
                            item.Buffer
                          )}
                          <br />
                        </div>
                      );
                  })}
                </dd>
              </dl>
          </div>

          <div
            ref={SkillSet5Ref}
            className={`SkillSet ${
              SkillSet5Visible ? "FadeYAnimationProfile" : ""
            }`}
            style={{ marginTop: 50 }}
          >
            <dl
              style={{
                color: Colors.newVar.TXTColor,
                border: Colors.isDarkMode
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: 10,
                padding: 25,
                position: "relative",
              }}
              className={"Intro-Text fadeAnimation4"}
            >
              <dt
                className="TechnicalSkillDT"
                style={{ backgroundColor: Colors.newVar.BGColor, padding: 5 }}
              >
                Database
              </dt>{" "}
              <br />
              <dd>
                {FilteredArray.Database.map((item) => {
                  if (item.Type == "Database")
                    return (
                      <div>
                        {SkillProgressIndicator(
                          item.name,
                          item.Proficiency,
                          item.Buffer
                        )}
                        <br />
                      </div>
                    );
                })}
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="IntroBodyWrapper">
        <span
          style={{ color: Colors.newVar.HighlightColor, fontWeight: "700" }}
          className={"Intro-Title"}
        >
          Education
        </span>
        <br />
        <ul style={{ color: Colors.newVar.TXTColor }}>
          <li>
            <span className={"Intro-Text"}>
              Completed my gradtuation in Mechanical Engineering from P. E. S.
              Modern college of Engineering, Pune with 6.5 CGPA (62%).
            </span>
          </li>
          <br />
          <li>
            <span className={"Intro-Text"}>
              Completed class XII (HSC Board) in science from M. E. S. Boy's
              highschool, Pune with 64%.
            </span>
          </li>
          <br />
          <li>
            <span className={"Intro-Text"}>
              Completed class X (SSC Board) from Aranyeshwar English Medium
              school, Pune with 77%.
            </span>
          </li>
        </ul>
      </div>
      <div className="IntroBodyWrapper">
        <span
          style={{ color: Colors.newVar.HighlightColor, fontWeight: "700" }}
          className={"Intro-Title"}
        >
          Personal / Acedemic Projects
        </span>
        <br />
        <ul style={{ color: Colors.newVar.TXTColor }}>
          <li>
            <span className={"Intro-Text"}>
              Developed a UI of NFT Marketplace (ref. OpenSea) for native
              (android/iOS) platform using react native.
            </span>
          </li>
          <br />
          <li>
            <span className={"Intro-Text"}>
              Developed a UI for uploading blogs, along with registration page,
              login page and forgot password page with validations using
              javascript.
            </span>
          </li>
          <br />
          <li>
            <span className={"Intro-Text"}>
              Created Machine Learning model on "Prediction of calories burnt
              after the exercise" and developed a UI for the same using python.
              (June 2021 - Aug. 2021)
            </span>
          </li>
        </ul>
        <div
          className="CarouselWrapper"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <video loop autoPlay muted controls className="carouselVideo">
            <source src={Images.CalorieTrackerShowcaseVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="IntroBodyWrapper">
        <span
          style={{ color: Colors.newVar.HighlightColor, fontWeight: "700" }}
          className={"Intro-Title"}
        >
          Certifications
        </span>
        <br />
        <ul
          style={{ color: Colors.newVar.TXTColor, margin: 0 }}
          className={"Intro-Text"}
        >
          <li>
            Machine Learning Engineer and AI Analyst (Org. Symbiosis Skills and
            Professional University, Pune)
          </li>
          <a
            href="https://drive.google.com/file/d/1mF7HQ9V1x6Fvb4MDy7WMkuigPyrww3Zj/view"
            target={"_blank"}
            className={"CertificateHyperLink"}
          >
            <i>Verify Credential</i>
          </a>
          <br />
          <br />
          <li>
            Introduction to TensorFlow for Artificial Intelligence, Machine
            Learning and Deep Learning (Org. Coursera)
          </li>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/3UMSBR7HF5WE?utm_source=link"
            target={"_blank"}
            className={"CertificateHyperLink"}
          >
            <i>Verify Credential</i>
          </a>
          <br />
          <br />
          <li>Convolution Neural Networks in TensorFlow (Org. Coursera)</li>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/X7FLSKU4GMS8"
            target={"_blank"}
            className={"CertificateHyperLink"}
          >
            <i>Verify Credential</i>
          </a>
          <br />
          <br />
          <li>Machine Learning (Org. Coursera)</li>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/W97UEVBPP7WV"
            target={"_blank"}
            className={"CertificateHyperLink"}
          >
            <i>Verify Credential</i>
          </a>
          <br />
          <br />
        </ul>
      </div>
      <BottomBar />
    </div>
  );
}
