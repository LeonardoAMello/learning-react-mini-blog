// Routing
import { Link, useParams } from "react-router-dom";

// CSS
import styles from "./Post.module.css";

const PostItem = ({ post }) => {
  const { id } = useParams();

  return (
    <div>
      <h1>Post {id}</h1>
    </div>
  );
};

export default PostItem;
