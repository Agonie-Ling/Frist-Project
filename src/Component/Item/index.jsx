import { useState } from 'react'
import './index.css'

export default function Item({id, title, done, updateToDo, deleteToDo}){
 
  const [mouse, setMouse] = useState(false) // 定义鼠标移入、移出状态 默认为移出
  
  // 定义鼠标函数,更新鼠标状态 从而实现高亮以及删除按钮的显隐
  function handleMouse(flag){
    return ()=>{
      setMouse(flag)
    } 
  }

  // 定义checkbox的更新函数,id作为标识符
  function handleCheck(id){   
    return (e)=>{
      updateToDo(id, e.target.checked)
    }
  }

  // 定义删除任务按钮的删除功能,id作为标识符
  function handleButton(id){
    return ()=>{
        if(window.confirm("是否删除该任务")){
          deleteToDo(id)
        }
    }
  }

  return (
    <li style={{background: mouse?'#ddd':'white'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
      <div className='list-li'>
        <label>
          <input type="checkbox" className='checkbox-input' checked={done} onChange={handleCheck(id)} />
          {title}
        </label>
        <button className='delete-btn' style={{display: mouse?'block':'none'}} onClick={handleButton(id)}>删除任务</button> 
      </div>
    </li>
  )
}
