// Routing
import { useParams } from "react-router-dom";

// Hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";

// CSS
import styles from "./Post.module.css";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando...</p>}
      {post && (
        <>
          <div className={styles.post_main_content}>
            <img src={post.image} alt={post.title} />
            <div className={styles.post_description}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>

          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span> {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
