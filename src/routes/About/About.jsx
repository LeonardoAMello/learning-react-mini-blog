// Routing
import { Link } from "react-router-dom";

// CSS
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_box}>
        <h2>
          Sobre o Mini <span>Blog</span>
        </h2>
        <p>
          Este projeto consiste em um blog feito com React no front-end e
          Firebase no back-end.
        </p>
        <Link to="/new-post">Criar post</Link>
      </div>
    </div>
  );
};

export default About;
