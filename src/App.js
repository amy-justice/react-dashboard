import React from 'react'
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'
import MainPanel from './MainPanel'
import PocketPanel from './PocketPanel'
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <div class="container bg-gray-200 overflow-y-hidden">
      <HeaderBar />
      <div class="content">
        <Sidebar />
        <div class="grid-cols-1 w-9/12 gap-2">
          <MainPanel />
          <div class="container grid grid-cols-3 m-8 gap-6">
          {/* <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="flex-start" > */}
            <PocketPanel />
            <PocketPanel />
            <PocketPanel />
            <PocketPanel />
            <PocketPanel />
            <PocketPanel />
          {/* </Grid> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App