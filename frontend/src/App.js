import './App.css';
import Loading from './pages/loading'
import Home from './pages/home'
import { Route, Routes,BrowserRouter,HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>

      {/* <BrowserRouter> */}
      <HashRouter>
     <Routes>
        <Route path="/" element={<Loading/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
      </HashRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
