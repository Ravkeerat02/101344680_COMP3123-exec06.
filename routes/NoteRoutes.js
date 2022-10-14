const noteModel = require('../models/NotesModel.js');
const express = require('express');
const routes = express.Router();
const moongoose = require('mongoose');

/*
{
    noteTtile: "Lab6",
    noteDescription : "Lab based on MongoDB & nodeJS"
    priority: "High",
    dateAdded: "10-14-22",
    "dateCreated": "10-14-22",
}
*/

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async(req, res) => {
    //TODO - Write your code here to save the note
    const notes = new noteModel(req.body);
    try{
        await notes.save();
        res.status(200).send(notes);
    }catch(error){
        res.status(500).send(error)
    }
});

//TODO - Retrieve all Notes
routes.get('/notes',async(req, res) => {
    //TODO - Write your code here to returns all note
    const notes = await noteModel.find()
    try{
        res.status(200).send(notes);
    }catch(error){
        res.status(500).send(error);
    }
});

//TODO - Retrieve a single Note with noteId
routes.get('/notes/:noteId', async(req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
    try{
        res.send(await noteModel.findById(req.params.noteid,req.body));
    }catch(error){
        res.status(500).send(error);
    }
});

//TODO - Update a Note with noteId
routes.patch("/notes/:noteId", async (req, res) => {
    //res.send({message: "Update existing Book By Id"})

    try {
        const updatedNote = await noteModel.findByIdAndUpdate(req.params.bookid, req.body)
        //const book = await newBook.save()
        res.status(201).send(updatedNote)
    } catch (error) {
        res.status(400).send(error)
    }
})


//TODO - Delete a Note with noteId

routes.delete('/notes/:noteId', async(req, res) => {
    // Validate request
    //TODO - Write your code here to delete the note using noteid
    try {
        const deletedNote= await noteModel.findByIdAndDelete(req.params.noteid,req.body);
        if (!deletedNote) {
            res.status(201).send({message: "No note to Delete"})
        }
      } catch (err) {
        res.status(500).send(err)
    }

});

module.exports = routes
