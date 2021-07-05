import React, { useContext } from 'react'
import { NavbarList } from '../../Mapping/Mapping'
import { Link } from "react-router-dom";
import { Context } from '../../App'
import { ReactComponent as Menu } from '../../Assets/ProjectComponents/Navbar/Menu.svg'

function Navbar() {
  const { menuOpen, setMenuOpen } = useContext(Context)

  return (
    <div className={`w-full h-20 px-4 relative bg-gradient-to-b from-red-500 to-red-800 flex justify-between items-center`}>
      <div>
        <Link
          className={`text-4xl text-white`}
          to='/NewCovid/'
        >
          Covid
        </Link>
      </div>
      <div className={`hidden lg:block`}>
        {
          NavbarList.map((Data, i) => {
            return (
              <Link
                key={i}
                className={`text-white mx-4 cursor-pointer hover:text-gray-200`}
                to={Data.url}>
                {Data.title}
              </Link>
            )
          })
        }
      </div>
      <div
        className={`block lg:hidden cursor-pointer`}
        onClick={() => setMenuOpen(s => !s)}
      >
        <Menu />
      </div>
      <div
        className={`absolute bg-gray-800 ${menuOpen ? `w-72` : `w-0`} h-96 rounded-bl-md  right-0 top-20 transition-all duration-300  flex flex-col justify-center items-center`}
        style={{ zIndex: 9999 }}
      >
        {
          NavbarList.map((Data, i) => {
            return (
              <div
                key={i}
                className={`w-2/3  border-b-2 border-red-600 my-2 p-2 flex justify-center ${menuOpen ? `block` : `hidden`}`}
              >
                <Link
                  className={`text-white mx-4 cursor-pointer  text-xl `}
                  to={Data.url}>
                  {Data.title}
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar
