import React from 'react';
import PocketsContainer from './PocketsContainer'

const pockets = [
    { name: 'home', label: 'Home' },
    { name: 'car', label: 'Car' },
    { name: 'kids', label: 'Kids' },
    { name: 'medical', label: 'Medical'},
    { name: 'presents', label: 'Presents'},
    { name: 'debts', label: 'Debts'}
  ]

class PocketsPage extends React.Component {
    render() {
        return (
            <div class="grid-cols-1 w-9/12 gap-2">
                <PocketsContainer pockets={pockets} />
            </div>
        )
    }
}

export default PocketsPage