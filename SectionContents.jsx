
import { useState } from "react";

export default function SectionContents(){
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState(dataBases);

  function handlePushClick(){
    let num = todoList[todoList.length-1].id;
    setTodoList([...todoList, {
      id : num+1,
      content : text,
      state : false
    }])
    setText('');
  }

  function handleDelete(id){
    setTodoList(todoList.filter(item => item.id!==id));
  }

  return (
    <>
      <section className="listContents">
        <ul>
          {todoList.map((data)=>(
            <li key={data.id} id={data.id} className="liData">
              <div>
                <input type="checkbox" name="listCheck"/>
                <span>{data.content}</span>
              </div>
              <button onClick={()=>handleDelete(data.id)}>trashBin</button>
            </li>
            )
          )}
        </ul>
      </section> 
      <div className="myinput">
        <input 
          value={text}
          type="text" 
          className="myinput" 
          onChange={e=>setText(e.target.value)}
        />
        <button onClick={handlePushClick}>Add</button>
      </div> 
    </>
  )
}

let dataBases = [
  {
    id : 0,
    content : '강의 보기',
    state : false
  },
  {
    id : 1,
    content : '카페 가기',
    state : false
  }
]