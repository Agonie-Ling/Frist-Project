const state = {
    todos: [
        { id: 0, title: 'Buy milk', done: true },
        { id: 1, title: 'Eat tacos', done: false },
        { id: 2, title: 'Brew tea', done: false },
    ]
}
const {todos} = state
const list = todos.filter(todo => todo.id !== 2)
console.log(list)
