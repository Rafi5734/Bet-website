import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from './Components/AdminHomePage/AdminHomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1>Hello, React Router!</h1>
          <Routes>
            <Route path="/" element={<AdminHomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
