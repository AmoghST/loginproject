const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:string
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Notes = mongoose.model('notes', NotesSchema);
module.exports = Notes;