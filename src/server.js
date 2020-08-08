import "dotenv/config.js"
import express from "express.js"
import BullBoard from "bull-board.js"

import UserController from './app/controllers/UserController.js'
import Queue from "./app/lib/Queue.js"

const app = express()

BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

app.use(express.json())

app.post(`/users`, UserController.store)

app.use(`/admin/queues`, BullBoard.UI)

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})

module.exports = app