import {useState} from "react";

function ToDo({ todo, deleteTodo, id, setTodos, todos }) {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <li className={`${isChecked ? "completed" : ""}`}>
            <div className="view">
                <input className="toggle" type={'checkbox'} checked={isChecked} onChange={handleOnChange}></input>
                <label>{todo}</label>
                <button className="destroy" onClick={() => {
                    deleteTodo(id)
                    setIsChecked(false);
                }}></button>
            </div>
        </li>
    )

}

export default ToDo;