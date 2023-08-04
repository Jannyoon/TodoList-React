import './App.css'
import React, {useState} from 'react';
import Child from './components/child';

export default function Parent(){
  const [total, setTotal] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const calTotal = ()=>{
    setTotal((prev)=>prev+1);
  }

  const calA = ()=>{
    setA((prev)=>prev+1);
  }
  const calB = ()=>{
    setB((prev)=>prev+1);
  }

  return (
    <div className='container'>
      <div className='result'>
        <div>A+B : {total}</div>
        <div>A-B : {a-b}</div>
      </div>
      <div className='child'>
        <Child clickFunction={calTotal} cal={calA} nowAlpha={'A'}/>
        <Child clickFunction={calTotal} cal={calB} nowAlpha={'B'}/>
      </div>
    </div>
  )
}