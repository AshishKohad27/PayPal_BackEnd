const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    startDate: {
        type: String,
        require: true,
    },
    endDate: {
        type: String,
        require: true,
    },
    sprintTasks: {
        type: Array,
        require: true,
    },
});

const taskModel = model("task", taskSchema);

module.exports = taskModel;
