import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from './Components/AdminHomePage/AdminHomePage';
import MatchCreats from './Components/MatchCreats/MatchCreats';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <h1>Hello, React Router!</h1> */}
          <Routes>
            <Route path="/" element={<AdminHomePage />} />
            <Route path="/createMatch" element={<MatchCreats></MatchCreats>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
