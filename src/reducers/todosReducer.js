import { ADD_TODO } from "../actions/types";

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo]);
        default:
            return state;
    }
};

export default todosReducer;
