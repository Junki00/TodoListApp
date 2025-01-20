"use client"
import '../App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";
import { Todo } from "../type";


export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      done: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    }));
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.done)
      case 'done':
        return todos.filter(todo => todo.done)
      default:
        return todos;
    }
  }

  return (
    <div>
      <main className="todo-app">
        <h1 className="todo-title">タスク管理</h1>
        <h5 className="todo-subtitle">タスクを管理しましょう</h5>
        <AddTodo addTodo={addTodo}></AddTodo>
        <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
        <TodoFilter setFilter={setFilter}></TodoFilter>
        <div className="footer">
          Built with TypeScript & React, by RUNXI DENG (JUNKI)
        </div>
      </main >
    </div>

  );
}
