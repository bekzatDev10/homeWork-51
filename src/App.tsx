import './App.css'
import './randomNumbers/RandomNumbers.tsx'
import RandomNumbers from "./randomNumbers/RandomNumbers.tsx";

function App() {

  return (
      <div>
        <RandomNumbers number={5} />
        <RandomNumbers number={30} />
        <RandomNumbers number={133} />
        <RandomNumbers number={532} />
        <RandomNumbers number={58757} />
      </div>
  )
}

export default App
