import { useState } from "react";
import './todoCss.css';

export default function ListItem({content, onChange, onDelete, listchecked}){
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
      <button onClick={onDelete}>trashBin</button>
    </li>
  )
}