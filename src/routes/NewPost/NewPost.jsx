// React
import { useState, useEffect } from "react";

// Routing
import { useNavigate } from "react-router-dom";

// Context
import { useAuthValue } from "../../context/AuthContext";

// Hooks
import { useInsertDocument } from "../../hooks/useInsertDocument";

// CSS
import styles from "./NewPost.module.css";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");

    // Validate URL image
    try {
      new URL(image);
    } catch (error) {
      setFormError("URL da imagem inválida");
      return;
    }

    // Create tags array
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter((tag) => tag.length > 0);

    // Check values
    if (!title || !image || !tags || !body) {
      setFormError("Preencha todos os campos");
      return;
    }

    // Save data
    await insertDocument({
      uid: user.uid,
      createdBy: user.displayName,
      title,
      image,
      body,
      tagsArray,
    });

    // Redirect to home page
    navigate("/");
  };

  useEffect(() => {
    if (response.error && !formError) {
      setFormError(response.error);
    }
  }, [response.error]);

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
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default NewPost;
