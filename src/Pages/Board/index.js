import React, { useContext, useEffect } from 'react'
import { Context } from '../../App'
import { Pending } from '../../Components/Pending/Pending'


function Board() {

  const { menuOpen, setMenuOpen } = useContext(Context)

  useEffect(() => {

    setMenuOpen(false)
  }, [])

  return (
    <div>
      <Pending />
    </div>
  )
}

export default Board
