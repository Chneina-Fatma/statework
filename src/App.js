import React, { useState, useSyncExternalStore } from 'react'
import "./App.css"

function App() {
  const [show, setshow] = useState(false)
  const [Parents, setparents] = useState([
    {
     img1:"father.png",
    name1:"My Father",
    age1: 65,
   },
    {
     img1:"mother.png",
    name1:"My Mother",
    age1: 64,
   },])
    const [Brodhers, setstudent] = useState([
         {
          img:"brahim.jpg",
         name:"Brahim",
         age: 29,
        },
         {
          img:"mrwa.jpg",
         name:"Marwa",
         age: 30,
        },
         {
          img:"med.jpg",
         name:"Mohamed",
         age: 31,
        },
         {
          img:"meriem.jpg",
         name:"Meriem",
         age: 32,
        },
        ])
  return (
    <div>
<div className='click'><button className='btn' onClick={ ()=>setshow(!show) }><b>click here to show Parents</b></button></div>
 {show? <div className='container'>
{Parents.map((el)=> <div className='card'>
        <img src={el.img1}/>
        <h1>{el.name1}</h1>
        <h2>{el.age1}</h2>
</div>)}</div>: <div id='show'>my brodhers</div>}

    <div className='container'>
       {Brodhers.map((el)=> <div className='card'>
        <img src={el.img}/>
        <h1>{el.name}</h1>
        <h2>{el.age}</h2>
        </div>)}
    </div>
   
    </div>
  )
}

export default App