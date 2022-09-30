import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LatestBlocks from "./LatestBlocks";
import LatestTxns from "./LatestTxns";
import Dashboard from "./Dashboard";
const interact = require("../../utils/interact");

const Home = () => {
  const [latestDash, setLatestDash] = useState([]);
  const [txList, setTxList] = useState([]);

  const load = async () => {
    const dash = await interact.getBlocks();
    console.log(dash);
    setLatestDash(dash);
    let txArr = []
    for (let i = 0; i < dash.length; i++) {
      if (dash[i].transactions.length > 0) {
        txArr.push(...dash[i].transactions)
      }
    }
    setTxList(txArr);
    console.log(txArr)

  };

  useEffect(() => {
    load();
  }, []);
  // const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingTop: "150px",
        [theme.breakpoints.down("xxl")]: {
          paddingTop: "150px",
        },
        [theme.breakpoints.down("xl")]: {
          paddingTop: "100px",
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
          flexDirection: "column",
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
        <Grid container
        sx={{
          width:"100%",
        }}>
          <Grid item md={12}>
            <Dashboard latestDash={latestDash}/>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={6} sx={{
          }}>
            <LatestBlocks latestDash={latestDash} />
          </Grid>
          <Grid item xs={6}>
            <LatestTxns txList={txList} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
