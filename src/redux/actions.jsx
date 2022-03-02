export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        payload: text,
    };
};

export const statusTodo = (checkbox) => {
    return {
        type: "STATUS",
        payload: checkbox,
    };
};
export const completeTodo = (id) => {
    return {
        type: "COMPLETE",
        payload: id,
    };
};

export const deleteTodo = (id) => {
    return {
        type: "DELETE",
        payload: id,
    };
};
export const deleteAllTodo = () => {
    return {
        type: "DELETEALL",
    };
};
export const checkdownTodo = () => {
    return {
        type: "CHECKDOWN",
    };
};
