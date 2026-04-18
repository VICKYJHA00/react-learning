import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setdetail] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const copytask = [...task];
    copytask.push({
      title,
      detail
    })
    settask(copytask);
    console.log(task);
    setTitle('');
    setdetail('');
  }

  const deleteNote = (index) => {
    const copytask = [...task];
    copytask.splice(index, 1);
    settask(copytask);
  }

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center gap-16 p-10'>

      {/* FORM SECTION */}
      <form
        onSubmit={submitHandler}
        className='flex items-center gap-10 bg-zinc-900 p-8 rounded-2xl shadow-lg'
      >
        <div className='flex flex-col gap-5 w-72'>

          <h1 className='text-2xl font-semibold'>Add Note</h1>
          {/* Heading input  */}
          <input
            type="text"
            placeholder='Enter task heading'
            className='px-4 py-2 border border-zinc-600 bg-transparent rounded-lg outline-none focus:border-white'
           value ={title}
           onChange={(e) => {
              setTitle(e.target.value);
           }}
          />

          {/* Description input */}
          <textarea
            placeholder='Task description'
            className='px-4 py-2 h-24 border border-zinc-600 bg-transparent rounded-lg outline-none focus:border-white'
            value ={detail}
            onChange={(e) =>{
              setdetail(e.target.value)
               
            }}
          />

          <button className='bg-white active:bg-black text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition'>
            Add Note
          </button>

        </div>

        

      </form>

      {/* NOTES SECTION */}
      <div className='bg-zinc-900 p-8 rounded-2xl shadow-lg w-100'>

        <h1 className='text-2xl font-semibold mb-6'>Your Notes</h1>

        <div className='grid grid-cols-2 gap-4'>
          {task.map((item, index) => {
            return (
              <div key={index} className='h-32 rounded-xl bg-white p-4 text-black'>
                <h2 className='text-lg font-semibold mb-2'>{item.title}</h2>
                <p>{item.detail}</p>
                <button onClick={(idx) =>{
                  deleteNote(index);
                }} className='bg-black cursor-pointer active:scale-95 text-white py-1 px-3 rounded-lg font-medium hover:bg-gray-800 transition'>
                  Delete
                </button>
              </div>
            )
          }

          )}

        </div>

      </div>

    </div>
  )
}

export default App