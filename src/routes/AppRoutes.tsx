import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import SearchProduct from "../page/SearchProduct";
import NotFound from "../page/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
