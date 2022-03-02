import "./App.css";
import Footer from "./footer/Footer";
import Todo from "./todo/Todo";
import TodoList from "./todoList/TodoList";
function App() {
    return (
        <>
            <h1>Todos</h1>
            <div className="main">
                <Todo />
                <TodoList />
                <Footer />
            </div>
        </>
    );
}

export default App;
