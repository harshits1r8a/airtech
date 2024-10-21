import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Header />
      <main className="flex w-full fixed gap-[1rem] top-[68px]">
        <Outlet/>
      </main>
    </>
  )
}

export default App
