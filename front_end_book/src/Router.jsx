import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Route } from 'react-router-dom';
// import { SignUp } from './components/SignUp';
import Account from './components/Account';
import Child from './components/Child';
import SignUp from './components/SignUp';

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup/",
        element: <SignUp />,
      },
      
      {
        path: "account/",
        element: <Account />,
      },
      {
        path: "child/",
        element: <Child />,
      },
    ],
  },
]);
  
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<App />}>
  //       <Route path="account/" element={<Account />} />
  //       <Route path="child/:childname" element={<Child />} />
  //     </Route>
  //   )
  // );
  export default router;