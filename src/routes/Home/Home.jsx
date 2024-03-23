// React
import { useState } from "react";

// Routing
import { useNavigate, Link } from "react-router-dom";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// Components
import PostItems from "../../components/PostItem";

// CSS
import styles from "./Home.module.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Veja os posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Pesquisar</button>
      </form>
      <div className={styles.posts_list}>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostItems key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/new-post">Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
