"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notes_1 = __importDefault(require("./Notes"));
class NotesService {
    create(note) {
        return Notes_1.default.create(note);
    }
    ;
    getAll() {
        return Notes_1.default.find();
    }
    ;
    getOne(id) {
        if (!id)
            throw new Error('not specified id');
        return Notes_1.default.findById(id);
    }
    ;
    update(note, id) {
        if (!id)
            throw new Error('not specified id');
        return Notes_1.default.findByIdAndUpdate(id, note, { new: true });
    }
    delete(id) {
        if (!id)
            throw new Error('not specified id');
        return Notes_1.default.findByIdAndDelete(id);
    }
    stats() {
        return Notes_1.default.aggregate([{ '$project': { 'text': 1, 'name': 1 } }]);
    }
}
exports.default = new NotesService();
