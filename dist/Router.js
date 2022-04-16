"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const NoteController_1 = __importDefault(require("./NoteController"));
const router = express_1.default.Router();
router.get('/notes/stats', NoteController_1.default.stats);
router.post('/notes', NoteController_1.default.create);
router.get('/notes', NoteController_1.default.getAll);
router.get('/notes/:id', NoteController_1.default.getOne);
router.patch('/notes/:id', NoteController_1.default.update);
router.delete('/notes/:id', NoteController_1.default.delete);
exports.default = router;
