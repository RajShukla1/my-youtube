import { Provider } from "react-redux";
import "./App.css";
import React, { Suspense } from "react";
import MainLayout from "layouts/MainLayout";
import Header from "layouts/Header";
import store from "store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "pages/Error";

// Lazy load pages
const Home = React.lazy(() => import("pages/Home"));
const Watch = React.lazy(() => import("pages/Watch"));
const Search = React.lazy(() => import("pages/Search"));
const Profile = React.lazy(() => import("pages/Profile"));

// Fallback loader
const LoadingFallback = () => (
  <div className="w-full h-[calc(100vh-73px)] flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-4 border-surface-hover border-t-primary-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  const appRouter = createBrowserRouter([{
    path:"/",
    element:(<div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <Header/>
      <MainLayout/>
      </div>),
    errorElement:<Error/>,
    children:[{
      path : "/",
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <Home/>
        </Suspense>
      )
  },{
    path : "watch",
    element: (
        <Suspense fallback={<LoadingFallback />}>
          <Watch/>
        </Suspense>
      )
  },{
    path : "search/:query",
    element: (
        <Suspense fallback={<LoadingFallback />}>
          <Search/>
        </Suspense>
      )
  },{
    path: "profile",
    element: (
        <Suspense fallback={<LoadingFallback />}>
          <Profile/>
        </Suspense>
    )
  }]
  }]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
