"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = exports.create = exports.find = void 0;
const mongoose_1 = require("mongoose");
//a library that creates a unique short identifier
const shortId = require("shortid");
const shortUrlSchema = new mongoose_1.default.Schema({
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
module.exports = mongoose_1.default.model("ShortUrl", shortUrlSchema);
function find() {
    throw new Error("Function not implemented.");
}
exports.find = find;
function create(arg0) {
    throw new Error("Function not implemented.");
}
exports.create = create;
function findOne(arg0) {
    throw new Error("Function not implemented.");
}
exports.findOne = findOne;
//# sourceMappingURL=shortUrls.js.map