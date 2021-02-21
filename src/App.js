import React from 'react'
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'
import MainPanel from './MainPanel'
import PocketPanel from './PocketPanel'
import Grid from '@material-ui/core/Grid'

const items = [
  { name: 'home', label: 'Home' },
  { name: 'pockets', label: 'My Pockets' },
  { name: 'budget', label: 'Budget' },
]

function App() {
  return (
    <div class="app-container">
      <HeaderBar />
      <div class="content">
        <Sidebar items={items} />
        <div class="info-panel">
          <MainPanel />
          {/* <div class='pockets'> */}
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="flex-start" >
            <PocketPanel />
            <PocketPanel />
            <PocketPanel />
            <PocketPanel />
            <PocketPanel />
            <PocketPanel />
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default App