import './App.css';
import Loading from './pages/loading'
import Home from './pages/home'
import { Route, Routes,BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>

      <BrowserRouter>
     <Routes>
        <Route path="/" element={<Loading/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
