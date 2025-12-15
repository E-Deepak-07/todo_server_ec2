// define your model schema

import mongoose from "mongoose";

// todo document structure

const todoSchema = mongoose.Schema({
    todo:{ type: String, required: true, unique: true}
})

// we r creating collections with name cslled todos with todoSchema

const todoCollection= mongoose.model("todos",todoSchema)

export default todoCollection;