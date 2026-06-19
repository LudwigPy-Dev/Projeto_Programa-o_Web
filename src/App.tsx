import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Page_Administrativo from "./pages/Page_Administrativo";
import Page_criacao from "./pages/Page_criacao";
import Page_Servidores from "./pages/Page_Servidores";
import "./index.css";
import { useEffect } from "react";

function App() {
   useEffect(() => {
    let hue = 0;

    const interval = setInterval(() => {
      hue = (hue + 1) % 360;

      document.documentElement.style.setProperty(
        "--emerald",
        `hsl(${hue}, 100%, 50%)`
      );
    }, 80);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            
            <Route path="/" element={<Home />} />
            <Route path="Administrativo" element={<Page_Administrativo />} />
            <Route path="Criação" element={<Page_criacao />} />
            <Route path="servidores" element={<Page_Servidores />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
