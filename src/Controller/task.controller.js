const taskModel = require("../Model/task.model");

const getSprint = async () => {
    try {
        const data = await taskModel.find({});

        return {
            flag: true,
            data,
            message: "Sprint Get Successfully",
            desc: "",
        };
    } catch (e) {
        return {
            flag: false,
            message: "Error!",
            data: [],
            desc: e.message,
        };
    }
};

const addSprint = async ({ name, startDate, endDate, sprintTasks }) => {
    try {
        const createData = new taskModel({ name, startDate, endDate, sprintTasks });
        await createData.save();

        const data = await taskModel.find({});

        return {
            flag: true,
            data,
            message: "Sprint added Successfully",
            desc: "",
        };
    } catch (e) {
        return {
            flag: false,
            message: "Error!",
            data: [],
            desc: e.message,
        };
    }
};

const deleteSprint = async ({ id }) => {
    console.log('id:', id)
    try {
        await taskModel.findByIdAndDelete({ _id: id });
        const data = await taskModel.find({});

        return {
            flag: true,
            data,
            message: "Sprint Delete Successfully",
            desc: "",
        };
    } catch (e) {
        return {
            flag: false,
            message: "Error!",
            data: [],
            desc: e.message,
        };
    }
};

module.exports = { addSprint, getSprint, deleteSprint };
