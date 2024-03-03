// Routing
import { Link } from "react-router-dom";

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.brand}>
        <span>Mini blog</span>
      </div>
      <div className={styles.links_list}>
        <Link to="/">Início</Link>
        <Link to="/new-post">Novo Post</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/">Sair</Link>
      </div>
    </nav>
  );
};

export default Navbar;
