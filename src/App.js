import Info from './components/Info'
import User from './components/Register'
import Home from './components/Login'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar */}
        <nav className="bg-blue-600 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo ou título */}
            <h1 className="text-white text-lg font-bold">
              ;D
            </h1>

            {/* Links de navegação */}
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/usuarios" className="text-white hover:text-blue-200 transition-colors duration-200">
                  Cadastrar
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white hover:text-blue-200 transition-colors duration-200">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Conteúdo da página */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<User />} />
            <Route path="/sobre" element={<Info />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
