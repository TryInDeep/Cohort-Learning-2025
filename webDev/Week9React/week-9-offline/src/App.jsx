import {PostComponent} from "./Post";

function App() {
  function addPost(){

  }
  return (
    <div style={{background: "#dfe6e9", height: "100vh"}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <div>
            <div><PostComponent
                name={"harkirat"}
                subtitle={"20,000 followers "}
                time={"12m ago"}
                image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                description={" what to know how win big ? checkout how these folks won $6000 in bounties."}
            />
            </div><br />
            <div><PostComponent
                name={"Raman"}
                subtitle={"Promoted"}
                image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                description={" what to know how win big ? checkout how these folks won $6000 in bounties."}
            /></div>
        </div>
      </div>
    </div>
  );
}


export default App;
