import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import SearchProduct from "../page/SearchProduct";
import NotFound from "../page/NotFound";
import Navbar from "../Components/Navbar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<SearchProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
