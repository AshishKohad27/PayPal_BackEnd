const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    assignedBy: {
        type: String,
        require: true,
    },
    assignedTo: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    sprintId: {
        type: String,

    },
    sprintName: {
        type: String,
    }

});

const taskModel = model("task", taskSchema);

module.exports = taskModel;
