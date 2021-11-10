// import logo from './logo.svg';
import './App.css';
import './index.css';

// Pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import mainPage from './pages/mainPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<mainPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

