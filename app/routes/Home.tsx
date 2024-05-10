// // import React from 'react'
// // import { useLoaderData } from '@remix-run/react'
// // import { Link } from '@remix-run/react'
// // export const loader=()=>{
// //     const data={
// //         posts:[{
// //             id:1,title:'Post 1', body:'this is a test post'
// //         },{
// //             id:2,title:'Post 2', body:'this is a test post'
// //         },{
// //             id:3,title:'Post 3', body:'this is a test post'
// //         }

// //         ]
// //     }
// //     return data
// // }
// // const Home = () => {
// //     const {data}=useLoaderData()
// //     if (!data) {
// //         return <div>Loading...</div>;
// //     }
// //   return (
// //     <div className='hello'>
// //       {data?.map((post)=>{
// //         return(
// //             <li key={post.id}>
// //                 <Link to={post.id}>
// //                     <h3>{post.title}</h3>
// //                 </Link>
// //             </li>
// //         )
// //       })}
// //     </div>
// //   )
// // }

// // export default Home


////////loader function and useLoaderData Hook/////////////


// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// export async function loader(){
//     return json([{name:"siddharth"},{name:"ajay"},{name:"sumanth"},{name:"gowtham"}])
// }
// // export async function loader() {
// //   return json({ name: "Ryan", date: new Date() });
// // }
// export default function SomeRoute2(){
//     const data2 = useLoaderData<typeof loader>();
//     return(
//         <>
//         {data2.map((item)=>{
//             return(<div>{item.name}</div>)
            
//         })}
//         </>
//     )
// }
// // export default function SomeRoute() {
// //   const data = useLoaderData<typeof loader>();
// //   return (
// //     <div>
// //       <h1>Hello, {data.name}!</h1>
// //       <p>Current date: {data.date.toString()}</p>
// //     </div>
// //   );
// // }

//// useActionData hook///////
// import type { ActionFunctionArgs, LoaderFunction } from "@remix-run/node"; // or cloudflare/deno
// // import { json } from "@remix-run/node"; // or cloudflare/deno
// import { Form, useActionData } from "@remix-run/react";

// export async function action({
//   request,
// }:ActionFunctionArgs) {
//   const body = await request.formData();
//   const name = body.get("visitorsName");
//   return json({ message: `Hello, ${name}` });
// }

// export default function Invoices() {
//   const data = useActionData<typeof action>();
//   return (
//     <Form method="post">
//       <input type="text" name="visitorsName" />
//       {data ? data.message : "Waiting..."}
//     </Form>
//   );
// }

///useAsyncError Hook////
// routes/my-component.tsx
// import React from 'react';
// import { Await, useAsyncError } from "@remix-run/react";

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Failed to fetch data!"));
//     }, 2000);
//   });
// };

// function ErrorElement() {
//   const error = useAsyncError();
//   return <p>Uh Oh, something went wrong! {error.message}</p>;
// }

// export default function MyComponent() {
//   return (
//     <div>
//       <h1>Async Data Fetching Example</h1>
//       <Await resolve={fetchData()} errorElement={<ErrorElement />} />
//       <p>This will be rendered while waiting for data...</p>
//     </div>
//   );
// }

// const promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject("error occurred")
//     },2000)
// })
// promise.catch((err)=>console.log(err,"error"))

// export function Error(){
//     const error =useAsyncError();
//     console.log(error)
    
//     return <p>Uh Oh, something went wrong! {error.message}</p>;
// }

// export default function MyComponent2(){

//     return(
//         <Await resolve={promise} errorElement={<Error/>} />
//     )
// }
////////////////////////   loaderfunction and useLoaderData hook///////////

import { useLoaderData, json } from '@remix-run/react';
import { BlockerFunction } from '@remix-run/react';
// Home.js

// import { json } from "@remix-run/react";

// export const loader = async () => {
//   const data = [
//     { name: "Siddharth" },
//     { name: "Sathvik" }
//   ];

//   return json(data);
// };

 export const loader:LoaderFunction=async()=>{
  debugger;
 const data =await fetch("https://fakestoreapi.com/products/")
 const data2= await data.json()
      //  const data =[{
//             name:"Siddharth",
//          },{
//             name:"Sathvik"
//          }]


//         //  const data={
//         //     name:"ajay"
//         //  }
    return json(data2
// //        // [{
// //     //     name:"Siddharth",
// //     //  },{
// //     //     name:"Sathvik"
// //     //  }]
//     data
// //     {data}
// ) }

// export default function GetData(){
//     const {data}=useLoaderData();
//     console.log(data)
//     return(
//         <div>
//             <h1>namaste</h1>
//             {data.name}
//             {/* {data?.map((item)=>{
//                 return(
//                     <div>{item.name}</div>
//                 )
//             })} */}
//         </div>
     )
}