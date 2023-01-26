import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './homePage';
import Test from './Test';
import NotFound from './NotFound';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <section class="home">

      </section>
      <Routes>
        <Route path="/alex-website" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
