import React from 'react'
import PocketPanel from './PocketPanel'

function PocketsContainer( {pockets} ) {
    return (
        <div class="container grid lg:grid-cols-3 grid-cols-2 m-6 gap-6">
            {pockets.map(({ label, name, ...rest }) => (
                <PocketPanel label={label} />
            ))}
        </div>
    )
}

export default PocketsContainer