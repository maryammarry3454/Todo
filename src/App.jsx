"use client"
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
 const [titel, settitel] = useState("")
 const [desc,setdesc ] = useState("")
 const [mainTask, setMainTask] = useState([])

 const submitHandler=(e)=>{
e.preventDefault()
setMainTask([...mainTask,{titel,desc}]);
settitel("")
setdesc("")
console.log(mainTask)

 }

 let renderTask=<h2>No Task Available</h2>

 renderTask=mainTask.map((t,i)=>{
 return <div className="flex justify-between">
  <h5>{t.titel} </h5>
  <h6>{t.desc}</h6>
</div>
 })
  return (
    <>
    <h1 className='bg-black
    text-white p-5 text 5xl font-bold text-center'> Maryam Nawaz Todo list </h1>
    <form onSubmit={submitHandler}>
<input type="text"className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
placeholder="Enter titel here"
value={titel}
onChange={(e)=>{
  settitel(e.target.value)
}}
/>
<input type="text"className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
placeholder="Enter description here"
value={desc}
onChange={(e)=>{
  setdesc(e.target.value)
}}

/>
<button className="bg-black text-white px-4 py-3 text-2x1 font-bold rounded m-5">Add task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
<ul>
  {renderTask}
</ul>
    </div>
    </>
  )
}

export default App
