import { useState } from 'react'
import { cart1, cart2 } from './data'
import './App.css'
import Cart from './Cart'

function App() {
  const [cartA, setCartA] = useState(cart1)
  const [cartB, setCartB] = useState(cart2)

  const handleSwap = () => {
    const newCartA = [...cartA]
    const newCartB = [...cartB]

    console.log(newCartA)

    for(let i=0; i<cartA.length; i+=2){
        newCartA[i] = cartB[i]
        newCartB[i] = cartA[i]
    }

    setCartA(newCartA)
    setCartB(newCartB)
  }

  return (
    <>
      <div className='flex container'>
        <Cart items={cartA} number={1}/>
        <button className='swap-button' onClick={handleSwap}>Swap Items</button>
        <Cart items={cartB} number={2}/>
      </div>
    </>
  )
}

export default App
