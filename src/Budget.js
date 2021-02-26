import React from 'react';
import MainPanel from './MainPanel'

class Budget extends React.Component {
    render() {
        return (
            <div class="grid-cols-1 w-9/12 gap-2">
                <MainPanel />
            </div>
        )
    }
}

export default Budget