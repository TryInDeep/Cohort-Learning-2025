// import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//               <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
//               <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
//               <Route path="/" element={<Landing />} />
//               <Route path="*" element={<ErrorPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// function Layout(){
//     return (
//       <>
//         <div style={{height: "100vh"}}>
//           <Link to="/">Allen</Link> | 
//           <Link to="/neet/online-coaching-class-11">Class Program 11</Link> | 
//           <Link to="/neet/online-coaching-class-12">Class Program 12</Link> <br />
//           <div style={{height: "90vh"}}>
//             <Outlet />
//           </div>
//           Footer | Contact Us
//         </div>
//       </>
//     )
// }

// function Landing(){
//   return (
//     <>
//      Welcome to allen
//     </>
//   )
// }

// function ErrorPage(){
//   return (
//     <div>
//        Sorry Page Not Found  
//     </div>
//   )
// }

// function Class11Program(){
//   return(
//     <>
//       <div>
//         Class 11 NEET Program Dispyed !!
//       </div>
//     </>
//   )
// }

// function Class12Program(){

//   const navigate = useNavigate()

//   function redirectUser(){
//     navigate("/")
//   }

//   return(
//     <>
//       <div>
//         Class 12 NEET  Program Dispyed !!
//         <button onClick={redirectUser}>
//         go back to landing page
//       </button>
//       </div>
//     </>
//
// import {useRef} from 'react'
// function App (){

//   const inputRef = useRef();

//   function focusOnInput() {
//     // document.getElementById("name").focus()  
//     inputRef.current.focus();

//   }

//   return (
//     <>
//     Sing Up
//       <input ref={inputRef} type="text"></input>
//       <input type="text"></input>
//       <button onClick={focusOnInput}>Submit</button>
//     </>
//   )
// }

import {useRef, useState, useEffect} from 'react'
// A clock with a start and stop button 
function App(){

  const [currentCount , setCurrentCount] = useState(1);
  // const [timer , setTimer] = useState(0);
  const timer = useRef();

  function startClock(){
    let value = setInterval(function(){
      setCurrentCount( c => c + 1)
    },1000);
    timer.current = value;
  } 
  
  function stopClock(){
    console.log(timer);
    clearInterval(timer.current)
  }

  return (
    <>
      <div>
        {currentCount}
        <br />
        <button onClick={startClock}>Start</button>
        <br />
        <button>Stop</button>
        </div>
    </>
  )
}
export default App;

