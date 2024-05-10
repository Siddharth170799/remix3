import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "/app/Styles/style.css"
import Home from "./routes/Home";
import { LinksFunction } from "@remix-run/node";
import { LiveReload } from "@remix-run/react";
// import ToDoList from "./routes/ToDoApp";

 export  function links(){
  return [{rel:"stylesheet",href:styles}]
   
 }

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return(<> <Outlet />

  {/* <Home/> */}
  </>)
  
}
