import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BlockRes from "./BlockRes";
import TxnRes from "./TxnRes";
import AccRes from "./AccRes";
const interact = require("../../utils/interact");
const { Box } = require("@mui/system");

const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState();
  const [showTxns, setShowTxns] = useState(false);
  const [searchRes, setSearchRes] = useState();
  const [txnList, setTxnArr] = useState([]);

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
              <BlockRes
                searchRes={searchRes}
                showTxns={showTxns}
                txnList={txnList}
              />
            ) : null}
            {type === "txn" ? 
              <TxnRes 
                searchRes={searchRes} 
              /> 
            : null}
            {type === "acc" ? 
              <AccRes 
                searchRes={searchRes} 
              /> 
            : null}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Result;
