import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from './Components/AdminHomePage/AdminHomePage';
import MatchCreats from './Components/MatchCreats/MatchCreats';
import Cricket from "./Components/Cricket/Cricket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1>Hello, React Router!</h1>
          <Routes>
            <Route path="/" element={<AdminHomePage />} />
            <Route path="/createMatch" element={<MatchCreats></MatchCreats>} />
            <Route path="cricket" element={<Cricket />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
