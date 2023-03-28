import FunctionalCompo from "./Components.js/FunctionalCompo";
import ClassCompo from "./Components.js/ClassCompo";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(false);
  const [data, setData] = useState(false);
 const handleFunction = () => {
   setCount(!count)
    }
    const handleClass = () =>{
    setData(!data)
    }
   return (
    <div className="first">
    
   <h3 className="shadow">Styling using Functional and Class Component</h3> 
    <br/>
    <div className="button">
<button className="btn" onClick={handleFunction}>To see styling in Functional Component</button>

<button className="btn" onClick={handleClass}>To see styling in Class Component</button>
</div>
<div className="clasfnc">
{count ? <FunctionalCompo/> : null}
{data ? <ClassCompo/> : null}
</div>
 </div>
  );
}
export default App;

