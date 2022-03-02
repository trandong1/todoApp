import { createSelector } from "@reduxjs/toolkit";

export const todolistSelector = (state) => state.todoList;
export const statusTodoListSelector = (state) => state.status;

export const todoRemaningSelector = createSelector(
    todolistSelector,
    statusTodoListSelector,
    (todoList, status) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return todo;
            }
            return status !== "All" && status === "Complete"
                ? todo.complete
                : !todo.complete;
        });
    }
);
