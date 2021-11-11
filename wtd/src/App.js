// import logo from './logo.svg';
import './App.css';
import './index.css';

// Pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';

// Components
import Navbar from './components/layouts/NavBar';

function App() {
  return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;

