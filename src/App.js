import { Route, Routes } from "react-router-dom";
import AddMeetingPage from "./pages/AddMeetingPage";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meeting/new" element={<AddMeetingPage />} />
      <Route path="/meeting/new/:id" element={<AddMeetingPage />} />
    </Routes>
  );
}
