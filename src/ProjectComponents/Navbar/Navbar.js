import React from 'react'
import { NavbarList } from '../../Mapping/Mapping'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={`w-full h-20 px-4 bg-gradient-to-b from-red-500 to-red-800 flex justify-between items-center`}>
      <div>
        <Link
          className={`text-4xl text-white`}
          to='/'
        >
          Covid
        </Link>
      </div>
      <div>
        {
          NavbarList.map(Data => {
            return (
              <Link
                className={`text-white mx-4 cursor-pointer hover:text-gray-200`}
                to={Data.url}>
                {Data.title}
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar
