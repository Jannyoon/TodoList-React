import Navigation from './Navigation.jsx';
import { useState } from 'react';


export default function Main(){
  const [day, setDay] = useState("day");
  
  function handleClick(){
    console.log(day);
    if (day==="day"){
      console.log('다음은 night');
      setDay("night");
    }
    else{
      console.log('다음은 day');
      setDay("day");
    }
  }


  return (
    <>
      <div className={`main ${day}`}>
        <Navigation onClick={handleClick} day={day}/>
      </div>
    </>
  )
}