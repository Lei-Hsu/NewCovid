import React, { useEffect, useContext } from 'react'
import { Context } from '../../App'

function NotFound404() {


  const { menuOpen, setMenuOpen } = useContext(Context)

  useEffect(() => {

    setMenuOpen(false)
  }, [])


  return (
    <div className={`w-full mt-10 flex justify-center`}>
      <p>404 此頁面不存在</p>
    </div>
  )
}

export default NotFound404
