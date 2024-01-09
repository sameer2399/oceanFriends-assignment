import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Catalogue from "./components/Catalogue/Catalogue";
import History from "./components/History/History";
import Body from "./components/Body/Body";
import Home from "./components/Home/Home";


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/catalogue",
          element: <Catalogue />,
        },
        {
          path: "/history",
          element: <History />,
        }
      ]
    },
  ]);

  
  return (
    <div className="h-[710px] w-[390px] bg-gradient-to-l from-[#1A2440] to-[#313C5C] ml-0 mt-0 sm:ml-[40%]">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
