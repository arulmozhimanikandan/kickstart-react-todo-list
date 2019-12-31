import React from 'react';
import './App.css';
import TodoItem from "./components/TodoItem";

class App extends React.Component {

    state = {
        todoInputValue: "",
        todoList: []
    };

    onTodoEnter(e) {
        if (e.key === 'Enter') {
            this.setState({
                todoList: [...this.state.todoList, {
                    "id": Math.random().toString(36).substr(2, 5),
                    "text": this.state.todoInputValue,
                    "completed": false
                }]
            })
          this.setState({todoInputValue:""})
        }
    }

    setComplete = (key) => {
        const modifiedTodoList = [...this.state.todoList]
      modifiedTodoList.find(item => item.id === key).completed = true;
        this.setState({todoList: modifiedTodoList})
    }

    render() {
        return (
            <div className="todo-container">
                <h1>TodoList</h1>
                {this.state.todoList.map(todoItem =>
                  todoItem.completed === false && (<TodoItem text={todoItem.text} id={todoItem.id} onComplete={this.setComplete}/>)
                )}
                <input type="text" placeholder="Type your todo here" className="todoInput" value={this.state.todoInputValue}
                       onChange={(e) => this.setState({todoInputValue: e.target.value})}
                       onKeyPress={(event) => this.onTodoEnter(event)}/>
            </div>
        )
    }
}

export default App;
