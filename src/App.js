import React, {useState} from "react";
import './App.css';
import Message from './Message';
import AnotherMessage from './AnotherMessage';

function App() {
  let [count,setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`${isMorning ? "dayLight": "nightLight"}`}>
      <br />
      <Message value={count}/>
      <button onClick={() => {setCount(++count)} }>Counter</button>    
      <AnotherMessage value={count}/>
      <br />
      <br />
      <hr />
      <h1>Good {isMorning? "Morning": "Night"}</h1>
      <button onClick={() => {setMorning(!isMorning)}}>Change to Day/Night</button>
      <br />
      <br />
    </div>
  );
}

export default App;
