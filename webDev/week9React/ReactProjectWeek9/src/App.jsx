import { useState, useEffect } from "react";

function App() {
  const [visible, setVisible] = useState(0);

  useEffect(function () {
    setInterval(function () {
      setVisible((visible) => !visible);
    }, 5000);
  }, []);

  return <div>{visible ? <Counter> </Counter> : null}</div>;
}

// mounting, re-rendering, un-mounting
function Counter() {
  const [count, setCount] = useState(0);

  // hooking into the live cycle of react
  console.log("Counter");

  // guard our setInterval from re-rendering

  useEffect(function () {
    console.log("Mounted");
    let clock = setInterval(function () {
      console.log("Inside the interval");
      
      setCount((count) => count + 1);
    }, 1000);

    return function(){
      clearInterval(clock)
    }
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button>Increase Count</button>
    </div>
  );
}
export default App;
