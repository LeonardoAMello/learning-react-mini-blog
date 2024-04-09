// React
import { useState, useEffect } from "react";

// Routing
import { useNavigate, useParams } from "react-router-dom";

// Context
import { useAuthValue } from "../../context/AuthContext";

// Hooks
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";

// CSS
import styles from "./EditPost.module.css";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);
      setTags(post.tagsArray.join(", "));
    }
  }, [post]);

  const { user } = useAuthValue();
  const { updateDocument, response } = useUpdateDocument("posts");

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
    await updateDocument(id, {
      title,
      image,
      body,
      tagsArray,
    });

    // Return to dasboard page
    navigate("/dashboard");
  };

  useEffect(() => {
    if (response.error && !formError) {
      setFormError(response.error);
    }
  }, [response.error]);

  return (
    <div>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Alterar os dados do post</p>
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
              <span>Preview da image</span>
              <img src={image} alt={title}></img>
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
            <button disabled={response.loading}>Salvar</button>
            {formError && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
