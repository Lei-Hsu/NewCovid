import { useContext, useEffect } from 'react'
import { Context } from '../../App'

function Home() {

  const { menuOpen, setMenuOpen } = useContext(Context)

  useEffect(() => {

    setMenuOpen(false)
  }, [])

  return (
    <div>
      Home
    </div>
  )
}

export default Home
