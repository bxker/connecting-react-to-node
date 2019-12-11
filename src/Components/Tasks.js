import React, { Component } from 'react'
import axios from 'axios'
import Task from './Task'

export default class Tasks extends Component {
    constructor(){
        super()
        this.state={
            tasks: [],
            task_text: '',
            task_description: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/tasks').then(response => {
            this.setState({
                tasks: response.data
            })
        })
    }

    handleTextInput = (val) => {
        this.setState({task_text: val})
    }

    handleDescriptionInput = (val) => {
        this.setState({task_description: val})
    }

    addTasks = () => {
        const {task_text, task_description} = this.state
        axios.post('/api/tasks', {task_text, task_description}).then(response => {
            console.log(response)
            this.setState({
                tasks: response.data
            })
        })
    }

    editTasks = (id) => {
        console.log(id)
        const {task_text, task_description} = this.state
        axios.put(`/api/tasks/${id}`, {task_text, task_description}).then(response => {
            this.setState({
                tasks: response.data
            })
        })
    }

    deleteTasks = (id) => {
        axios.delete(`/api/tasks/${id}`).then(response => {
            this.setState({
                tasks: response.data
            })
        })
    }


    render() {
        let tasksMapped = this.state.tasks.map(task => {
            return (
                <Task
                    id={task.id}
                    task_text={task.task_text}
                    task_description={task.task_description}
                    editTasks={this.editTasks}
                    handleTextInput={this.handleTextInput}
                    handleDescriptionInput={this.handleDescriptionInput}
                    deleteTasks={this.deleteTasks}
                />
            )
            } )
        return (
            <div>
                <h1>Tasks</h1>
                <input onChange={e => this.handleTextInput(e.target.value)} placeholder="Add Task"></input>
                <input onChange={e => this.handleDescriptionInput(e.target.value)} placeholder="Description"></input>
                <button onClick={this.addTasks}>Add</button>
                {tasksMapped}
            </div>
        )
    }
}
