import { useTheme } from '../context/ThemeContext';

function BoxColor() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', padding: '20px', borderRadius: '8px' }}>
      <h2>El tema actual es: {theme}</h2>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
}

export default BoxColor;