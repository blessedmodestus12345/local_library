const mongoose = require('mongoose');
//import schema class from mongoose library
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    
    title:{type:String, required:true},
    //the code below represent the author of the book and it's set up as a reference to another collection called Author
    authors: {type: Schema.Types.ObjectId, ref: "Author"},
    //summary or description of the book
    summary:{type:String, required:true},

    // represents the international standard book number
    isbn: {type:String, required:true},
    
    //an array of values, set up as reference to documents in the genre collection
    //This allows books to be associated with multiple genres
    genre: [{type:Schema.Types.ObjectId,ref:"Genre"}]
});

//virtula for the book's url
BookSchema.virtual("url").get(function(){
    return `/catalog/book/${this.id}`
});
module.exports = mongoose.model('Book', BookSchema)
