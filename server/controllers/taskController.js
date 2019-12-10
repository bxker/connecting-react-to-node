let tasks = []
let id = 0

const getTasks = (req, res) => {
    res.status(200).json(tasks)
}

const addTasks = (req, res) => {
    const {task_text, task_description} = req.body
    tasks.push({
        task_text,
        task_description,
        id
    })
    id++
    res.status(200).json(tasks)
}

const updateTasks = (req, res) => {
    const {id} = req.params
    const {task_text, task_description} = req.body

    console.log(id)

    let taskIndex = tasks.findIndex(task => task.id === +id)
    tasks.splice(taskIndex, 1, {task_text: task_text, task_description: task_description})
    res.status(200).json(tasks)
}

const deleteTasks = (req, res) => {
    const {id} = req.params

    let taskIndex = tasks.findIndex(task => task.id === +id)
    tasks.splice(taskIndex , 1)
    res.status(200).json(tasks)
}

module.exports = {
    getTasks,
    addTasks,
    updateTasks,
    deleteTasks
}