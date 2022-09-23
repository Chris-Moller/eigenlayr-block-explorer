import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { textAlign } from "@mui/system";
const interact = require("../../utils/interact");

const LatestBlocks = () => {
  const [latestDash, setLatestDash] = useState([]);

  const load = async () => {
    const dash = await interact.getBlocks();
    console.log(dash);
    setLatestDash(dash);
  };

  useEffect(() => {
    load();
  }, []);

  const getTime = (val) => {
    const diff = Number(Date.now())-Number(val)
    return diff;
  }

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: "white",
        }}
      >
        <h1>Latest Blocks</h1>
      </Typography>
      <Box sx={{
        display: "flex",
        flexDirection: "row"
      }}>
        <Box sx={{
            display: "flex",
            flexDirection: "column"
        }}>
      <Typography sx={{
        color: "white",
        textAlign: "left",
      }} variant="h6"><h6>Block Number</h6></Typography>
      {latestDash ? (
        latestDash.map((result) => (
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}>
            <span
              style={{
                
                fontSize: "12pt",
                color: "white",
              }}
            >
              {ethers.BigNumber.from(result.number).toString()}
            </span>
          </Box>
        ))
      ) : (
        <span
          style={{
            fontSize: "12pt",
            color: "white",
          }}
        >
          none
        </span>
      )}
      </Box>
      <Box sx={{
            display: "flex",
            flexDirection: "column"
        }}>
      <Typography sx={{
        color: "white",
        textAlign: "left",
      }} variant="h6"><h6>Timestamp</h6></Typography>
      {latestDash ? (
        latestDash.map((result) => (
          <Box sx={{
            textAlign: "left",
          }}>
            <span
              style={{
                
                fontSize: "12pt",
                color: "white",
              }}
            >
              {getTime(ethers.BigNumber.from(result.timestamp).toString())}
            </span>
          </Box>
        ))
      ) : (
        <span
          style={{
            fontSize: "12pt",
            color: "white",
          }}
        >
          none
        </span>
      )}
      </Box>
      </Box>
    </>
  );
};

export default LatestBlocks;
