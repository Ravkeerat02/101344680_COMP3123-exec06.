const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    noteTitle:{
        type:String,
        require:true,
    },
    noteDescription:{
        type:String,
    },
    priority:{
        type:String,
        pr:["High", "Low","Medium"]
    },
    dateAdded:{
        type:Date,
    },
    dateUpdated:{
        type:Date,
    }
});
//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

module.exports = mongoose.model('notes',noteSchema)
