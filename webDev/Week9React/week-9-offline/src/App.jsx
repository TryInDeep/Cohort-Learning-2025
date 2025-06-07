import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            {" "}
            <PostComponent />;
          </div>
          <div>
            {" "}
            <PostComponent />;
          </div>
          <div>
            {" "}
            <PostComponent />;
          </div>
          <div>
            {" "}
            <PostComponent />;
          </div>
        </div>
      </div>
    </div>
  );
}

function PostComponent() {
  const style = {
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderwidth: 1,
    padding: 30,
  };
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={
            "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          }
          alt=""
          style={{
            height: 20,
            width: 20,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>100xDev</b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>
      </div>

      <div>What to know how to win big, checkout how these folk won $6000</div>
    </div>
  );
}

export default App;
