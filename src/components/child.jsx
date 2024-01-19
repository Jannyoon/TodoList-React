import React, {useState} from 'react';
export default function Child({clickFunction, cal, nowAlpha}){
  const [number, setNumber] = useState(0);
  
  const clickEvent = ()=>{
    setNumber((prev)=>prev+1);
  }

  return (
    <div className='numContainer'>
      <p className='number'>{nowAlpha} : {number}</p>
      <button className='button' 
      onClick={()=>{
        clickEvent();
        clickFunction();
        cal();
        }}>
        Add+</button>
    </div>
  )
}