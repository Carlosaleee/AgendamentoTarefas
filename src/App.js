import React, { useContext } from "react";
import { themes, ThemeContext } from "./contexto/ThemeContext";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/login";

// Componente responsável por aplicar o tema em toda a página
const AppTheme = ({ children }) => {
  const theme = useContext(ThemeContext); // Obter o tema atual do contexto

  // Aplicar o tema no contêiner principal
  const appStyle = {
    background: theme.background,
    color: theme.foreground,
    minHeight: "100vh", // Para cobrir toda a altura da página
    margin: 0,
    padding: "20px", // Um leve espaçamento interno
    fontFamily: "Arial, sans-serif", // Estilo de fonte
  };

  return <div style={appStyle}>{children}</div>;
};

// Toolbar que contém o botão estilizado pelo contexto de tema
const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

// Botão estilizado pelo tema do contexto
const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground, padding: "10px", border: "none", borderRadius: "5px" }}>
     - Tema do Escuro!
    </button>
  );
};

// Componente principal da aplicação
function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <AppTheme>
        <Header />
        <ListarTarefa />
        <Toolbar />
      </AppTheme>
    </ThemeContext.Provider>
  );
}

export default App;
