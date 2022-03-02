const initialState = {
    status: "All",
    todoList: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        }
        case "STATUS": {
            return {
                ...state,
                status: action.payload,
            };
        }
        case "COMPLETE": {
            return {
                ...state,
                todoList: state.todoList.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, complete: !todo.complete }
                        : todo
                ),
            };
        }
        case "DELETE": {
            return {
                ...state,
                todoList: state.todoList.filter(
                    (todo) => todo.id !== action.payload
                ),
            };
        }
        case "DELETEALL": {
            return {
                ...state,
                todoList: state.todoList.filter((todo) => !todo.complete),
            };
        }
        // case "CHECKDOWN": {
        //     return {
        //         ...state,
        //         todoList: state.todoList.map((todo) => {
        //             return { ...todo, complete: !todo.complete };
        //         }),
        //     };
        // }
        default: {
            return state;
        }
    }
};

export default rootReducer;
