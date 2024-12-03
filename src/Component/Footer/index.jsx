import './index.css'

export default function Footer({todos, deleteFinishToDo, selectToDo}){

  // 定义完成任务的数量与总任务数量
  const doneCount = todos.reduce((i, todo) => todo.done ? i + 1 : i, 0)
  const total = todos.length

  // 若checked为true 则全选任务 若为false 则取消所有任务的勾选
  function handleCheck(e){
    selectToDo(e.target.checked)
  }

  return (
    <div className='toDoList-footer'>
      <label>
        <input type="checkbox" className='checkbox-input' onChange={handleCheck} checked={doneCount===total && total !== 0 ? true : false} />
        已完成{doneCount}/总任务{total}
      </label>
      <button className='finish-btn' onClick={deleteFinishToDo}>删除已完成的任务</button>
    </div>
  )
}
