import { useEffect, useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import UseEffectHook from "./components/UseEffectHook"


function App() {


  const [show, setShow] = useState(true);
  console.log(show)


  return (
    <div className="container text-center" style={{ marginTop: '10rem' }}>
      <button className="btn btn-dark" onClick={() => setShow(!show)} >{ show ? "Hide" : "Show" }</button>
      
      {/* Conditional Renderin (Short-Circuit) */}
      {show && <LifeCycleMethods /> }
      {/* {show ? <LifeCycleMethods /> : null } */}
      {/* {show && <UseEffectHook/> } */}
     
    </div>
  );
}

export default App;

