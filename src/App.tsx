import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 text-center dark:bg-slate-900">
      <img src={reactLogo} className="h-24 animate-bounce" alt="React logo" />
      <h1 className="text-xl font-semibold dark:text-white">
        Vite + React + Tailwind
      </h1>

      <button
        className="rounded-full bg-cyan-500 px-6 py-2 font-semibold text-white
          hover:bg-cyan-600 focus:outline-none
          focus:ring focus:ring-cyan-800 active:bg-cyan-700"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  )
}

export default App
