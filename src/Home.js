import React from 'react'
import MainPanel from './MainPanel'
import PocketsContainer from './PocketsContainer'

const pockets = [
    { name: 'home', label: 'Home' },
    { name: 'car', label: 'Car' },
    { name: 'kids', label: 'Kids' },
    { name: 'medical', label: 'Medical'},
    { name: 'presents', label: 'Presents'},
    { name: 'debts', label: 'Debts'}
  ]

class Home extends React.Component {
    render() {
        return (
            <div class="grid-cols-1 order-2 w-9/12 gap-2">
                <MainPanel />
                <PocketsContainer pockets={pockets} />
            </div>
        )
    }
}

export default Home