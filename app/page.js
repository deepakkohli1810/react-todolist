"use client" 
import React, { useState } from 'react'

const page = () => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [maintask, setMaintask] = useState([]);

 const    submitHandler = (e) =>{

    e.preventDefault();
    setMaintask([...maintask , { title , desc}])
    setTitle("");
    setDesc("");
    console.log(maintask)

 }
  
 const deleteHandler =(i) => {
  let copyTask = [...maintask]
  copyTask.splice(i,1);
  setMaintask(copyTask)
 }
 let renderTask = <h2>No task available</h2>
 
if(maintask.length>0){
    renderTask = maintask.map((t,i)=>{
        return (
            <li key={i} className='flex items-center justify-between mb-8'>
                <div className='flex items-center justify-between mb-5 w-2/3'>
             <h2 className='text-2xl font-semibold' >{t.title}</h2>
             <h4 className='text-xl '>{t.desc}</h4>
             <button onClick={()=>{
                deleteHandler(i)
             }} className='bg-red-400 py-3 px-5 rounded font-bold text-white'>Delete</button>
            </div>
           
            </li>
        )
    })
}

  return (
   <>
   <h1  className='bg-black text-white
   py-5 px-5 text-5xl font-bold text-center'>Deepak's TO DO LIST</h1> 

    <form onSubmit={submitHandler}>
        <input type="text" className="text-2xl border-zinc-700 border-2 m-5 px-4 py-2 rounded-xl "
       placeholder="Enter your Task"
        value={title}
        onChange={(e)=>{
           setTitle(e.target.value)
        }}
        />
         <input type="text" className="text-2xl border-zinc-700 border-2 m-5 px-4 py-2 rounded-xl "
       placeholder='Enter description here'
       value={desc}
       onChange={(e)=>
        {
        setDesc(e.target.value)
        }
       }
       />
       <button  className='bg-black text-white px-5 py-2 ml-5  text-2xl rounded '>
        Add Tast
       </button>
    </form>
  <hr />
    <div className='p-8 mt-10 ml-20 mr-20 rounded-xl bg-slate-100 border-1 border-r-emerald-700'>
      <ul>
        {renderTask}
      </ul>
    </div>
   </>
  )
}

export default page
