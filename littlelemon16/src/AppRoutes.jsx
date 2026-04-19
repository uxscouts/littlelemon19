import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/Reservation";


const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};


const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<AppRoutes />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="reservation" element={<Reservation />} />
            </Route>
        </Routes>
    )
}

export default RouterConfig;
