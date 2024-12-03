import { nanoid } from 'nanoid' //获取不重复的uuid
import './index.css'

export default function Header({addToDo}){

  // 定义添加任务功能 并且通过回车来提交任务内容
  function handleKeyUp(e){
    // 解构获取keyCode target
    const {keyCode, target} = e
    // 若按键不为回车 则返回空
    if(keyCode !== 13) return

    // 将输入的任务内容转换成todo对象 传递给App
    if(target.value.trim() === ''){     // 若输入的内容为空 则给出警告
      alert("任务内容不能为空!")
    }else{
      const todoObj = {
        id:nanoid(), 
        title:target.value,
        done: false
      }
      addToDo(todoObj)
    }
  }

  return (
    <div className='toDoList-Header'>
      <label>
        <input onKeyUp={handleKeyUp} className='text-input' type="text" placeholder='添加任务，按回车键确认' />
      </label>
    </div>
  )
}
