import React, { Component } from "react";
import { connect } from "react-redux"; // this is an higher order component. This component wraps an existing component and returns new component with new features.

import addTodo from "../actions"; // import action creator

class TodoForm extends Component {
    state = {
        todo: ""
    };
    handleFormSubmit = event => {
        event.preventDefault();

        this.props.onAddTodo(this.state.todo); // accessing dispatch from props

        this.setState({
            todo: ""
        });
    };
    render() {
        return (
            <div>
                <h1>Add New Todo</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type="text"
                        value={this.state.todo}
                        onChange={event => this.setState({ todo: event.target.value })}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: todo => dispatch(addTodo(todo))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TodoForm);
