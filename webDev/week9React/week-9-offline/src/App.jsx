// function App() {
// const [posts , setPosts] = useState([])

// const postComponents = posts.map(post => <PostComponent
//               name={post.name}
//               subtitle={post.subtitle}
//               time={post.time}
//               image={post.image}
//               description={post.description}
//             />)

// function addPost(){
//   setPosts([...posts, {
//   nam: "Tridip",
//   subtitle:"20000 followers",
//   time:"2m ago",
//   image:"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//   description: "what to know how win big ? checkout how these folks won $6000 in bounties."
// }])

// }
// return (
//   <div style={{background: "#dfe6e9", height: "100vh"}}>
//     <button onClick={addPost}>Add Post</button>
//     <div style={{ display: "flex", justifyContent: "center"}}>
//       <div>
//           <div>
//             {postComponents}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// SideEffects and Dependecy Array

// const [count, setCount] = useState(1);

// function increaseCount(){
//   setCount(currentValue => currentValue +1);
// }

// useEffect(function(){
//   console.log("Above set interval");
//   setInterval(increaseCount, 1000);
// },[]) // this will only run on mount, because the array is empty

// useEffect(function (){
//   console.log(" The count has been updated to " + count);
// },[count])

// return <div>
//     {count}
// </div>

// =---------------------------DEPENDENCY ARRAY -------------------------------------------
//   const [currrentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // send a backend requst to get data for this tab
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos/"+currrentTab).then(async (res) => {
//       const json = await res.json();
//       setTabData(json);
//       setLoading(false);
//     });
//   }, [currrentTab]);

//   return (
//     <div>
//       <button
//         onClick={() => setCurrentTab(1)}
//         style={{ color: currrentTab == 1 ? "red" : "black" }}
//       >
//         todo #1
//       </button>
//       <button
//         onClick={() => setCurrentTab(2)}
//         style={{ color: currrentTab == 2 ? "red" : "black" }}
//       >
//         todo #2
//       </button>
//       <button
//         onClick={() => setCurrentTab(3)}
//         style={{ color: currrentTab == 3 ? "red" : "black" }}
//       >
//         todo #3
//       </button>
//       <button
//         onClick={() => setCurrentTab(4)}
//         style={{ color: currrentTab == 4 ? "red" : "black" }}
//       >
//         todo #4
//       </button>
//       <br />
//       {loading ? "Loading..." :  tabData.title}
//     </div>
//   );
// }

// Clean Up ---------------------------

//   const [ showTimer , setShowTimer ] = useState(true);

//   useEffect(() => {
//     setInterval(()=>{
//       setShowTimer( currentValue => !currentValue)
//     },5000)
//   },[])

//   return (
//     <div>
//       {showTimer && <Timer />}
//     </div>
//   );
// }
// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     let clock = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     // Clean Up Function

//     return () => {
//       clearInterval(clock);
//     }

//   }, []);

//   return <div>
//     {seconds} seconds elapsed
//   </div>

// ------------------------------  chhildren -------------------------
// return (<div style={{display: "flex"}}>

//       <Card>
//         <div style={{color: "green"}}> what do you want to post <br /><input type="text" /></div>
//       </Card>
//       <Card>
//         <div>
//           Hi There
//         </div>
//       </Card>
// </div>)

// function Card ({children}){
//   return <div style={{background: "black", borderRadius: 10, padding: 20, color: "white" , margin: 10}}>
//     Upper Top Bar
//     {children}
//     lwer bottom footer
//   </div>
// }
// };

// import React from 'react';

// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };

// ------------------------------------ List and Keys ----------------------------------

// const App = () => {
//   return (
//     <div>
//       {[
//         <Todo key={2} title={"Eat food "} done={false} />,
//         <Todo key={1} title={"Go to Gym"} done={false} />,
//       ]}
//     </div>
//   );
// };

// function Todo({ title, done }) {
//   return (
//     <div>
//       {title} - {done ? "Done!" : "Not Done!"}
//     </div>
//   );
// }

// ------------------------ Inline Style ---------------
// function MyComponent() {
//   return (
//     <div style={{ backgroundColor: 'blue', color: 'white' }}>
//       Hello, World!
//     </div>
//   );
// }


//-------------- class bassed and functional components -----------


// No Uses of class bassed 

//------------------Life Clycle Events-----------------------


// import React, { useState, useEffect } from 'react';


// function App (){

//   const [isComponentShown , setIsCompoonentShown] = useState(true)
//   return <div>
//     { isComponentShown ? <MyComponent/> : <div></div> }
//   </div>
// }

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Component mounted or count updated');

//   }, [count]); // Runs on mount and when count changes

// 	useEffect(() => {
// 		    console.log('Component mounted');
//     return () => {
//       console.log('Component will unmount');
//     };
// 	}, [])

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }


// -------------------- Error Boundary ----------------------------------


// function App (){
//   return <div>

//     <ErrorBoundary>
//       <Card1/>
//     </ErrorBoundary>
//     <br />
//     <Card2/>
//   </div>
// }

// function Card1(){

//     throw new Error ("Error while Redering")
//     return (
//       <div style={{background: "red" , borderRadius: 20, padding: 20}}>
//         Hi there
//       </div>
//     )
// }
// function Card2(){
//   return (
//     <div style={{background: "red" , borderRadius: 20, padding: 20}}>
//        hello
//     </div>

//   )

// }



// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }

//     componentDidCatch(error, info) {
//         console.error("Error caught:", error, info);
//     }

//     render() {
//         if (this.state.hasError) {
//             return <h1 style={{background: "red" , borderRadius: 20, padding: 20}}>Something went wrong.</h1>;
//         }

//         return this.props.children; 
//     }
// }


//---------------------------------- Fragments -----------------------

import React, { useState, useEffect } from 'react';

function App(){
  return (
    <div>
      
    </div>
  )
}

export default App;
