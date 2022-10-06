// import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ethers } from "ethers";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LatestBlocks = ({ latestDash }) => {
  const navigate = useNavigate()
  const toBkHandler = (bkNum) => {
    navigate({
      pathname: `/search`,
      search: `?v=${Number(
        ethers.BigNumber.from(bkNum).toString()
      )}`,
    });
  };


  return (
    <Box
      sx={{
        borderRadius: "10px",
        border: "solid",
        borderWidth: "0.5px",
        borderColor: "#817dac",
        padding: "32px",
        backgroundColor: "#d4dfef",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "black",
          textAlign: "left",
          marginBottom: "20px",
        }}
      >
        <h1>Latest Blocks</h1>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Grid container sx={{}}>
              <Grid item md={4}>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "13pt",
                  }}
                  variant="h6"
                >
                  <h6>Block Number</h6>
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "13pt",
                    textAlign: "center",
                  }}
                  variant="h6"
                >
                  <h6>Timestamp</h6>
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "13pt",
                    textAlign: "center",
                  }}
                  variant="h6"
                >
                  <h6>Gas Used</h6>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          {latestDash ? (
            latestDash.map((result) => (
              <Box
                key={result.number}
                className=" hover:bg-dark-purple hover:cursor-pointer transition-all"
                onClick={() => toBkHandler(Number(ethers.BigNumber.from(result.number).toString()))}
                sx={{
                  display: "flex",
                  backgroundColor: "#424869",
                  borderRadius: "10px",
                  padding: "10px",
                  marginTop: "10px",
                  textAlign: "center"
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    <span
                      style={{
                        fontSize: "12pt",
                        color: "white",
                      }}
                    >
                      {ethers.BigNumber.from(result.number).toString()}
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div>
                      <span
                        style={{
                          fontSize: "12pt",
                          color: "white",
                        }}
                      >
                        {Number(
                          Date.now() / 1000 -
                            ethers.BigNumber.from(result.timestamp).toString()
                        ).toFixed(0)}
                      </span>
                      <span
                        style={{
                          marginLeft: "5px",
                          fontSize: "10pt",
                          color: "white",
                        }}
                      >
                        secs ago
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <span
                      style={{
                        fontSize: "12pt",
                        color: "white",
                      }}
                    >
                      {ethers.BigNumber.from(result.gasUsed).toString()}
                    </span>
                  </Grid>
                </Grid>
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
    </Box>
  );
};

export default LatestBlocks;
