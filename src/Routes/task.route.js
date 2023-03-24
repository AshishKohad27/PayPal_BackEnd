const express = require("express");
const { addSprint, getSprint, deleteSprint } = require("../Controller/task.controller");
const taskRoute = express.Router();

taskRoute.get("/", async (req, res) => {
    const { flag, data, message, desc } = await getSprint();
    if (flag) {
        return res.status(201).send({ message, desc, data })
    } else {
        return res.status(401).send({ message, desc, data })
    }
})

taskRoute.post("/", async (req, res) => {
    const { name, startDate, endDate, sprintTasks } = req.body
    const { flag, data, message, desc } = await addSprint({ name, startDate, endDate, sprintTasks });
    if (flag) {
        return res.status(201).send({ message, desc, data })
    } else {
        return res.status(401).send({ message, desc, data })
    }
})

taskRoute.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const { flag, data, message, desc } = await deleteSprint({ id });
    if (flag) {
        return res.status(201).send({ message, desc, data })
    } else {
        return res.status(401).send({ message, desc, data })
    }
})

taskRoute.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const { } = req.body
    const { flag, data, message, desc } = await updateSprint({ id });
    if (flag) {
        return res.status(201).send({ message, desc, data })
    } else {
        return res.status(401).send({ message, desc, data })
    }
})

module.exports = taskRoute;