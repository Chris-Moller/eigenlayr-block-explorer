import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ethers } from "ethers";
import TxnPg from "./TxnPg";
const interact = require("../../utils/interact");
const { Box } = require("@mui/system");

const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState();
  const [showTxns, setShowTxns] = useState(false);
  const [searchRes, setSearchRes] = useState();
  const [txnList, setTxnArr] = useState([]);
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

  const toBkHandler = () => {
    navigate({
      pathname: `/search`,
      search: `?v=${Number(
        ethers.BigNumber.from(searchRes[0].blockNumber).toString()
      )}`,
    });
  };

  const load = async () => {
    const searchVal = searchParams.get("v");
    const txns = searchParams.get("txn");
    const search = await interact.search(searchVal);
    setType(search[search.length - 1].type);
    setSearchRes(search);
    console.log(search);
    if (txns === "true") {
      setTxnArr(search[0].transactions);
      setShowTxns(true);
    } else {
      setShowTxns(false);
    }
  };

  useEffect(() => {
    load();
  }, [searchParams]);
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
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
          maxWidth: "1500px",
          margin: "auto",
          paddingBottom: "120px",
          [theme.breakpoints.down("xxl")]: {
            margin: "4.5rem",
          },
          [theme.breakpoints.down("md")]: {
            margin: "1rem",
          },
          [theme.breakpoints.down("sm")]: {
            marginLeft: ".5rem",
            marginRight: ".5rem",
          },
        }}
      >
        {type ? (
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
            {type === "block" ? (
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
                            {Number(
                              Date.now() / 1000 -
                                ethers.BigNumber.from(
                                  searchRes[0].timestamp
                                ).toString()
                            ).toFixed(0)}
                          </h6>
                        </Typography>
                        <span
                          style={{
                            marginLeft: "5px",
                            fontSize: "10pt",
                            marginTop: "auto",
                            marginBottom: "auto",
                            color: "black",
                          }}
                        >
                          secs ago
                        </span>
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
            ) : null}
            {type === "txn" ? (
              <Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "black",
                        textAlign: "left",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    >
                      <h1>Transaction:</h1>
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        marginLeft: "7px",
                        float: "left",
                        color: "black",
                        textAlign: "left",
                      }}
                    >
                      <p>{searchRes[0].hash}</p>
                    </Typography>
                  </Box>
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
                        <h6>From:</h6>
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
                        <h6>{searchRes[0].from}</h6>
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
                        <h6>To:</h6>
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
                        <h6>{searchRes[0].to}</h6>
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
                        <h6>Block number:</h6>
                      </Typography>
                      <Typography
                        onClick={toBkHandler}
                        variant="h6"
                        sx={{
                          fontSize: "12pt",
                          textAlign: "left",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                        }}
                      >
                        <h6 className="text-dark-purple  hover:text-purple-grad hover:cursor-pointer transition-all">
                          {ethers.BigNumber.from(
                            searchRes[0].blockNumber
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
                        <h6>Transaction Fee:</h6>
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
                          {Number(
                            ethers.BigNumber.from(searchRes[0].gas).toString()
                          ) *
                            Number(
                              ethers.BigNumber.from(
                                searchRes[0].gasPrice
                              ).toString()
                            )}
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
                        <h6>Gas price:</h6>
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
                            searchRes[0].gasPrice
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
                        <h6>Gas:</h6>
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
                          {ethers.BigNumber.from(searchRes[0].gas).toString()}
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
                        <h6>Value:</h6>
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
                          {ethers.BigNumber.from(searchRes[0].value).toString()}
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
                        <h6>Type:</h6>
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
                          {ethers.BigNumber.from(searchRes[0].type).toString()}
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
                        <h6>Nonce:</h6>
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
                          {ethers.BigNumber.from(searchRes[0].nonce).toString()}
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
                        <h6>Input:</h6>
                      </Typography>
                      <textarea
                        style={{
                          color: "black",
                          fontSize: "12pt",
                          textAlign: "left",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                          width: "100%",
                        }}
                      >
                        {searchRes[0].input}
                      </textarea>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : null}
            {type === "acc" ? (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "20px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "black",
                      textAlign: "left",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {searchRes[1] === "0x" ? (
                      <h1>Account:</h1>
                    ) : (
                      <h1>Contract:</h1>
                    )}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "7px",
                      float: "left",
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    <p>{searchRes[0]}</p>
                  </Typography>
                </Box>
                {searchRes[1] === "0x" ? (
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
                        <h6>Account Address:</h6>
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
                        <h6>{searchRes[0]}</h6>
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
                        <h6>Balance:</h6>
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
                          {ethers.BigNumber.from(searchRes[2]).toString()}
                        </h6>
                      </Typography>
                    </Box>
                  </Box>
                ) : (
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
                        <h6>Contract Address:</h6>
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
                        <h6>{searchRes[0]}</h6>
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
                        <h6>Balance:</h6>
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
                          {ethers.BigNumber.from(searchRes[2]).toString()}
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
                    marginTop: "4px"
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
                    <h6>Bytecode:</h6>
                  </Typography>
                  <textarea
                  readOnly={true}
                    style={{
                      color: "black",
                      fontSize: "12pt",
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "35px",
                      width: "100%"
                    }}
                  >{searchRes[1]}
                  </textarea>
                </Box>
                  </Box>
                )}
              </Box>
            ) : null}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Result;
