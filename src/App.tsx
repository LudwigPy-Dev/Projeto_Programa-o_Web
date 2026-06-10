import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Page_Administrativo from "./pages/Page_Administrativo";
import Page_criacao from "./pages/Page_criacao";
import Page_Servidores from "./pages/Page_Servidores";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 1. Removemos o "/>" do final desta linha para ela não fechar sozinha */}
          <Route path="/" element={<Layout />}>
            
            {/* 2. Estas rotas agora mudaram para DENTRO do Layout */}
            <Route path="/" element={<Home />} />
            <Route path="Administrativo" element={<Page_Administrativo />} />
            <Route path="Criação" element={<Page_criacao />} />
            <Route path="servidores" element={<Page_Servidores />} />
          </Route> {/* 3. Fechamos a rota do Layout aqui, depois das filhas */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
