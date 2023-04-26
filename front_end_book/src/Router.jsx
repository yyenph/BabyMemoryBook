import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {  Route } from "react-router-dom";
import Account from './components/Account';
import Child from './views/Child/Child';
import SignUp from './components/SignUp';
import AddChild from './views/Child/AddChild';
import { getChildList, getAlbumloader,albumContentLoader } from './utilities';
import Albums from './views/Album/Albums';
import AddAlbum from './views/Album/AddAlbum';
import AlbumCard from './views/Album/AlbumCard';


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
        ]
      },
      {
        path: ":child_name/albums",
        element: <Albums />,
        //pass params to the function and access it as params.child_name
        loader: ({ params }) => getAlbumloader(params.child_name),
      },
      {
        path: "/:child_name/addAlbum/",
        element: <AddAlbum />,
      },
      {
        path:"/:child_name/:album_name/",
        element: <AlbumCard/>,
        loader:({params})=>
        albumContentLoader(params.child_name,params.album_name)
      }
    ],
  },
]);
  
  export default router;


