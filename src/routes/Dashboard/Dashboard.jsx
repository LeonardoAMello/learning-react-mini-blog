// Routing
import { Link } from "react-router-dom";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

// Context
import { useAuthValue } from "../../context/AuthContext";

// CSS
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {loading && <p>Carregando...</p>}
      {posts && posts.length === 0 ? (
        <div>
          <div>Não foram encontrados posts</div>
          <Link to="/new-post">Criar primeiro post</Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Título</span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`}>Visualizar</Link>
                  <Link to={`/edit-post/${post.id}`}>Editar</Link>
                  <button
                    onClick={() => {
                      deleteDocument(post.id);
                    }}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
