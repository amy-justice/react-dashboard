import React from 'react'
import {
  Route,
  NavLink,
  Redirect,
  Router,
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
    <Router>
      <Routes />
    </Router>
    // <Router>
    //   <div class="container bg-white max-w-full">
    //   <HeaderBar />
    //   <div class="container flex flex-row bg-gray-100 h-full max-h-full">
    //       <Sidebar />
    //     <div class="grid-cols-1 w-9/12 gap-2">
    //       <Switch>
    //       <Route exact path="/Home" component={Home} />
    //       <Route exact path="/">
    //         <Redirect to="/Home" />
    //       </Route>
    //       <Route exact path="/Pockets" component={PocketsPage} />
    //       </Switch>
    //       <MainPanel />
    //       <PocketsContainer pockets={pockets} />
    //     </div>
    //   </div>
    // </div>
    // </Router>
  )
}

export default App