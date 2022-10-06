const router = require("express").Router();
const axios = require("axios").default;


// router.route("/getblocks").get((req, res) => {
//   const getBlocks = async () => {
//     try {
//       const res = await axios.post(eigenWS, {
//         jsonrpc: "2.0",
//         method: "eth_subscribe",
//         params: ["newHeads"],
//         id: 2,
//       });

//       console.log(res)

//     } catch (err) {
//       console.log(err);
//     }
//     getBlocks().then((blocks) => res.json(blocks));
//   };
//   getBlocks()
// });

module.exports = router;
