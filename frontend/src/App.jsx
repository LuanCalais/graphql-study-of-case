import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";
import AppRoutes from "./routes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <AppRoutes />
      </div>
    </Router>
  );
}
