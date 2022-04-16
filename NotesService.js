import Note from "./Notes.js";

class NotesService {

    create(note) {
        return Note.create(note);
    };

    getAll() {
        return Note.find();
    };

    getOne(id) {
        if (!id) throw new Error('not specified id');
        return Note.findById(id);
    };

    update(note, id) {
        if (!id) throw new Error('not specified id');
        return Note.findByIdAndUpdate(id, note, {new: true});
    }

    delete(id) {
        if (!id) throw new Error('not specified id');
        return Note.findByIdAndDelete(id);
    }

    stats() {
        return Note.aggregate([{'$project': {'text': 1, 'name': 1}}]);
    }

}

export default new NotesService();
