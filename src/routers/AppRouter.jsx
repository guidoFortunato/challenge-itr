import { Route, Routes } from "react-router-dom";
import App from "../App";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tema/:slug" element={<App />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
};
