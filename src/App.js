import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from './Components/AdminHomePage/AdminHomePage';
<<<<<<< HEAD
import MatchCreats from './Components/MatchCreats/MatchCreats';
=======
import Cricket from "./Components/Cricket/Cricket";
>>>>>>> 365fe52f1df878f52ae6fcb76bf71a5a138e88fd

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1>Hello, React Router!</h1>
          <Routes>
            <Route path="/" element={<AdminHomePage />} />
<<<<<<< HEAD
            <Route path="/createMatch" element={<MatchCreats></MatchCreats>} />
=======
            <Route path="cricket" element={<Cricket />} />
>>>>>>> 365fe52f1df878f52ae6fcb76bf71a5a138e88fd
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
