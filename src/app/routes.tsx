import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContent from "../App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      {/* Future feature routes go in feature folders and are added here */}
    </Routes>
  );
}
