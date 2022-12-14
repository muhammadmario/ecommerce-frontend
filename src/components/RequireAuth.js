import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../features/authSlice";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function RequireAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, isError } = useSelector((state) => state.auth);

  const refresToken = () => {
    dispatch(refresh(navigate));
  };

  useEffect(() => {
    console.log("represh");
    refresToken();
  }, [navigate]);

  // useEffect(() => {
  //   isError && navigate("/login");
  // }, [isError]);

  return <>{<Outlet />}</>;
}

export default RequireAuth;
