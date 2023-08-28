import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin";
import ResponsiveAppBar from "./Conpoments/ResponsiveAppBar";
import Account from "./Pages/Account/Account";
import Signup from "./Pages/Signup";
import Test from "./Pages/Test";
import Home from "./Pages/Home";

function isUserSignedUp() {
  return localStorage.getItem("id") && localStorage.getItem("token");
}
function AppRouting({ IsSignedUp, setIsSignedUp }) {
  //const admin = useSelector((state) => state.admin);
  const paths = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ];
  return (
    <>
      <Routes>
        {paths.map(({ path, element, requiresAuth }) => (
          <Route
            key={path}
            path={path}
            element={element}
            // requiresAuth && !IsSignedUp ?
            //  <Navigate to="/" />
            // : element
            //  }
          />
        ))}
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <AppRouting />
    </BrowserRouter>
  );
}

export default App;
// IsSignedUp={IsSignedUp} setIsSignedUp={setIsSignedUp} in tha app routing
