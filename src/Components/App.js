import React, { Component } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class App extends Component {
    render() {
        return (
            <div>
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}
