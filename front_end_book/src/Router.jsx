import App from './App'
import {
  createBrowserRouter,
} from "react-router-dom";

import Child from './views/Child/Child';
import AddChild2 from './views/Child/AddChild2';
import { getChildList, getAlbumloader,albumContentLoader } from './utilities';
import Albums from './views/Album/Albums';

import AlbumCard from './views/Album/AlbumCard';
import NameIdea from './components/NameIdea';
import QuoteGenerator from './components/QuoteGenerator';
import SignUp from './components/SignUp';

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/namefinder/",
        element: <NameIdea />,
      },
      {
        path: "/quotegenerator/",
        element: <QuoteGenerator />,
      },
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
            element: <AddChild2 />,
          },
        ]
      },
      {
        path: ":child_name/ ",
        element: <Albums />,
        //pass params to the function and access it as params.child_name
        loader: ({ params }) => getAlbumloader(params.child_name),
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


