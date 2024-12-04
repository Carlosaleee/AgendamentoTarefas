import React, { useContext } from "react";
import { themes, ThemeContext } from "./contexto/ThemeContext";

const AppTheme = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = (props) => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Eu sou estilizado pelo tema do contexto!
    </button>
  );
};

export default AppTheme;
