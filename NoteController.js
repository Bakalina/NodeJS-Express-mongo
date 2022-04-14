import Note from "./Notes.js";


class NoteController {
    async create(req, res) {
        try {
            const {createDate, date, name, select, selectImage, text, active} = req.body;
            const post = await Note.create({createDate, date, name, select, selectImage, text, active});
            res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }


}

export default new NoteController();