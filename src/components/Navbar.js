import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CgMenuRight, CgClose, CgSearch } from "react-icons/cg";
import jwt_decode from "jwt-decode";
import { logout } from "../features/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sidebarMobile, setSidebarMobile] = useState(false);

  const { isLoading, isError, token } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    dispatch(logout(navigate));
  };

  const decodeToken = async () => {
    try {
      const response = await jwt_decode(token);
      setUser(response);
    } catch (error) {
      console.clear();
    }
  };

  useEffect(() => {
    decodeToken();
  }, [token]);

  return (
    <nav className="w-full fixed top-0 z-50  bg-[#9F8772] h-16 flex box-border justify-between px-2 md:px-16 items-center text-white">
      <h1 className="font-bold">Commerce</h1>

      <ul
        className={`fixed bg-[#9F8772]  top-0 right-0 w-3/4 h-screen gap-3 pt-16  md:static md:w-fit md:h-full md:flex md:items-center md:gap-10 md:pt-0 transition ${
          sidebarMobile ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <form action="" className="relative mx-auto w-max">
            <input
              type="search"
              className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full focus:border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4"
            />
            <CgSearch className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-white peer-focus:stroke-lime-500" />
          </form>
        </div>

        <li className=" h-14 text-center leading-[56px] md:text-start md:leading-[0px] md:h-fit">
          Makanan
        </li>
        <li className=" h-14 text-center leading-[56px] md:text-start md:leading-[0px] md:h-fit">
          Makanan
        </li>
        <li className=" h-14 text-center leading-[56px] md:text-start md:leading-[0px] md:h-fit">
          Makanan
        </li>
        <div className="flex justify-center items-center gap-2">
          {!user && (
            <>
              <Link
                to="/login"
                className="w-24 bg-blue-800 h-10 rounded-lg flex justify-center items-center"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-24 border h-10 rounded-lg flex justify-center items-center"
              >
                Register
              </Link>
            </>
          )}
          {/* <button
            type="button"
            onClick={handleLogout}
            className="w-24 border h-10 rounded-lg flex justify-center items-center"
          >
            Logout
          </button> */}
          <div className=" block relative ">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <span className="mr-1">{user && user.name}</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            <ul
              className={`absolute z-50  ${
                showDropdown ? "block" : "hidden"
              } text-gray-700 pt-1 w-full`}
            >
              {/* <li>
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  One
                </a>
              </li> */}

              <li
                className="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </ul>

      <button
        onClick={() => setSidebarMobile(!sidebarMobile)}
        className="z-10 md:hidden cursor-pointer"
      >
        {sidebarMobile ? <CgClose size="2em" /> : <CgMenuRight size="2em" />}
      </button>
    </nav>
  );
}

export default Navbar;
