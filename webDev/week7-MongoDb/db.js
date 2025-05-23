const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const User = new Schema ({
    name: {type: String, unique:true },
    email: String,
    password: String
});

const Todo = new Schema ({
    userId: ObjectId,
    title: String,
    done: Boolean
});


const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}