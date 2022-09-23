import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LatestBlocks from "./LatestBlocks";
import LatestTxns from "./LatestTxns";

const Home = () => {
  // const navigate = useNavigate();
  const theme = useTheme();

  const load = async () => {
    console.log("hello");
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <Box
      sx={{
        // backgroundColor: "#00001D",
        paddingTop: "250px",
        [theme.breakpoints.down("xl")]: {
          paddingTop: "250px",
        },
        [theme.breakpoints.down("md")]: {
          paddingTop: "150px",
        },
        [theme.breakpoints.down("sm")]: {
          paddingTop: "150px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          maxWidth: "1300px",
          paddingBottom: "120px",
          [theme.breakpoints.down("xl")]: {
            maxWidth: "1150px",
          },
          [theme.breakpoints.down("lg")]: {
            maxWidth: "850px",
          },
          [theme.breakpoints.down("md")]: {
            maxWidth: "550px",
          },
          [theme.breakpoints.down("sm")]: {
            marginLeft: "20px",
            marginRight: "20px",
          },
        }}
      >
        <Grid container sx={{
          backgroundColor: "black",
          width: "100%",
          borderRadius: "10px",
          border: "solid",
          borderWidth: "0.5px",
          borderColor: "#817dac",
          padding: "32px"
        }}>
          <Grid item md={6}>
          <LatestBlocks/>
          </Grid>
          {/* <div style={{
            width: "0.5px",
            backgroundColor: "#817dac",
            height: "100%"
          }}></div> */}
          <Grid item md={6}>
          <LatestTxns/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
