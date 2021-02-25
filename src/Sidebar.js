import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faWallet, faCoins } from '@fortawesome/free-solid-svg-icons'


function Sidebar( {items} ) {
  return (
    <div class="flex flex-col sm:flex-row sm:justify-around">
        <div class="sm:w-1/5 min-w-min lg:w-64 h-full bg-white">
            <nav class="mt-10">
                <a class="flex items-center py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-purple-600" href="#">
                    <div class="text-purple-800"><FontAwesomeIcon icon={faHome} /></div>

                    <span class="mx-4 font-medium text-sm hidden md:inline lg:text-base">Home</span>
                </a>

                <a class="flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-purple-600" href="#">
                    <div class="text-purple-800"><FontAwesomeIcon icon={faWallet} /></div>

                    <span class="mx-4 font-medium text-sm hidden md:inline lg:text-base">Pockets</span>
                </a>

                <a class="flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-purple-600" href="#">
                    <div class="text-purple-800"><FontAwesomeIcon icon={faCoins} /></div>

                    <span class="mx-4 font-medium text-sm hidden md:inline lg:text-base">Budget</span>
                </a>
            </nav>

        </div>
    </div>
  )
}

export default Sidebar