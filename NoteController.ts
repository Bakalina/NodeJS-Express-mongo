import NotesService from "./NotesService";
import { Request, Response } from "express";

class NoteController {

    async create(req: Request, res: Response) {
        try {
            const note = await NotesService.create(req.body);
            res.json(note);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const notes = await NotesService.getAll();
            return res.json(notes);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const note = await NotesService.getOne(req.params.id);
            return res.json(note);
        } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedNote = await NotesService.update(req.body, req.params.id);
            return res.json(updatedNote);
        } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const note = await NotesService.delete(req.params.id);
            return res.json(note);
        } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async stats(req: Request, res: Response) {
        try {
            const notes = await NotesService.stats();
            return res.json(notes);
        } catch (e) {
            res.status(500).json(e);
        }
    }

}

export default new NoteController();