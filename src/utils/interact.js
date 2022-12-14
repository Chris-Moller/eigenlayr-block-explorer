const axios = require("axios").default;


const getBlocks = async () => {
  try {
    const queryArr = await axios.get(`http://localhost:5001/querys/latestblocks`);
    return queryArr.data;
  } catch (error) {
    return error;
  }

}

exports.getBlocks = getBlocks;

const search = async (val) => {
  try {
    const queryVal = await axios.get(`http://localhost:5001/querys/search/${val}`)
    return queryVal.data
  } catch (err) {
    return err;
  }

}

exports.search = search;


const checkVerify = async (source) => {
  try {
    const comp =  await axios.post(`http://localhost:5001/solc/compile`, {
      sourceCode: source
    })
    return comp.data
  } catch (error) {
    return error;
  }
}

exports.checkVerify = checkVerify;



// const eigenNode = "http://50.18.138.183:8545/";

// export const getHomePGBlocks = async () => {
//   let resArr = [];
//   try {
//     const res = await axios.post("http://50.18.138.183:8545/", {
//       jsonrpc: "2.0",
//       method: "eth_getBlockByNumber",
//       params: ["latest", true],
//       id: 1,
//     });
//     const bN = Number(ethers.BigNumber.from(res.data.result.number).toString());
//     let limit = bN - 1;
//     while (limit > bN - 10) {
//       try {
//         let hexLim = ethers.utils.hexlify(limit);
//         const res = await axios.post(eigenNode, {
//           jsonrpc: "2.0",
//           method: "eth_getBlockByNumber",
//           params: [`${hexLim}`, true],
//           id: 1,
//         });
//         limit -= 1;
//         resArr.push(res.data.result);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   } finally {
//     return resArr;
//   }
// };



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
