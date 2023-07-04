import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
