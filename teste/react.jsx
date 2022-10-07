import {useState} from 'react'

import './app.css'

function app() {
    const [number, setNumber] = useState(0)
    const addNumber = () => setNumber(number + 1)
    const subNumber = () => {
        if (number > 0){
            setNumber(number - 1)
        }
    }
    
    return (
        <div className="app">
            <h1>{number}</h1>
            <button onClick={addNumber}>adicoinar+</button>
            <button onClick={subNumber}>tirar-</button>
        </div>
    )
}

export default App