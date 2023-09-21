import React from "react";
import "../components/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCustom } from "../components/context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const {
    loginState: { isLoggedIn },
    loginDispatch,
  } = useCustom();

  return (
    <>
      <div className="loginCont">
        <div className="loginBox">
          <h2>WE SHOPP</h2>
          <div className="loginForm">
            <h3>Login to your account</h3>
            <h4>Email :</h4>
            <input type="email" placeholder="Enter your email..." />
            <h4>Password :</h4>
            <input type="password" placeholder="Enter your password..." />
          </div>
          <div className="loginBtns">
            <button>Login</button>
            <button

              onClick={() => {
                setTimeout(() => {
                  loginDispatch({ type: "login",});
                  navigate("/");
                  toast.success("login successful");
                }, 2000);
                toast.success("wait for logging....");
              
              }}
              className="guestBtn"
            >
              Login as a guest
            </button>

            <Link to="" className="loginNA">
              {" "}
              Create a new account{" "}
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};
export default Login;
