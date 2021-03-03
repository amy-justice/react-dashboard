import React from 'react'
import Pie2 from './piecharts/pie2'

function MainPanel() {
  return (
    <div class='container md:container-sm bg-white m-6 h-96 border-2 p-4 rounded-lg w-full md:w-full flex-initial'>
        <Pie2 />
    </div>
  )
}

export default MainPanel