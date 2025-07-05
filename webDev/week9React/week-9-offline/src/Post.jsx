export  default function PostComponent(props) {
  return (
    <div style={{ backgroundColor: "white" , width: 250, borderRadius: 10,borderWidth:1, padding:20, borderColor: "gray"}}>
      <div style={{display: "flex"}}>
        <img
          src={props.image}
          alt=""
          style={{
            width: 40,
            height: 40,
            borderRadius : 20
          }}
        />
        <div style={{fontSize: 10 , marginLeft : 10}}>
          <b>
            100xDev
          </b>
          <div>{props.subtitle}</div>
          <div>
            {props.time !== undefined? <div style={{display:"flex"}}>
              <div>{props.time} </div>
              <img src="https://static.thenounproject.com/png/4251077-200.png" alt="" style={{width: 8, height:8, marginLeft: 4, marginTop: 2}}/>
            </div> : null }
          </div>
      </div>
      </div>
       <div style={{fontSize: 12, marginTop: 10}}>
          {props.description}
        </div>
    </div>
  );
}
