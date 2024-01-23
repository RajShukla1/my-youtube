import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ErrorPage from "./components/ErrorPage";
import SearchPage from "./components/SearchPage";
function App() {
  const appRouter = createBrowserRouter([{
    path:"/",
    element:(<div>
      <Head/>
      <Body/>
      </div>),
    errorElement:<ErrorPage/>,
    children:[{
      path : "/",
      element:<MainContainer/>
  },{
    path : "watch",
    element : <WatchPage/>
  },{
    path : "search/:query",
    element : <SearchPage/>
  }]
  }]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
