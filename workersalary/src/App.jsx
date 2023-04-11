import { useState } from "react"
import AddWorker from "./components/Workers/AddWorker"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-white text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
      <AddWorker />
    </div>
  )
}

export default App
