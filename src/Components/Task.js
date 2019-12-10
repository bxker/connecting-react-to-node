import React, { Component } from 'react'

export default class Task extends Component {
    constructor(){
        super()
        this.state={
            editStatus: false
        }
    }

    render() {
        return (
            <div style={{border: '1px solid black'}} key={this.props.id}>
                <h1>Task: {this.props.task_text}</h1>
                <h3>Description: {this.props.task_description}</h3>
                <button onClick={() => this.setState({editStatus: true})}>Edit</button>
                <button onClick={() => this.props.deleteTasks(this.props.id)}>Delete</button>
                {this.state.editStatus ? <div>
                    <input onChange={e => this.props.handleTextInput(e.target.value)}></input>
                    <input onChange={e => this.props.handleDescriptionInput(e.target.value)}></input>
                    <button onClick={() => this.props.editTasks(this.props.id)}>Approve Edit</button>
                </div>: null}
            </div>
        )
    }
}
