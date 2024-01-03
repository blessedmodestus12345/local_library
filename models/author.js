const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth:{type: Date},
    date_of_death: {type: Date}
});

//virtuals for authors fullname(virtually concatenate the authors names)
AuthorSchema.virtual("name").get(function(){
    //To avoid errors in cases where the author does not not have firstname or lastname, we create as exception that handles the error by returning an empty string;
    let fullname = "";
    if(this.first_name && this.family_name){
        fullname= `${this.family_name}, ${this.first_name}`;
    }

    return fullname;
});
//virtual for author's url
AuthorSchema.virtual('url').get(function(){
    return `/catalog/author/${thid._id}`
})

//exporting my model
module.exports = mongoose.model('Author', AuthorSchema)
