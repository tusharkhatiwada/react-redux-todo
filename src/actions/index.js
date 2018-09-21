import { ADD_TODO } from "./types";

// this is an action creator
export default function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    };
}
