import styles from "../modlues/header.module.css"
import { useNavigate } from 'react-router-dom';

const header:React.FC = () => {

  const navigate = useNavigate();
  const changeNavigation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const url_destino = event.target.value;
    
    if (url_destino) {
      navigate(url_destino);
    }
  }
  return (
    <header className={styles.header}>
      <h1>PC Parts</h1>
      <ul>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Destaques</a>
        </li>
        <li>
          <a href="#">Garanta o seu</a>
        </li>
        <select name="computadores" id="computadores" onChange={changeNavigation} defaultValue="">
          <option value="/">Inicio</option>
          <option value="/Administrativo">Contabilidade & Administrativo</option>
          <option value="/Criação">Criação & Desenvolvimento</option>
          <option value="/servidores">Alta Performace & Servidores</option>
        </select>
      </ul>
      <ul>
        <li>
          <button>Login</button>
        </li>
        <li>
          <button>Cadastrar-se</button>
        </li>
      </ul>
    </header>
  );
}

export default header;
