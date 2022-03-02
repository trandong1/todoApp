import { KeyboardArrowDownOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, checkdownTodo } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import todo from "./todo.css";
import { useSelector } from "react-redux";
import { todolistSelector } from "../redux/selector";
const Todo = () => {
    const [input, setInput] = useState("");
    const todoList = useSelector(todolistSelector);
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setInput(e.target.value);
    };
    const handleAdd = (e) => {
        if (e.keyCode === 13 && e.target.value.length > 0) {
            e.preventDefault();
            dispatch(
                addTodo({
                    id: uuidv4(),
                    name: input,
                    complete: false,
                })
            );
            setInput("");
        }
    };
    const handleClick = () => {
        dispatch(checkdownTodo());
    };
    return (
        <div className="todo">
            {todoList.length > 0 && (
                <KeyboardArrowDownOutlined
                    className="todoIcon"
                    onClick={handleClick}
                />
            )}
            <input
                style={{
                    padding: todoList.length > 0 && "16px 12px 16px 12px",
                }}
                type="text"
                placeholder="What needs to be done?"
                className="todoInput"
                value={input}
                onChange={handleInput}
                onKeyUp={handleAdd}
            />
        </div>
    );
};
export default Todo;
