import React from 'react'
import PocketPanel from './PocketPanel'

function Pockets( {pockets} ) {
    return (
        <div class="container grid grid-cols-3 m-8 gap-6">
            {pockets.map(({ label, name, ...rest }) => (
                <PocketPanel label={label} />
            ))}
        </div>
    )
}

export default Pockets