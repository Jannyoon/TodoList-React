import { useState, useEffect } from 'react';
import Navigation from './Navigation.jsx';

export default function Main(){
  const localDay = localStorage.getItem("nowDay") ?? "day"; //초기값은 day다
  const [nowday, setNowDay] = useState(localDay);
  useEffect(()=>{
    localStorage.setItem("nowDay", nowday);
  },[nowday])

  function handleClick(){
    console.log(nowday);
    if (nowday==="day"){
      console.log('다음은 night');
      setNowDay("night");
    }
    else{
      console.log('다음은 day');
      setNowDay("day");
    }

  }


  return (
    <>
      <div className={`main ${nowday}`}>
        <Navigation onClick={handleClick} day={nowday}/>
      </div>
    </>
  )
}