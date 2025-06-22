import { Routes, Route } from "react-router-dom";
import { Authors, Books, CreateBook } from "./components/index";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateBook />} />
      <Route path="/books" element={<Books />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
