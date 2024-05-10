// import { json } from "@remix-run/node"
// import { ActionFunctionArgs } from "@remix-run/node"
// export async function action({request}:ActionFunctionArgs){

//     const body=await request.formData()
//     const data= body.get("signUpDetails")
//     return json({name1:`${data.name1}`,email:`${data.email}`,password:`${data.password}`});

// console.log({name1,email,password})
// }

// export default function SignUp(){

//     return(
//         <form  method="post">
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name1={name1}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//            name={email}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name={password}
//             required
//           />
//         </div>
//         <div>
//           <button type="submit">Sign Up</button>
//         </div>
//       </form>
//     )
// }
import { json, ActionFunctionArgs, ActionFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";

// export const action: ActionFunction = async ({ request }) => {
    export async function action({request}:ActionFunctionArgs){
        const body = await request.formData();
        const name = body.get("username");
        const email = body.get("email");
        const password = body.get("password");
      
      
      
        return json({ name, email, password });
    } 

// };



export default function SignUp() {
    const userDetails=useActionData<typeof action>();
    console.log(userDetails);
  return (
    <form action="/signup"  method="post">
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div>
        <button type="submit" >Sign Up</button>
      </div>
    </form>
  );
}
