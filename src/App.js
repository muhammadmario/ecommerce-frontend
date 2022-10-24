import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route element={<RequireAuth />}>
        <Route path="/login" element={<Login />} />
        {/* <Route element={<AllowRole allowed="user" />}> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        {/* </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
