import { useState } from "react";
import './todoCss.css';

export default function ListItem({content, onDelete}){
  const [ischecked, setChecked] = useState('unchecked');

  function handleClick(){
    if (ischecked==='checked') setChecked('unchecked');
    else setChecked('checked');
  }

  return (
   <li className="item">
      <div>
        <input type="checkbox" 
          name="listCheck" 
          className="listCheck"
          onClick={handleClick}
        />
        <span  style={{
          textDecorationLine : ischecked==="checked"?"line-through":"none"
        }}>
          {content}
        </span>
      </div>
      <button onClick={onDelete}>trashBin</button>
    </li>
  )
}