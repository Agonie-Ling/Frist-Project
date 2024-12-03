import React,{useState} from 'react';
import Header from './Component/Header'
import List from './Component/List'
import Footer from './Component/Footer'
import './App.css'

const initialTodos = [
    { id: 0, title: '吃饭', done: true },
    { id: 1, title: '睡觉', done: false },
    { id: 2, title: '跑步', done: false },
  ];

export default function App(){

    // 初始化状态
    const [todos, setToDos] = useState(initialTodos)

    // 添加任务 更新状态
    function addToDo(todoObj){
        const newToDos = [todoObj, ...todos]
        setToDos(newToDos)
    }

    // 更新任务内容 
    function updateToDo(id, done){
        const newToDos = todos.map((todo) => {
            if(todo.id === id){
                todo.done = done
            }
            return todo
        })
        setToDos(newToDos)
    }

    // 删除任务内容
    function deleteToDo(id){
        const newToDos = todos.filter(todo => todo.id !== id)
        setToDos(newToDos)
    }

    // 全选 or 取消全选 所有任务
    function selectToDo(flag){
        const newToDos = todos.map(todo => {
            todo.done = flag
            return todo
        })
        setToDos(newToDos)
    }

    // 删除已完成任务内容
    function deleteFinishToDo(){
        const newToDos = todos.filter(todo => todo.done !== true)
        setToDos(newToDos)
    }
    
    return(
        <div className="toDoList-main">
            <Header addToDo={addToDo} />
            <List todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
            <Footer todos={todos} deleteFinishToDo={deleteFinishToDo} selectToDo={selectToDo} />
        </div>
    )
}

