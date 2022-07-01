import "./App.css";
import Dashboard from "./UI/Layout/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignInSide from "./UI/Authentication/Login";
import ForgotPass from "./UI/Authentication/ForgotPass";
import PrivateRoute from "./routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./UI/Authentication/SignUp.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/login" exact element={<SignInSide />}></Route>
          <Route path="/signup" exact element={<SignUp />}></Route>
          <Route path="/Forget" exact element={<ForgotPass />}></Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
