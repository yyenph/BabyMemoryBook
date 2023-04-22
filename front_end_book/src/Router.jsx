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
import { getChildList } from './utilities';
import Albums from './views/Album/Albums';
import AddAlbum from './views/Album/AddAlbum';

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
        path: "/child/",
        element: <Child />,
        loader: getChildList,
        children:[
          {
            path: "addchild/",
            element: <AddChild />,
          },
          {
            path: ":child_name/albums",
            element: <Albums />,
          }
        ]
      },
      {
        path: "/:child_name/addAlbum/",
        element: <AddAlbum />,
      }
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