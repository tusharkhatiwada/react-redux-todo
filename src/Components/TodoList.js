import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
    renderTodoLists = () => {
        return this.props.todos.map((todo, i) => {
            return <li key={i}>{todo}</li>;
        });
    };
    render() {
        return (
            <div>
                <h3>Todo Lists</h3>
                <ul>{this.renderTodoLists()}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps)(TodoList);
