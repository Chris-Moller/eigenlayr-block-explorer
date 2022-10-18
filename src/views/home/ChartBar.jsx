import { Box, Typography } from "@mui/material";
import { ethers } from "ethers";
import { useState } from "react";

const ChartBar = ({ value, max, blockNum }) => {

  const [hoverEff, setHover] = useState(false)
  let barFillHeight = "0%";
  if (max > 0) {
    barFillHeight = Math.round((value / max) * 100) + "%";
  }
  return (
    <Box>
      <Typography
        sx={{
          overflow: "hidden",
          color: "black"
        }}
        variant="p"
      >
        {hoverEff ? (<Typography variant="p" className="hover:cursor-pointer" sx={{
                color: "black"
            }}>
                {value} Txns 

            </Typography>) : (<span>{ethers.BigNumber.from(blockNum).toString()}</span>)}
        
      </Typography>

      <Box
        className="hover:cursor-pointer"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "120px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          border: "solid",
          overflow: "hidden",
          borderWidth: "0.5px",
          borderColor: "#817dac",
        }}
      >

        
        <div
          className=" bg-dark-purple"
          style={{ marginTop: "auto", height: barFillHeight, width: "100%" }}
        ></div>
      </Box>
    </Box>
  );
};

export default ChartBar;
