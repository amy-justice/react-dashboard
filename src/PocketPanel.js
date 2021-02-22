import React from 'react'

function PocketPanel({ label }) {
  return (
    <div class="bg-white rounded-lg p-4 border-2 h-24 font-semibold text-gray-700 text-center align-middle">
        <span class="text-2xl inline-block align-text-middle">
            00 / 00
        </span>
        <div class="align-text-bottom text-gray-400 mt-2">
            { label }
        </div>
    </div>
  )
}

export default PocketPanel