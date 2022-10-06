import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ethers } from "ethers";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LatestTxns = ({ txList }) => {
  const navigate = useNavigate()

  const toTxnHandler = (hash) => {
    navigate({
      pathname: `/search`,
      search: `?v=${hash}`,
    });
  }

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
        <h1>Latest Transactions (10 blocks)</h1>
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
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "13pt",
                    textAlign: "center",
                  }}
                  variant="h6"
                >
                  <h6>Hash</h6>
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
                  <h6>From</h6>
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
                  <h6>To</h6>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          {txList.length > 0 ? (
            txList.map((result) => (
              <Box
              key={result.hash}
              className=" hover:bg-dark-purple hover:cursor-pointer transition-all"
                  onClick={() => toTxnHandler(result.hash)}
                sx={{
                  display: "flex",
                  backgroundColor: "#424869",
                  borderRadius: "10px",
                  padding: "10px",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={4} sx={{
                    overflow: "hidden"
                  }}>
                  <span
                  className=" hover:bg-dark-purple hover:cursor-pointer transition-all"
                    style={{
                        width: "100%",
                        fontSize: "12pt",
                      marginTop: "auto",
                      marginBottom: "auto",
                      outline: "none",
                      
                    }}
                  >
                      {result.hash}
                    </span>
                  </Grid>
                  <Grid item xs={4} sx={{
                    overflow: "hidden"
                  }}>
                      <span
                        style={{
                          fontSize: "12pt",
                          color: "white",
                        }}
                      >
                        {
                          result.from}
                      </span>
                  </Grid>
                  <Grid item xs={4} sx={{
                    overflow: "hidden"
                  }}>
                    <span
                      style={{
                        fontSize: "12pt",
                        color: "white",
                        
                      }}
                    >
                      {result.to}
                    </span>
                  </Grid>
                </Grid>
              </Box>
            ))
          ) : (
            <Box
            sx={{
              backgroundColor: "#424869",
              borderRadius: "10px",
              padding: "10px",
              marginTop: "10px",
              
            }}
          >
            
            <span
              style={{
                fontSize: "12pt",
                color: "white",
                textAlign: "center",
              }}
            >
              No transaction data within the last 10 blocks.
            </span>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LatestTxns;
