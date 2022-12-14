import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import TxnPg from "./TxnPg";
import { timeSet } from "../../utils/utils";



const BlockRes = ({ showTxns, txnList, searchRes, cTimeStamp }) => {
    const navigate = useNavigate();

    const txHandler = () => {
        navigate({
          pathname: `/search`,
          search: `?v=${Number(
            ethers.BigNumber.from(searchRes[0].number).toString()
          )}&txn=true`,
        });
      };
    
      const titleHandler = () => {
        navigate({
          pathname: `/search`,
          search: `?v=${Number(
            ethers.BigNumber.from(searchRes[0].number).toString()
          )}`,
        });
      };

    return (
        <Box>
                {showTxns ? (
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        textAlign: "left",
                        marginBottom: "20px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <h1
                        style={{
                          marginRight: "7px",
                        }}
                      >
                        Transactions for Block:
                      </h1>
                      <h1
                        onClick={titleHandler}
                        className=" text-dark-purple  hover:text-purple-grad hover:cursor-pointer transition-all"
                      >
                        {ethers.BigNumber.from(searchRes[0].number).toString()}{" "}
                      </h1>
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item sm={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14pt",
                            color: "black",
                            textAlign: "left",
                          }}
                        >
                          <h6>Txn Hash:</h6>
                        </Typography>
                      </Grid>
                      <Grid item sm={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14pt",
                            color: "black",
                            textAlign: "left",
                          }}
                        >
                          <h6>Block:</h6>
                        </Typography>
                      </Grid>
                      <Grid item sm={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14pt",
                            color: "black",
                            textAlign: "left",
                          }}
                        >
                          <h6>Nonce:</h6>
                        </Typography>
                      </Grid>
                      <Grid item sm={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14pt",
                            color: "black",
                            textAlign: "left",
                          }}
                        >
                          <h6>From:</h6>
                        </Typography>
                      </Grid>
                      <Grid item sm={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14pt",
                            color: "black",
                            textAlign: "left",
                          }}
                        >
                          <h6>To:</h6>
                        </Typography>
                      </Grid>
                      <Grid item sm={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14pt",
                            color: "black",
                            textAlign: "left",
                          }}
                        >
                          <h6>Value:</h6>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box>
                      <Box
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "5px",
                          padding: "4px",
                          boxShadow: "2px 2px 10px 1px #b1b1b2",
                        }}
                      >
                        {txnList ? (
                          <TxnPg
                            txnList={txnList}
                            bkNum={searchRes[0].number}
                          />
                        ) : null}
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        textAlign: "left",
                        marginBottom: "20px",
                      }}
                    >
                      <h1>
                        Block:{" "}
                        {ethers.BigNumber.from(searchRes[0].number).toString()}
                      </h1>
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: "4px",
                        boxShadow: "2px 2px 10px 1px #b1b1b2",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                          }}
                        >
                          <h6>Timestamp:</h6>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "12pt",
                            textAlign: "left",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "35px",
                          }}
                        >
                          <h6>
                            {
                              
                               
                                  timeSet(cTimeStamp, parseInt(searchRes[0].timestamp))
                                }
                          </h6>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                            marginBottom: "auto",
                            marginTop: "auto",
                          }}
                        >
                          <h6>Transactions:</h6>
                        </Typography>
                        <button
                          onClick={txHandler}
                          className="hover:cursor-pointer transition-all hover:bg-light-purple"
                          style={{
                            marginBottom: "auto",
                            marginTop: "auto",
                            marginLeft: "35px",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "#4b03ab",
                            border: "solid",
                            borderWidth: "0.5px",
                            borderColor: "#4b03ab",
                          }}
                        >
                          {searchRes[0].transactions.length} transactions
                        </button>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                          }}
                        >
                          <h6>Gas limit:</h6>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "12pt",
                            textAlign: "left",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "35px",
                          }}
                        >
                          <h6>
                            {ethers.BigNumber.from(
                              searchRes[0].gasLimit
                            ).toString()}
                          </h6>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                          }}
                        >
                          <h6>Gas used:</h6>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "12pt",
                            textAlign: "left",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "35px",
                          }}
                        >
                          <h6>
                            {ethers.BigNumber.from(
                              searchRes[0].gasUsed
                            ).toString()}
                          </h6>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                          }}
                        >
                          <h6>Hash:</h6>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "12pt",
                            textAlign: "left",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "35px",
                          }}
                        >
                          <h6>{searchRes[0].hash}</h6>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                          }}
                        >
                          <h6>Parent hash:</h6>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "12pt",
                            textAlign: "left",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "35px",
                          }}
                        >
                          <h6>{searchRes[0].parentHash}</h6>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                          }}
                        >
                          <h6>Size:</h6>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "12pt",
                            textAlign: "left",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "35px",
                          }}
                        >
                          <h6>
                            {ethers.BigNumber.from(
                              searchRes[0].size
                            ).toString()}
                          </h6>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                          }}
                        >
                          <h6>Difficulty:</h6>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "12pt",
                            textAlign: "left",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "35px",
                          }}
                        >
                          <h6>
                            {ethers.BigNumber.from(
                              searchRes[0].difficulty
                            ).toString()}
                          </h6>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                          }}
                        >
                          <h6>Total difficulty:</h6>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "12pt",
                            textAlign: "left",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "35px",
                          }}
                        >
                          <h6>
                            {ethers.BigNumber.from(
                              searchRes[0].totalDifficulty
                            ).toString()}
                          </h6>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          border: "solid",
                          borderWidth: "0.5px",
                          borderColor: "#817dac",
                          borderRadius: "5px",
                          padding: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "16pt",
                            textAlign: "left",
                          }}
                        >
                          <h6>ExtraData:</h6>
                        </Typography>
                        <textarea
                          readOnly={true}
                          style={{
                            width: "100%",
                            color: "black",
                            fontSize: "12pt",
                            textAlign: "left",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "35px",
                          }}
                        >
                          {searchRes[0].extraData}
                        </textarea>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>

    )
};

export default BlockRes;

