import { Navigate, Route, Routes } from "react-router-dom";

import App from "../App";
import { DetailSlug } from "../components/DetailSlug";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tema/:slug" element={<DetailSlug />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};
