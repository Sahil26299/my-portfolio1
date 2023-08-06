import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LazyLoad from "react-lazy-load";
import Tilt from "react-parallax-tilt";
import { ColorSchema } from "../../Utils/Context/ColorThemes";
import { loadBlurrImage } from "../../Utils/helper/Helper";

export default function Cards(props) {
  const [Hovered, setHovered] = React.useState(false);
  useEffect(() => {
    const handleWindowResize = () => {};

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const ScreenWidth = React.useMemo(() => {
    return window.innerWidth;
  }, [window.innerWidth]);
  return (
    <div className={`${props.classID}`}>
      <Tilt
        className="parallax-effect"
        onEnter={() => setHovered(true)}
        onLeave={() => setHovered(false)}
        tiltReverse={true}
        gyroscope={true}
        perspective={1000}
        transitionSpeed={2000}
      >
        <Card
          className="MainCard"
          style={{
            width: ScreenWidth < 450 ? "16rem" : "18rem",
            minHeight: ScreenWidth < 450 ? "15rem" : "18rem",
            boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
            border: "none",
          }}
        >
          <LazyLoad height={125} offset={100}>
            <Card.Img
              variant="top"
              src={props.ImagePath}
              className={`CardImageStyle`}
            />
          </LazyLoad>
          <Card.Body
            className={`inner-element ${
              Hovered ? "inner-element-hovered" : ""
            }`}
          >
            <Card.Title className="card-Title">{props.CardTitle}</Card.Title>
            <Card.Text className="card-Content">{props.CardContent}</Card.Text>
            {props.isDemo && (
              <Button
                className="card-Btn animate__animated animate__shakeX animate__delay-5s animate__faster"
                variant="warning"
                onClick={props.ReadMorePressed}
              >
                {props.CardBtnContent}
              </Button>
            )}
          </Card.Body>
        </Card>
      </Tilt>
    </div>
  );
}
