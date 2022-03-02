import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/actions";
const TodoItem = ({ id, name, complete }) => {
    const [checkBox, setCheckBox] = useState(complete);

    const dispatch = useDispatch();
    const handleCheckbox = () => {
        setCheckBox(!checkBox);
        dispatch(completeTodo(id));
    };
    const handleClick = () => {
        dispatch(deleteTodo(id));
    };
    return (
        <div>
            <li className="todoItem">
                <div className="todoContainer">
                    <input
                        checked={checkBox}
                        type="checkbox"
                        className="toogle"
                        onChange={handleCheckbox}
                    />
                    <label
                        className="todoLabel"
                        style={{
                            textDecoration: checkBox && "line-through",
                            color: checkBox && "#ccc",
                        }}
                    >
                        {name}
                    </label>
                    <span className="todoRemove" onClick={handleClick}>
                        ×
                    </span>
                </div>
            </li>
        </div>
    );
};

export default TodoItem;
