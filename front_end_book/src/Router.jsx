import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {  Route } from "react-router-dom";
// import { SignUp } from './components/SignUp';
import Account from './components/Account';
import Child from './views/Child/Child';
import SignUp from './components/SignUp';
import AddChild from './views/Child/AddChild';

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signup/",
        element: <SignUp />,
      },
      
      {
        path: "/account/",
        element: <Account />,
      },
      {
        path: "/child/",
        element: <Child />,
        children:[
          {
            path: "addchild/",
            element: <AddChild />,
          }
        ]
      },
    ],
  },
]);
  
  // const router = createBrowserRouter(
    
  //     <Routes>
  //       <Route path="/" element={<App />} >
  //         <Route path="account/" element={<Account />} />
  //         <Route path="child/" element={<Child />} >
  //           <Route path="addchild/" element={<AddChild />} />
  //         </Route>
  //       </Route>
  //     </Routes>
      
    
  // );
  export default router;