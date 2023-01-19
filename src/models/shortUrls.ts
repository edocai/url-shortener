import mongoose from "mongoose";
import shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
});

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

