import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteAllTodo, statusTodo } from "../redux/actions";
import footer from "./footer.css";

const Footer = () => {
    const [status, setStatus] = useState("All");

    const todoList = useSelector((state) => state.todoList);
    const result = todoList.filter((todo) => todo.complete);
    const btnRef = useRef();
    const dispatch = useDispatch();

    const buttonBtn = [
        {
            status: "All",
        },
        {
            status: "Active",
        },
        {
            status: "Complete",
        },
    ];
    const handleClick = (e) => {
        setStatus(e.target.value);

        dispatch(statusTodo(e.target.value));
        if (e.target.value) {
            btnRef.current.classList.add("active");
        }
    };
    const handleDelete = () => {
        dispatch(deleteAllTodo());
    };
    return (
        <div className="footer">
            <span className="footerAmount">{todoList.length} item left</span>
            <div className="footerBtn">
                {buttonBtn.map((btn, i) => (
                    <button
                        ref={btnRef}
                        key={i}
                        className="btn"
                        value={btn.status}
                        onClick={handleClick}
                    >
                        {btn.status}
                    </button>
                ))}
            </div>

            <button className="btn" onClick={handleDelete}>
                Clear
            </button>
        </div>
    );
};

export default Footer;
