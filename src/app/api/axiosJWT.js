import axios from "axios";
import { refresh } from "../../features/authSlice";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

let store;
export const injectStore = (_store) => {
  store = _store;
};

const axiosJWT = axios.create({ baseURL: "http://localhost:5000" });
// let navigate = useNavigate();

axiosJWT.interceptors.request.use(
  async (config) => {
    const currentDate = new Date();
    const decoded = jwt_decode(store.getState().auth.token);
    let expired = decoded.exp;

    if (expired * 1000 < currentDate.getTime()) {
      await store.dispatch(refresh());

      const token = await store.getState().auth.token;

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosJWT;
