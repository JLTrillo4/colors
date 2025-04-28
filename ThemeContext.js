import { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
export const ThemeContext = createContext();

// 2. Crear el provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');  // Estado por defecto es 'light'

const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    document.body.className = theme === 'light' ? 'dark' : 'light';  // Cambia el tema del body
};

return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
    </ThemeContext.Provider>
);
}

export function useTheme() {
return useContext(ThemeContext);
}