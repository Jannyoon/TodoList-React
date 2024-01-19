
import { useEffect, useState } from "react";
import { dataBases } from "./data/TodoData";
import ListItem from "./ListItem";
import './todoCss.css';
//localStorage.setItem("dataBases", JSON.stringify(dataBases)); 

export default function SectionContents({id, day}){
  const db = JSON.parse(localStorage.getItem("dataBases")) ?? [];
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState(db);


  let showTodoList = todoList.map((item)=>item);

  if (id===2){
    showTodoList = showTodoList.filter((item)=>!item.state);
  }
  else if (id===3){
    showTodoList = showTodoList.filter((item)=>item.state);
  }

  //로컬스토리지에 데이터를 저장한다
  useEffect(()=>{
    localStorage.setItem("dataBases", JSON.stringify(todoList)); 
    console.log(localStorage); //디버깅용
  }, [todoList])



  function handlePushClick(){
    let num = 0;
    if (todoList.length>0) num = todoList[todoList.length-1].id;
    
    setTodoList([...todoList, 
      {
        id : num+1,
        content : text,
        state : false
      }
    ])
    setText('');
  }

  
  function handleChangeCheckbox(id){
    setTodoList(todoList.length>0 && todoList.map((item)=>{
      if (item.id===id){
        return ({
          ...item, 
          state : !(item.state)
        })
      }
      else return item;
    }))
  }
  


  function handleDelete(id){
    setTodoList(todoList.filter(item => item.id!==id));
  }

  return (
    <>
      <section className="listContents">
        <ul> 
          {showTodoList.length>0 && showTodoList.map(data=>(
            <div key={data.id}>
              <ListItem 
                content={data.content}
                onChange = {()=>handleChangeCheckbox(data.id)}
                onDelete={()=>handleDelete(data.id)}
                listchecked={data.state}
                day = {day}
                
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
