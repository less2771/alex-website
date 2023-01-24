import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './homePage';
import Login from './testLogin';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home Page</Link>
      <Link to="/testLogin">Test Login Page</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testLogin" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
