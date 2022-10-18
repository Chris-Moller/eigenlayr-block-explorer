const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const verifiedContract = new Schema(

    {   
        sourceCode: {type: "string"},
        ABI: {type: "string"},
        deployCode: {type: "string"},
        
    },  
    {
        timestamps: "true"
    },
);

const Contract = mongoose.model("Contract", verifiedContract)

module.exports = Contract;