import mongoose from "mongoose";

//creating a Schema of list.js
const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    img:String,
    title:String
})

// creating a modal of schema
const Book = mongoose.model('Book', bookSchema);

export default Book;