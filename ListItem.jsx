import { useState } from "react";
import './todoCss.css';
import { FaTrashAlt } from "react-icons/fa";

export default function ListItem({id, content, onChange, onDelete, onEdit, listchecked, day}){
  const [ischecked, setChecked] = useState('unchecked');

  function handleClick(){
    if (ischecked==='checked') setChecked('unchecked');
    else setChecked('checked');
    onChange();
  }

  return (
   <li className="item">
      <div>
        <input type="checkbox" 
          name="listCheck" 
          className="listCheck"
          onClick={handleClick}
          checked={listchecked}
        />
        <span  style={{
          textDecorationLine : listchecked ?"line-through":"none"
        }}>
          {content}
        </span>
      </div>
      <button onClick={onDelete} className="Button"><FaTrashAlt className={`icon ${day}`}/></button>        

     
    </li>
  )
}