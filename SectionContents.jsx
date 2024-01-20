
import { useEffect, useState } from "react";
import { dataBases } from "./data/TodoData";
import ListItem from "./ListItem";
import {v4 as uuidv4} from "uuid";
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



  function handleSubmit(e){
    e.preventDefault();
    let num = uuidv4();
    if (text.trim()==='') return;
    setTodoList([...todoList, 
      {
        id : num+1,
        content : text.trim(),
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

  function handleClean(){
    setTodoList(todoList.filter(item => !item.state))
  }

  return (
    <>
      <section className="listContents">
        <ul> 
          {showTodoList.length>0 && showTodoList.map(data=>(
            <div key={data.id}>
              <ListItem 
                id = {data.id}
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
        {id===3 && <button onClick={handleClean}>Clean</button>}
      </section> 
      <form className="myinput" onSubmit={handleSubmit}>
        <input 
          value={text}
          placeholder="Add To Do"
          type="text" 
          className="myinputArea" 
          onChange={e=>setText(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </form> 
    </>
  )
}
