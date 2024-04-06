// Routing
import { Link } from "react-router-dom";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// Components
import PostItem from "../../components/PostItem/PostItem";

// CSS
import styles from "./Search.module.css";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts, loading } = useFetchDocuments("posts", search);

  return (
    <div>
      <h1>Resultados da busca</h1>
      <div className={styles.posts_list}>
        {loading && <p>Carregando...</p>}
        {posts &&
          posts.map((post) => <PostItem key={post.id} post={post}></PostItem>)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts a partir da sua consulta</p>
            <Link to="/">Voltar</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
