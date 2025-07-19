import { useContext, useState, createContext  } from "react";

const BulbContext = createContext();


function BulbProvider ({ children }){
  const [bulbOn , setBulbOn ] = useState (true);
   return (
    <>
    <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        {children}
      </BulbContext.Provider> 
    </>
   ) 
}

function App() {
   
  return (
    <>
      <BulbProvider>
        <Light/>
      </BulbProvider>  
    </>
  )
}

function Light(){
 
  return (
    <>
      <LightBulb/>
      <LightSwitch/>
    </>
  )
}

function LightBulb (){

  const {bulbOn} = useContext(BulbContext)
  return (
    <>
      {bulbOn ? "Bulb on " : "Bulb off"}
    </>
  )
}


function LightSwitch(){
  const {bulbOn, setBulbOn} = useContext(BulbContext)
  function toggle (){
    setBulbOn(!bulbOn)
  }

  return (
    <>
      <button onClick={toggle}> Toggle the Bulb </button>
    </>
  )
}
export default App
