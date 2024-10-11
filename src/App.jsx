
import './App.css'
import Home from "./Components/Home"
import {Hello} from './Context/UserName'

function App() {

   

  return (
    <>
    
    <Hello>
      <div style={{border:"2px solid yellow",padding:"10px"}}>
<h1>Hey i am app</h1>
<Home />

      </div>
      </Hello>
    </>
  )
}

export default App
