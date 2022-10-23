import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarouselsAuth from "./CarouselsAuth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, isError, token, isNewUser } = useSelector(
    (state) => state.auth
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  useEffect(() => {
    isNewUser &&
      toast.success("Register berhasil silahkan login!", {
        position: "top-right",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }, []);

  useEffect(() => {
    token && navigate("/");
  }, [token, dispatch, navigate]);

  return (
    <section className="w-full h-screen flex md:p-3">
      <div className="hidden md:flex md:w-5/12 md:bg-blue-600 md:h-full md:box-border md:text-white md:rounded-3xl md:flex-col md:px-6 md:py-6 lg:w-4/12">
        <div className="h-12 flex items-center">
          <h1 className="font-bold">Commerce</h1>
        </div>
        <div className="grow flex flex-col justify-center gap-11">
          <h1 className="md:text-4xl lg:text-6xl font-bold">
            Start your journey with us.
          </h1>
          <p className="font-light">
            It is a long established fact that a reader will be distracted by
            the readable content
          </p>
        </div>
        <div className="h-40 flex w-full mb-7">
          <CarouselsAuth />
        </div>
      </div>
      <div className="w-full  bg-white h-full flex justify-center items-center md:w-7/12 lg:w-8/12">
        <div className="w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Sign in</h1>
          <div className="h-8">
            {isError && <p className="text-red-500">{isError}</p>}
            {isLoading && (
              <ReactLoading
                type={"spin"}
                color={"#000"}
                height={30}
                width={30}
              />
            )}
          </div>
          <form className="flex flex-col" onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className=" border-2 h-11 rounded bg-slate-100 hover:bg-white focus:bg-white px-4 mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className=" border-2 h-11 rounded bg-slate-100 hover:bg-white focus:bg-white px-4 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 h-12 text-white rounded mt-2 w-full md:w-1/2"
              disabled={isLoading}
            >
              Login
            </button>
          </form>
          <p className="mt-1">
            Belum punya akun? klik{" "}
            <Link to="/register" className="text-blue-500">
              disini
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Login;
