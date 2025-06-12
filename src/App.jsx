import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NJSoftwaresPage from './pages/NJSoftwaresPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/njsoftwares" element={<NJSoftwaresPage />} />
      </Routes>
    </BrowserRouter>
  );
}