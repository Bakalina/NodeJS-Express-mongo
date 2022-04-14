import {Router} from "express";
import Note from "./Notes.js";
import NoteController from "./NoteController.js";

const router = new Router();

router.post('/notes', NoteController.create);
router.get('/notes');
router.get('/notes/:id');
router.put('/notes/:id');
router.delete('/notes/:id');

export default router;