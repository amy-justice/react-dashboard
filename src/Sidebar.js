import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faWallet, faCoins } from '@fortawesome/free-solid-svg-icons'


function Sidebar( {items} ) {
  return (
    <div class="flex flex-col sm:flex-row sm:justify-around">
        <div class="sm:w-40 lg:w-64 h-full bg-white">
            <nav class="mt-10">
                <a class="flex items-center py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700" href="#">
                    <FontAwesomeIcon icon={faHome} />

                    <span class="mx-4 font-medium md:text-sm">Home</span>
                </a>

                <a class="flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700" href="#">
                    <FontAwesomeIcon icon={faWallet} />

                    <span class="mx-4 font-medium md:text-sm">Pockets</span>
                </a>

                <a class="flex items-center mt-5 py-2 px-8 text-gray-600 border-r-4 border-white hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700" href="#">
                    <FontAwesomeIcon icon={faCoins} />

                    <span class="mx-4 font-medium md:text-sm">Budget</span>
                </a>
            </nav>

        </div>
    </div>
  )
}

export default Sidebar