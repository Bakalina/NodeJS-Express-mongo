"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Notes = new mongoose_1.default.Schema({
    createDate: { type: String, required: true },
    date: { type: String, required: true },
    name: { type: String, required: true },
    select: { type: String, required: true },
    selectImage: { type: String, required: true },
    text: { type: String, required: true },
    active: { type: Boolean, required: true }
});
exports.default = mongoose_1.default.model('Notes', Notes);
