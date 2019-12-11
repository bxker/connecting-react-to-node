const express = require('express')
const app = express()
const port = 4000

//controller imports
const {getTasks, addTasks, updateTasks, deleteTasks} = require('./controllers/taskController')

// lets us use req.body
app.use(express.json())

//endpoints - full crud (get, post, put, delete)
app.get('/api/tasks', getTasks)
app.post('/api/tasks', addTasks)
app.put('/api/tasks/:id', updateTasks)
app.delete('/api/tasks/:id', deleteTasks)


app.listen(port, () => console.log(`Server listening on port ${port}`))