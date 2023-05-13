import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className='w-5/5 h-100'>
        <div>

        <button data-dropdown-toggle="dropdown" className="flex flex-row lg:hidden" type="button">Links <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div className='flex flex-col gap-10 lg:flex lg:flex-row lg:gap-10'>
            <a href="#" className=''>home</a>
            <a href="#" className=''>about</a>
            <a href="#" className=''>contact</a>
            </div>

        </div>
      </header>
      <main className='w-5/5 h-max'>

      </main>
      <footer className='w-5/5 h-100'>
        
      </footer>
    </div>
  )
}

export default App
