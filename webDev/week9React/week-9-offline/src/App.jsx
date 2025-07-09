import PostComponent from "./Post";
import { useState, useEffect } from "react";

function App() {
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

  // DEPENDENCY ARRAY -------------------------------------------
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

  const [ showTimer , setShowTimer ] = useState(true);

  useEffect(() => {
    setInterval(()=>{
      setShowTimer( currentValue => !currentValue)
    },5000)
  },[])

  return (
    <div>
      {showTimer && <Timer />}
    </div>
  );
}
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let clock = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);


    // Clean Up Function 

    return () => {
      clearInterval(clock);
    }

  }, []);


  return <div>
    {seconds} seconds elapsed
  </div>
};


export default App;
