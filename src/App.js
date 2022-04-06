import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from './Components/AdminHomePage/AdminHomePage';
import MatchCreats from './Components/MatchCreats/MatchCreats';
<<<<<<< HEAD
=======
import Cricket from "./Components/Cricket/Cricket";
>>>>>>> 52c92da2fb70a6115f84ba8153e1d849cdf05e44

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <h1>Hello, React Router!</h1> */}
          <Routes>
            <Route path="/" element={<AdminHomePage />} />
<<<<<<< HEAD
            <Route path="/createMatch" element={<MatchCreats></MatchCreats>} />
=======
            <Route path="createMatch" element={<MatchCreats />} />
            <Route path="cricket" element={<Cricket />} />
>>>>>>> 52c92da2fb70a6115f84ba8153e1d849cdf05e44
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
