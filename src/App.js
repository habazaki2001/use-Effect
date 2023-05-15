import "./styles.css";
import Content from './Content.js'
import {useState} from 'react'

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <h1>Please Click "Toggle" to Show or Hide List</h1>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>
     {
       show &&  <Content />
     }
    </div>
  );
}
