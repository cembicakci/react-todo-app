import React, { useState } from "react";
import ToDo from "./ToDo";

function Main({ todos, deleteTodo}) {

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    todos.map((todo, index) => (
                        <ToDo todo={todo} id={index} index={index} key={index} deleteTodo={deleteTodo} />
                    ))
                }
            </ul>

        </section>
    )
}

export default Main;