import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import TeacherForm from "./TeacherForm";
import TeachersList from "./TeachersList";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="teachers" element={<TeachersList />} />
        <Route path="form" element={<TeacherForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
