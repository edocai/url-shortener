import mongoose from "mongoose";
//a library that creates a unique short identifier
import shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  //keys are columns
    full: {
      //type of column
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        //generates short id
        default: shortId.generate,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
});

//hooks up database and model
module.exports = mongoose.model("ShortUrl", shortUrlSchema);
export function find() {
  throw new Error("Function not implemented.");
}

export function create(arg0: { full: any; }) {
  throw new Error("Function not implemented.");
}

export function findOne(arg0: { short: any; }) {
  throw new Error("Function not implemented.");
}

