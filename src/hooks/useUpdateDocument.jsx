// React
import { useState, useEffect, useReducer } from "react";

// Firebase
import { db } from "../firebase/config";
import { updateDoc, doc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const updateDocument = async (id, data) => {
    dispatch({
      type: "LOADING",
    });

    try {
      data.updatedAt = Timestamp.now();

      const docRef = doc(db, docCollection, id);
      const updatedDocument = await updateDoc(docRef, data);

      dispatch({
        type: "UPDATED_DOC",
        payload: updatedDocument,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { updateDocument, response };
};
