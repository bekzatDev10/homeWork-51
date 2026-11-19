import './App.css'
import RandomNumbers from "./randomNumbers/RandomNumbers.tsx"
import {useState} from "react"

const App = () => {
const [number, setNumbers] = useState<number[]>([5,11,16,23,32])

const changeNumber = () => {
  setNumbers(
      [number[0],2,3,4,5,]
  )
}
  return (
      <div>
        <RandomNumbers number={number[0]} />
        <RandomNumbers number={number[1]} />
        <RandomNumbers number={number[2]} />
        <RandomNumbers number={number[3]} />
        <RandomNumbers number={number[4]} />
        <button onClick={changeNumber}>Change</button>

      </div>
  )
};

export default App
