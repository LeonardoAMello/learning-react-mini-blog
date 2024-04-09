// Routing
import { Link } from "react-router-dom";

// CSS
import styles from "./PostItem.module.css";

const PostItem = ({ post }) => {
  function calculateElapsedTime(epoch) {
    const now = Math.floor(Date.now() / 1000);
    const diff = now - epoch;

    if (diff < 60) {
      return `${diff} segundo${diff !== 1 ? "s" : ""}`;
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes} minuto${minutes !== 1 ? "s" : ""}`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours} hora${hours !== 1 ? "s" : ""}`;
    } else {
      const days = Math.floor(diff / 86400);
      return `${days} dia${days !== 1 ? "s" : ""}`;
    }
  }

  const elapsedTime = post.updatedAt
    ? "atualizado à " + calculateElapsedTime(post.updatedAt.seconds)
    : calculateElapsedTime(post.createdAt.seconds);

  return (
    <div className={styles.post_detail}>
      <div className={styles.post_header}>
        <div className={styles.created_by}>{post.createdBy}</div>
        <div className={styles.created_at}> • {elapsedTime}</div>
      </div>
      <div className={styles.img_container}>
        <img src={post.image} alt={post.title} />
        <Link className={styles.view_post} to={`/posts/${post.id}`}>
          Ler post
        </Link>
      </div>
      <div className={styles.post_details}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <div className={styles.tags}>
          {post.tagsArray.map((tag) => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
