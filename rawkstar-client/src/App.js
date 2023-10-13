import { BrowserRouter, Route, Routes } from "react-router-dom";
import OctoberPoll from "./pages/OctoberPoll";
import Admin from "./pages/Admin";
function App() {

  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
          <Routes>
            <Route path="/october" element={<OctoberPoll />}/>
            <Route path="/admin" element={<Admin />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
