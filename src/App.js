import React from 'react'
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'
import MainPanel from './MainPanel'
import Pockets from './Pockets'

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
    <div class="container bg-gray-200">
      <HeaderBar />
      <div class="content">
        <Sidebar />
        <div class="grid-cols-1 w-9/12 gap-2">
          <MainPanel />
          <Pockets pockets={pockets} />
        </div>
      </div>
    </div>
  )
}

export default App