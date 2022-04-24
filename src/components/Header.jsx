import React, { useState } from "react";

function Header({todos, setTodos}) {

    const [todoValue, setTodoValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(todoValue === ""){
            return false;
        }

        setTodos([...todos, todoValue]);
        setTodoValue("");

    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input className="new-todo" placeholder="What needs to be done?" onChange={(e) => setTodoValue(e.target.value)} value ={todoValue}/>
            </form>
        </header>
    )
}

export default Header;