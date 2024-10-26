import { useState } from "react";
import ProgressBar from "./components/ProgressBar"
import "./App.css"

function App() {

  const [show, setShow] = useState(false);
  // const [check, setCheck] = useState(false);

  return (
    <div className="main-div">
    {
      show ? (
      <ProgressBar />
      ) : ""
    }
      <button className="btn" onClick={() => setShow(!show)} style={{ borderRadius: "20px"}}>
      {
        show ? "off" : "on"
      }
      </button>
    </div>
  )
}

export default App;


// {
//   check ? (<><div onClick={() => setCheck(!check)} className="on-btn"></div><span>on</span></>) : (<><span>off</span><div onClick={() => setCheck(!check)} className="on-btn"></div></>)
// }