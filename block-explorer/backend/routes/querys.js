const router = require("express").Router();
const axios = require("axios").default;
const { ethers } = require("ethers");

const eigenNode = "http://50.18.138.183:8545/";

router.route("/latestblocks").get((req, res) => {
  const getHomePGBlocks = async () => {
    let resArr = [];
    try {
      const res = await axios.post(eigenNode, {
        jsonrpc: "2.0",
        method: "eth_getBlockByNumber",
        params: ["latest", true],
        id: 1,
      });
      const bN = Number(
        ethers.BigNumber.from(res.data.result.number).toString()
      );
      let limit = bN - 1;
      while (limit > bN - 11) {
        try {
          let hexLim = ethers.utils.hexlify(limit);
          const res = await axios.post(eigenNode, {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: [`${hexLim}`, true],
            id: 1,
          });
          limit -= 1;
          resArr.push(res.data.result);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      return resArr;
    }
  };
  getHomePGBlocks().then((blocks) => res.json(blocks));
});

router.route("/search/:val").get((req, res) => {
  const val = req.params.val;
  const first = val.substring(0,2)
  const getRes = async () => {
    if (first === "0x") {
      if (val.length === 66) {
        try {
          const res = await axios.post(eigenNode, {
            jsonrpc: "2.0",
            method: "eth_getTransactionByHash",
            params: [`${val}`],
            id: 1,
          });
          return [res.data.result, {type: "txn"}];
        } catch (err) {
          console.log(err);
        }
      } else if (val.length === 42) {
        try {
          const res = await axios.post(eigenNode, {
            jsonrpc: "2.0",
            method: "eth_getCode",
            params: [`${val}`, "latest"],
            id: 1,
          });
          const bal = await axios.post(eigenNode, {
            jsonrpc: "2.0",
            method: "eth_getBalance",
            params: [`${val}`, "latest"],
            id: 1,
          });
          return [val, res.data.result, bal.data.result, {type: "acc"}];
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      try {
        const res = await axios.post(eigenNode, {
          jsonrpc: "2.0",
          method: "eth_getBlockByNumber",
          params: [ethers.BigNumber.from(val).toHexString(), true],
          id: 1,
        });
        return [res.data.result, {type: "block"}];
      } catch (err) {
        console.log(err);
      }
    }
  };
  getRes().then((txn) => res.json(txn));
});

// router.route("/counter/type").post((req, res) => {
// });

module.exports = router;
