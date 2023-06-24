import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Resume from "./pages/Resume/Resume.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
