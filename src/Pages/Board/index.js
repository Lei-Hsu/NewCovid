import React, { useContext, useEffect } from 'react'
import { Context } from '../../App'

function Board() {

  const { menuOpen, setMenuOpen } = useContext(Context)

  useEffect(() => {


    return (() => {
      if (menuOpen) {

        setMenuOpen(s => !s)
      }
    })
  }, [])

  return (
    <div>
      board
    </div>
  )
}

export default Board
