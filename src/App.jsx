import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{ background: color }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 font-bold rounded-3xl'>

            <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ background: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ background: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ background: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ background: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
            <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ background: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ background: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ background: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ background: "teal" }}
              onClick={() => setColor("teal")}
            >
              Teal
            </button>
            <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ background: "brown" }}
              onClick={() => setColor("brown")}
            >
              Brown
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
