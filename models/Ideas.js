const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema for Ideas 
const IdeaSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    date: { 
        type: Date,
        default: Date.now
    }
});

mongoose.model('ideas', IdeaSchema);