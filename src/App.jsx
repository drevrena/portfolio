import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CardgamePage from './pages/projects/CardgamePage'
import KanbanPage from './pages/projects/KanbanPage'
import ShoppywarePage from './pages/projects/ShoppywarePage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
          <Route index element={<HomePage/>} />
          <Route path="projects">
            <Route path="kanban" element={<KanbanPage/>}/>
            <Route path="shoppyware" element={<ShoppywarePage/>}/>
            <Route path="cardgame" element={<CardgamePage/>}/>
          </Route>
        </Route>
    )
)
  return <RouterProvider router={router}/>
}

export default App
