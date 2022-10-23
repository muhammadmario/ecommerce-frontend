import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, resetError } from "../features/authSlice";
import ReactLoading from "react-loading";
import CarouselsAuth from "./CarouselsAuth";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const { isLoading, isError, token } = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, confPassword, navigate }));
  };

  useEffect(() => {
    dispatch(resetError());
  }, []);
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
          <h1 className="text-3xl font-bold mb-2">Sign up</h1>
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
          <form className="flex flex-col" onSubmit={handleRegister}>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 h-11 rounded bg-slate-100 hover:bg-white focus:bg-white px-4 mb-4"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" border-2 h-11 rounded bg-slate-100 hover:bg-white focus:bg-white px-4 mb-4"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" border-2 h-11 rounded bg-slate-100 hover:bg-white focus:bg-white px-4 mb-4"
              required
            />
            <label htmlFor="confPassword">Confirm Password</label>
            <input
              name="confPassword"
              type="password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              className=" border-2 h-11 rounded bg-slate-100 hover:bg-white focus:bg-white px-4 mb-4"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 h-12 text-white rounded mt-2 w-full md:w-1/2"
            >
              Create account
            </button>
          </form>
          <p className="mt-1">
            Sudah punya akun? klik{" "}
            <Link to="/login" className="text-blue-500">
              disini
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
