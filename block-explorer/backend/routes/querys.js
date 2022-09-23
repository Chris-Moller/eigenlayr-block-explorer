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
      while (limit > bN - 10) {
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
  getHomePGBlocks()
    .then((blocks) => res.json(blocks));
});

// router.route("/counter/type").post((req, res) => {
// });

module.exports = router;
