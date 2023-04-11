import { useState } from "react"
import AddWorker from "./components/Workers/AddWorker"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddWorker />
    </div>
  )
}

export default App
