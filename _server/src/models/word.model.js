const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    en: { type: String, trim: true, required: true },
    vn: { type: String, trim: true, required: true },
    isRemember: { type: Boolean, default: false },
})

const WordModel = mongoose.model('Word', wordSchema);

class Word extends WordModel {
    static createWord(en, vn, isRemember) {
        const word = new Word({ en, vn, isRemember });
        return word.save();
    }
}

module.exports = { Word };
