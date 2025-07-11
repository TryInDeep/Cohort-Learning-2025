import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

function Class11Program(){
  return(
    <>
      <div>
        Class11Program Dispyed !!
      </div>
    </>
  )
}

function Class12Program(){
  return(
    <>
      <div>
        Class12Program Dispyed !!
      </div>
    </>
  )
}

function Landing(){
  return (
    <>
     Welcome to allen !
    </>
  )
}



export default App
