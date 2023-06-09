import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from './Dropdown'
import PersonList from './PersonList';
import PersonSearch from './PersonSearch';

function App() {

  return (
    <div className="App">
      <header className='w-5/5 h-100'>
        <div>
            <div className='hidden lg:flex lg:flex-row lg:gap-10'>
                <a href="#" className='lg:hover:underline'>home</a>
                <a href="#" className='lg:hover:underline'>about</a>
                <a href="#" className='lg:hover:underline'>contact</a>
            </div>
        
        <Dropdown/>

        </div>
      </header>
      <main className='w-5/5 h-max mt-10'>
        <div>

          <h1>Expandable List of Persons</h1>
          <PersonList />

          <h1 className='mt-10'>Person Search</h1>
          <PersonSearch />

        </div>
      </main>
      <footer className='w-5/5 h-100'>
        
      </footer>
    </div>
  )
}

export default App
