import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/mainPage";
// import WorkPage from "./pages/work";
function MainLayout() {
  return <Outlet />;
}

function App() {
  return (
    <Routes>
      {/* All routes that must share Navbar + Footer go INSIDE this parent */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/work" element={<WorkPage />} /> */}
        {/* else show 404 page */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
