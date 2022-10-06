const router = require("express").Router();
const solc = require("solc");

router.route("/compile").post((req, res) => {
  const compileSource = async () => {
    try {
      const sourceCode = req.body.sourceCode;
      const input = {
        language: "Solidity",
        sources: {
          source: {
            content: `${sourceCode}`,
          },
        },
        settings: {
          outputSelection: {
            "*": {
              "*": ["*"],
            },
          },
        },
      };

      const output = JSON.parse(solc.compile(JSON.stringify(input)));
      for (const key in output.contracts.source) {
        if (Object.hasOwnProperty.call(output.contracts.source, key)) {
          const element = output.contracts.source[key];
          return [element.evm.bytecode.object, element.abi];
        }
      }
    } catch (error) {
      return error;
    }
  };
  compileSource().then((result) => res.json(result));
});

module.exports = router;
