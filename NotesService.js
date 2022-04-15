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

    update(note) {
        if (!note._id) throw new Error('not specified id');
        return Note.findByIdAndUpdate(note._id, note, {new: true});
    }

    delete(id) {
        if (!id) throw new Error('not specified id');
        return Note.findByIdAndDelete(id);
    }

}

export default new NotesService();
