import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/navbar";
import { Tienda } from "./paginas/tienda/tienda";
import Usuario from "./paginas/usuario";
import { Carta } from "./paginas/carta/carta";
import { TiendaContextProvider } from "./context/tienda-context";

function App() {
  return (
    <div className="App">
      <TiendaContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Tienda />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/carta" element={<Carta />} />
          </Routes>
        </Router>
      </TiendaContextProvider>
    </div>
  );
}

export default App;
