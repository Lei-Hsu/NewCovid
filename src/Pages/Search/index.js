import React, { useContext, useEffect } from 'react'
import { Context } from '../../App'

function Search() {

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
      search
    </div>
  )
}

export default Search
