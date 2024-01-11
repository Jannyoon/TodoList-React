
import { useState } from "react";
import { dataBases } from "./data/TodoData";
import ListItem from "./ListItem";
import './todoCss.css';

export default function SectionContents(){
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState(dataBases);

  function handlePushClick(){
    let num = todoList[todoList.length-1].id;
    setTodoList([...todoList, 
      {
        id : num+1,
        content : text,
        state : false
      }
    ])
    setText('');
  }

  /*
  function handleChangeCheckbox(id){
    setTodoList(todoList.map((item)=>{
      if (item.id===id){
        return ({
          ...item, 
          state : !(item.state)
        })
      }
      else return item;
    }))
  }
  */


  function handleDelete(id){
    setTodoList(todoList.filter(item => item.id!==id));
  }

  return (
    <>
      <section className="listContents">
        <ul> 
          {todoList.map(data=>(
            <div key={data.id}>
              <ListItem 
                content={data.content}
                onDelete={()=>handleDelete(data.id)}
              />            
            </div>
            )
          )}
        </ul>
      </section> 
      <div className="myinput">
        <input 
          value={text}
          type="text" 
          className="myinputArea" 
          onChange={e=>setText(e.target.value)}
        />
        <button onClick={handlePushClick}>Add</button>
      </div> 
    </>
  )
}
