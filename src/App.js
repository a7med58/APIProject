import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./design-system/main.css";
import Home from "./page/home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
