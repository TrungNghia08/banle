import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./layouts/sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
