import { useContext, useEffect } from 'react'
import { Context } from '../../App'

function Home() {

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
      Home
    </div>
  )
}

export default Home
