import { useTheme } from '../context/ThemeContext'; 

function MyFormChallenge() {
  const { theme } = useTheme();

  return (
    <div 
      style={{
        backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      <h2>Formulario de Desafío</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default MyFormChallenge;