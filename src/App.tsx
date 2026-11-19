import './App.css'
import RandomNumbers from "./randomNumbers/RandomNumbers.tsx"
import {useState} from "react"

const App = () => {
const [number, setNumbers] = useState<number[]>([5,11,16,23,32])

const changeNumber = () => {
  const newNumbers: number[] = [
  ]

  while(newNumbers.length < 5) {
    const max = 36
    const min = 5
    const num:number = Math.floor(Math.random() * (max - min + 1)) + min
    if (!newNumbers.includes(num)) {
      newNumbers.push(num);
    }
  }
  newNumbers.sort((a, b) => a - b)
  setNumbers(newNumbers)
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
