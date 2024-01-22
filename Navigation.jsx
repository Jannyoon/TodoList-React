import SectionContents from './SectionContents.jsx';
import { useContext } from 'react';
import { DarkContext } from './context/DarkContext.jsx';
import { CiDark } from "react-icons/ci";
import { IoMdSunny } from "react-icons/io";
import { useState } from 'react';

export default function Navigation({onClick}){
  const [buttonKey, setButtonKey] = useState(0);
  const day = useContext(DarkContext);
  function handleChangeKey(num){
    setButtonKey(num);
  }


  return (
    <div className="navigation">
      <nav className="buttonBar">
        <button onClick={()=>onClick()} className='Button'>{
          day==='night' ?
          (<IoMdSunny style={{color : "white"}}/>):
          (<CiDark />)
        }</button>
        <div className='modeButton'>
          <button onClick={()=>handleChangeKey(1)}>All</button>
          <button onClick={()=>handleChangeKey(2)}>Active</button>
          <button onClick={()=>handleChangeKey(3)}>Completed</button>
        </div>
      </nav>
      <SectionContents key={buttonKey} id={buttonKey}/>
    </div>
  )
}