import { useState } from 'react';

//import { NavBar, Item } from './components'
import NavBar  from './components/NavBar/NavBar';
import Item  from './components/ItemListContainer/ItemListContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Item greeting="Hola a todos"/>
    </>
  )
}

export default App
