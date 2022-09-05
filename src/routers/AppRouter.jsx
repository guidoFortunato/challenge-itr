import { Navigate, Route, Routes } from "react-router-dom";
import { DetailSlug } from "../components/DetailSlug";

import App from "../App";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tema/:slug" element={<DetailSlug />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};
