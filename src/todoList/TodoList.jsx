import todoList from "./todoList.css";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";
import { todoRemaningSelector } from "../redux/selector";
const TodoList = () => {
    const todoLists = useSelector(todoRemaningSelector);

    return (
        <>
            <ul className="todoList">
                {todoLists.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        complete={todo.complete}
                    />
                ))}
            </ul>
        </>
    );
};
export default TodoList;
