


import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";

// Components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Busbooking from "./components/Busbooking";
import Error from "./components/Error";
import PersonDetails from "./components/PersonDetails";
import { busDetails } from "./Constants/dummyData";
 
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

const AuthenticatedApp = () => {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setAccessToken(token);
      } catch (error) {
        console.error("Error getting token:", error);
      }
    };

    if (isAuthenticated) {
      getToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  return <RouterProvider router={appRouter} />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/personal",
        element: <PersonDetails />,
      },
      {
        path: "/bus-booking/:type",
        element: <Busbooking />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-sgchxdaopvkazcze.us.auth0.com"
    clientId="eabkQJm5J0nU0XadWjhT2l08d7cljCfM"
    redirectUri={window.location.origin}
    useRefreshTokens={true}
    cacheLocation="localstorage" // or "sessionstorage"
  >
    <AuthenticatedApp />
  </Auth0Provider>
);



// import React from "react";
// import ReactDOM from "react-dom/client";

// // Styles
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import "./index.css";

// // Components
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import Busbooking from "./components/Busbooking";
// import Error from "./components/Error";
// import PersonDetails from "./components/PersonDetails";
// import { busDetails } from "./Constants/dummyData";

// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import { Auth0Provider } from '@auth0/auth0-react';

 


// function App() {
//   return (
//     <div>
//       <Auth0Provider
//         domain="dev-sgchxdaopvkazcze.us.auth0.com"
//         clientId="eabkQJm5J0nU0XadWjhT2l08d7cljCfM"
//         redirectUri={window.location.origin}
//         useRefreshTokens={true}
//         cacheLocation="localstorage"
//         authorizationParams={{
//           redirect_uri: window.location.origin,
//         }}
//       >
//         <div>
//           <Header />
//         </div>
//         <Outlet />
//       </Auth0Provider>
      
//     </div>
//   );
// }

// export default App;

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/personal",
//         element: <PersonDetails />,
//       },
//       {
//         path: "/bus-booking/:type",
//         element: <Busbooking />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
