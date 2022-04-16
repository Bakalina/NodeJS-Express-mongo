import Note from "./Notes";

class NotesService {

    create(note: object) {
        return Note.create(note);
    };

    getAll() {
        return Note.find();
    };

    getOne(id: string) {
        if (!id) throw new Error('not specified id');
        return Note.findById(id);
    };

    update(note: object, id: string) {
        if (!id) throw new Error('not specified id');
        return Note.findByIdAndUpdate(id, note, {new: true});
    }

    delete(id: string) {
        if (!id) throw new Error('not specified id');
        return Note.findByIdAndDelete(id);
    }

    stats() {
        return Note.aggregate([{'$project': {'text': 1, 'name': 1}}]);
    }

}

export default new NotesService();
