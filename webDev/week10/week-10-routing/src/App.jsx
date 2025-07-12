import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ " element={<Layout />}>
              <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
              <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
              <Route path="/" element={<Landing />} />
              <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout(){
    return (
      <>
        <div style={{height: "100vh"}}>
          <Link to="/">Allen</Link> | 
          <Link to="/neet/online-coaching-class-11">Class Program 11</Link> | 
          <Link to="/neet/online-coaching-class-12">Class Program 12</Link> <br />
          <div style={{height: "90vh"}}>
            <Outlet />
          </div>
          Footer | Contact Us
        </div>
      </>
    )
}

function Landing(){
  return (
    <>
     Welcome to allen
    </>
  )
}

function ErrorPage(){
  return (
    <div>
       Sorry Page Not Found  
    </div>
  )
}

function Class11Program(){
  return(
    <>
      <div>
        Class 11 NEET Program Dispyed !!
      </div>
    </>
  )
}

function Class12Program(){

  const navigate = useNavigate()

  function redirectUser(){
    navigate("/")
  }

  return(
    <>
      <div>
        Class 12 NEET  Program Dispyed !!
        <button onClick={redirectUser}>
        go back to landing page
      </button>
      </div>
    </>
  )
}

export default App
