import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import AdManagement from "../pages/AdManagement";
import ScrollTop from "./ScrollTop";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ad" element={<AdManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
