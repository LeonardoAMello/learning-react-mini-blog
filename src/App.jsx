// Routing
import { Outlet } from "react-router-dom";

// CSS
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
}

export default App;
