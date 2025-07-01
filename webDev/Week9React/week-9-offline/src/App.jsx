import { PostComponent } from "./Post";
import { useState } from "react";


function App() {
  const [posts, setPosts] = useState([]);
  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.time}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Parth",
        subtitle: "20000 followers",
        time: "1m ago",
        image:
          "https://img.redbull.com/images/c_crop,w_1280,h_640,x_0,y_0/c_auto,w_1200,h_630/f_auto,q_auto/redbullcom/2020/10/30/yrn6erzpnmlqnosjeaws/valorant-operator-killjoy",
        description: "I can take the whole site by my own",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}> Add Post </button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
      </div>
    </div>
  );
}

export default App;
