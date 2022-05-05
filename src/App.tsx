import React, {useEffect} from "react";
import {Routes, Route} from "react-router";
import Layout from "./pages/Layout";
import {useActions} from "./hooks/useActions";
import TodoList from "./components/TodoList/TodoList";
import TodoBoard from "./components/TodoBoard/TodoBoard";

function App() {
    const {fetchUsers, fetchTodos} = useActions()
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<TodoList/>}/>
                <Route path="board" element={<TodoBoard/>}/>
            </Route>
        </Routes>
    );
}

export default App;
