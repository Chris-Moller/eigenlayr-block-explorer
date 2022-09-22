const axios = require('axios').default;
const { ethers } = require("ethers");

const eigenNode = "http://50.18.138.183:8545/"

const getHomePGBlocks = async () => {
    try {
        const res = await axios.post(eigenNode, {
          jsonrpc: "2.0",
          method: "eth_getBlockByNumber",
          params: ["latest", true],
          id: 1,
        });
        console.log(res.data.result);
      } catch (err) {
        console.log(err);
      }
    };

    getHomePGBlocks()

    // const getBalance = async () => {
    //     try {
    //         const res = await axios.post(eigenNode, {
    //           jsonrpc: "2.0",
    //           method: "eth_getBalance",
    //           params: ["0x339bd9107d62664f14622af9e9babd96c43601af", "latest"],
    //           id: 1,
    //         });
    //         console.log(res.data);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     };
    
    //     getBalance()
