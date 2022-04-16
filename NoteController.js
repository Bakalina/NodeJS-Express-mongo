import NotesService from "./NotesService.js";


class NoteController {
    async create(req, res) {
        try {
            const note = await NotesService.create(req.body);
            res.json(note);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const notes = await NotesService.getAll();
            return res.json(notes);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const note = await NotesService.getOne(req.params.id);
            return res.json(note);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async update(req, res) {
        try {
            const updatedNote = await NotesService.update(req.body, req.params.id);
            return res.json(updatedNote);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const note = await NotesService.delete(req.params.id);
            return res.json(note);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async stats(req, res) {
        try {
            const notes = await NotesService.stats();
            return res.json(notes);
        } catch (e) {
            res.status(500).json(e);
        }
    }

}

export default new NoteController();