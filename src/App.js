import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";


function App() {
  return (
    
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
  );
}

export default App;
