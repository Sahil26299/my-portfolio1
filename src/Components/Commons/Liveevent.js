import React from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Slider from "react-slick";
import Livecard from "src/views/pages/Home/Event/Livecard";
import NoDataFound from "src/component/NoDataFound";
import SliderDataLoader from "src/component/SliderDataLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {},
    "& h3": {
      fontWeight: 700,
      fontSize: "30px",
      color: "#262424",
      display: "flex",
      alignItems: "center",
      "& img": {
        marginRight: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },
  },
}));

function LiveCarousel({
  dataList,
  isLoading,
  callBack,
  user,
  account,
  library,
  type,
  updateListing,
  setSelectedEventId,
  selectedEventData,
}) {
  const classes = useStyles();

  const settings = {
    dots: false,
    slidesToShow: 3,
    AutoPlay: "true",
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    arrows: true,
    className: "recomended",

    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "20px",
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "20px",
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };
  const dataLoader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth="lg">
          <Box>
            <Box>
              {dataList && dataList.length < 3 ? (
                <Grid container spacing={2}>
                  {dataList &&
                    dataList?.map((data, i) => {
                      return (
                        <Grid item lg={4} sm={4} md={4} xs={12} key={i}>
                          <Livecard
                            data={data}
                            type="timing"
                            index={i}
                            setSelectedEventId={(item) =>
                              setSelectedEventId(item)
                            }
                            updateListing={updateListing}
                            selectedEventData={selectedEventData}
                            callBack={(item) => callBack(item)}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              ) : (
                <Slider {...settings} style={{ width: "100%" }}>
                  {dataList &&
                    dataList?.map((data, i) => {
                      return (
                        <Box key={i}>
                          <Livecard
                            data={data}
                            type="timing"
                            index={i}
                            setSelectedEventId={(item) =>
                              setSelectedEventId(item)
                            }
                            selectedEventData={selectedEventData}
                            updateListing={updateListing}
                            callBack={(item) => callBack(item)}
                          />
                        </Box>
                      );
                    })}
                </Slider>
              )}
            </Box>

            {!isLoading && dataList && dataList.length === 0 && (
              <NoDataFound title="No events found!" />
            )}
            {isLoading && (
              <Slider {...settings} style={{ width: "100%" }}>
                {dataLoader &&
                  dataLoader?.map((data, i) => {
                    return (
                      <Box key={i}>
                        <SliderDataLoader />
                      </Box>
                    );
                  })}
              </Slider>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default LiveCarousel;
