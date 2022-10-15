import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { timeSet } from "../../utils/utils";

const TxnPg = ({ txnList, bkNum, cTimeStamp }) => {
    const navigate = useNavigate()

    const titleHandler = () => {
        navigate({
          pathname: `/search`,
          search: `?v=${Number(
            ethers.BigNumber.from(bkNum).toString()
          )}`,
        });
      }

      const toTxnHandler = (hash) => {
        navigate({
          pathname: `/search`,
          search: `?v=${hash}`,
        });
      }

  useEffect(() => {
    console.log(txnList);
  }, []);

  return (
    <>
      {txnList.map((txnList) => {
        return (
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                border: "solid",
                borderWidth: "0.5px",
                borderColor: "#817dac",
                borderRadius: "5px",
                padding: "4px",
                marginTop: "6px",
                marginBottom: "6px"
              }}
            >
              <Grid container spacing={2}>
                <Grid item sm={2}>
                  <textarea
                  className="text-dark-purple  hover:text-purple-grad hover:cursor-pointer transition-all"
                  onClick={(e) => toTxnHandler(e.target.value)}
                  readOnly={true}
                    style={{
                        width: "100%",
                      fontSize: "10pt",
                      marginTop: "auto",
                      marginBottom: "auto",
                      outline: "none"
                      
                    }}
                  >
                    {txnList.hash}
                  </textarea>
                </Grid>
                <Grid item sm={2} sx={{
                    textAlign: "left"
                }}>
                  <span
                  className="text-dark-purple  hover:text-purple-grad hover:cursor-pointer transition-all"
                  onClick={titleHandler}
                    style={{
                        width: "100%",
                      fontSize: "10pt",
                      marginTop: "auto",
                      marginBottom: "auto",
                      
                    }}
                  >
                    {ethers.BigNumber.from(txnList.blockNumber).toString()}
                  </span>
                </Grid>
                <Grid item sm={2} sx={{
                    textAlign: "left"
                }}>
                  <span
                    style={{
                        width: "100%",
                      color: "black",
                      fontSize: "10pt",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {ethers.BigNumber.from(txnList.nonce).toString()}
                  </span>
                </Grid>
                <Grid item sm={2}>
                  <textarea
                  className="text-dark-purple  hover:text-purple-grad hover:cursor-pointer transition-all"
                  onClick={(e) => toTxnHandler(e.target.value)}
                  readOnly={true}
                    style={{
                        width: "100%",
                      fontSize: "10pt",
                      marginTop: "auto",
                      marginBottom: "auto",
                      outline: "none"
                    }}
                  >
                    {txnList.from}
                  </textarea>
                </Grid>
                <Grid item sm={2}>
                  <textarea
                  className="text-dark-purple  hover:text-purple-grad hover:cursor-pointer transition-all"
                  onClick={(e) => toTxnHandler(e.target.value)}
                  readOnly={true}
                    style={{
                        width: "100%",
                      fontSize: "10pt",
                      marginTop: "auto",
                      marginBottom: "auto",
                      outline: "none"
                    }}
                  >
                    {txnList.to}
                  </textarea>
                </Grid>
                <Grid item sm={2}>
                  <textarea
                  readOnly={true}
                    style={{
                        width: "100%",
                      color: "black",
                      fontSize: "10pt",
                      marginTop: "auto",
                      marginBottom: "auto",
                      outline: "none"
                    }}
                  >
                    {ethers.BigNumber.from(txnList.value).toString()}
                  </textarea>
                </Grid>
              </Grid>
            </Box>
          </Box>
        );
      })}
      <Box sx={{}}></Box>
    </>
  );
};

export default TxnPg;
