import React from 'react'
import {
  Route,
  NavLink,
  Redirect,
  HashRouter,
  Switch
} from "react-router-dom";
import PocketsPage from "./PocketsPage"
import Budget from "./Budget"
import Home from './Home'
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'
import MainPanel from './MainPanel'
import PocketsContainer from './PocketsContainer'
import Routes from './Routes'

const pockets = [
  { name: 'home', label: 'Home' },
  { name: 'car', label: 'Car' },
  { name: 'kids', label: 'Kids' },
  { name: 'medical', label: 'Medical'},
  { name: 'presents', label: 'Presents'},
  { name: 'debts', label: 'Debts'}
]

function App() {
  return (
    <div class="container bg-white max-w-full">
      <HeaderBar />
      <div class="container h-full max-h-full">
        <HashRouter>
          <Routes />
        </HashRouter>
      </div>
    </div>
  )
}

export default App