import { useState } from 'react';

//import { MNavBar } from './components'
import MNavBar  from './components/MNavBar/MNavBar';
import Item  from './components/Item/Item';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    <div><MNavBar /></div>
    <div><Item /></div>
    </div>
  )
}

export default App
