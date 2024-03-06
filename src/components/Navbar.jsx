// Routing
import { Link } from "react-router-dom";

// Hooks
import { useAuthentication } from "../hooks/useAuthentication";

// Context
import { useAuthValue } from "../context/AuthContext";

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user } = useAuthValue();

  return (
    <nav>
      <div className={styles.brand}>
        <span>Mini blog</span>
      </div>
      <div className={styles.links_list}>
        {user ? (
          <>
            <Link to="/">Início</Link>
            <Link to="/new-post">Novo Post</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/">Sair</Link>
          </>
        ) : (
          <>
            <Link to="/">Início</Link>
            <Link to="/login">Entrar</Link>
            <Link to="/register">Cadastre-se</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
