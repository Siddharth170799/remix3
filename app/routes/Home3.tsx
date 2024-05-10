import { useState } from "react";
import { redirect, useBlocker } from "@remix-run/react";

function MyComponent() {
    const [isFormDirty, setIsFormDirty] = useState(false);
  
    useBlocker(() => {
 
      if (isFormDirty) {
        alert("Are you sure you want to leave this page? Your changes may be lost.");
        return "Are you sure you want to leave this page? Your changes may be lost.";
      }
      else{
        return redirect("/Home")
      }
       } ); 
  
    function submit() {
      debugger;
      
      
      setIsFormDirty(true);
    }
  
   
    return (
      <div>
        <h1>My Component1</h1>
        <form onSubmit={(e)=>e.preventDefault()}>
         <button type="submit" onClick={submit}>Submit</button>
        </form>
      </div>
    );
  }
export default MyComponent  
