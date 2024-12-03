import Item from '../Item'
import './index.css'

export default function List({todos, updateToDo, deleteToDo}){
  return (
    <ul className='list-ul'>
      {
        todos.map(todo => <Item key={todo.id} {...todo} updateToDo={updateToDo} deleteToDo={deleteToDo}/>)
      }
    </ul>
  )
}
