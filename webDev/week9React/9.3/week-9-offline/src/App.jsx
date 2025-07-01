function App() {
  return (
    <div style={{ backgroundColor: "#dfe5e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent />
          </div>
          <br />
          <div>
            <PostComponent />
          </div>
          <br />
          <div>
            <PostComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 20,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};
function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={
            "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          }
          alt=""
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>100xDevs</b>
          <div>230,3398</div>
          <div>12m</div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>
        Want to know how to win big ? checkout these folks who win $6000
      </div>
    </div>
  );
}
export default App;
