import React, { useContext, useEffect } from 'react'
import { Context } from '../../App'

function Board() {

  const { menuOpen, setMenuOpen } = useContext(Context)

  useEffect(() => {

    setMenuOpen(false)
  }, [])

  return (
    <div>
      board
    </div>
  )
}

export default Board
