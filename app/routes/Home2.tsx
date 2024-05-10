
// import { loader } from "./Home";
// import { useLoaderData } from "@remix-run/react";

// export default function GetData(){
//     const data=useLoaderData();
//     console.log(data)
//     return(
//         <div>
//             <h1>namaste</h1>
//             {/* {data.name} */}
//             {data?.map((item)=>{
//                 return(
//                     <div>{item.name}</div>
//                 )
//             })}
//         </div>
//     )
// }
// GetData.js

import { useLoaderData } from "@remix-run/react";

export default function GetData() {
  const data = useLoaderData();
console.log(data)
  return (
    <div>
      <h1>namaste</h1>
      {data?.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
