import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LatestBlocks from "./LatestBlocks";
import LatestTxns from "./LatestTxns";
import Dashboard from "./Dashboard";
import heroImage from "../../assets/dataLayerExp-hero.png"
const interact = require("../../utils/interact");

const Home = () => {
  const [latestDash, setLatestDash] = useState([]);
  const [txList, setTxList] = useState([]);

  const load = async () => {
    const dash = await interact.getBlocks();
    console.log(dash);
    setLatestDash(dash);
    let txArr = [];
    for (let i = 0; i < dash.length; i++) {
      if (dash[i].transactions.length > 0) {
        txArr.push(...dash[i].transactions);
      }
    }
    setTxList(txArr);
    console.log(txArr);
  };

  useEffect(() => {
    load();
  }, []);
  // const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
    <Box
      sx={{
        paddingTop: "100px",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        height: "400px",

        [theme.breakpoints.down("xxl")]: {
          paddingTop: "100px",
        },
        [theme.breakpoints.down("xl")]: {
          paddingTop: "60px",
        },
        [theme.breakpoints.down("md")]: {
          paddingTop: "40px",
        },
        [theme.breakpoints.down("sm")]: {
          paddingTop: "30px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1300px",
          margin: "auto",
          paddingBottom: "20px",
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
        <Grid
          container
          sx={{
            width: "100%",
            paddingTop: "40px",
            [theme.breakpoints.down("xl")]: {
              paddingTop: "100px",
            },
          }}
        >
          <Grid item md={12}>
            <Dashboard latestDash={latestDash} />
          </Grid>
        </Grid>
        </Box>
        </Box>
        <Box sx={{
          paddingTop: "40px",
          backgroundColor: "rgb(24, 27, 31)",
          [theme.breakpoints.down("xxl")]: {
            paddingTop: "40px",
          },
          [theme.breakpoints.down("xl")]: {
            paddingTop: "40px",
          },
          [theme.breakpoints.down("md")]: {
            paddingTop: "10px",
          },
          [theme.breakpoints.down("sm")]: {
            paddingTop: "10px",
          },
          
        }}>
          <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1300px",
          margin: "auto",
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
        
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{}}>
            <LatestBlocks latestDash={latestDash} />
          </Grid>
          <Grid item xs={6}>
            <LatestTxns txList={txList} />
          </Grid>
        </Grid>
        </Box>
        </Box>
        </>
  );
};

export default Home;
