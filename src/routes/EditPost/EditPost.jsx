// React
import { useState } from "react";

// Routing
import { useNavigate } from "react-router-dom";

// Context
import { useAuthValue } from "../../context/AuthContext";

// Hooks
import { useInsertDocument } from "../../hooks/useInsertDocument";

// CSS
import styles from "./EditPost.module.css";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate URL image

    // Create tags array

    // Save data
    await insertDocument({
      uid: user.uid,
      createdBy: user.displayName,
      title,
      image,
      body,
      tags,
    });

    // Redirect to home page
  };

  return (
    <div>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira a URL de uma imagem que represente o seu post..."
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post... "
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula..."
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button disabled={response.loading}>Postar</button>
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  );
};

export default EditPost;
