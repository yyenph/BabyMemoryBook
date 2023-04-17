import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Route } from 'react-router-dom';
// import { SignUp } from './components/SignUp';
import Account from './components/Account';
import Child from './components/Child';

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "account/",
        element: <Account />,
      },
      {
        path: "child/:childname",
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