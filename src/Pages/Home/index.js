import { useContext, useEffect } from 'react'
import { Context } from '../../App'
import Components from './Components/Components'

function Home() {

  const { menuOpen, setMenuOpen } = useContext(Context)

  useEffect(() => {

    setMenuOpen(false)
  }, [])

  return (
    <Components />
  )
}

export default Home
