import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<Navigate to="/#about" replace />} />
      <Route path="/portfolio" element={<Navigate to="/#portfolio-projects" replace />} />
      <Route path="/portfolio/project/:slug" element={<ProjectDetailPage />} />
      <Route path="/order" element={<Navigate to="/#order" replace />} />
      <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
