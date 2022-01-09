import React, { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

//actions
import { addItem, deleteItem } from "../../redux/reducers/ItemReducer/actions";

//utils
import { fetchRandomImage } from "../../utils/item-functions";

//selectors
import { selectItemsInState } from "../../redux/reducers/ItemReducer/selectors";

//dependencies
import { v4 as uuidv4 } from "uuid";

// components
import { FlatList } from "react-native";
import InputElement from "../InputElement/InputElement";
import SendButton from "../SendButton/SendButton";
import ItemOverview from "../ItemOverview/ItemOverview";
import ErrorOrSuccessMessage from "../ErrorOrSuccessMessage/ErrorOrSuccessMessage";

// styles
import { AppContainer } from "./app.style";

export default function App() {
  const dispatch = useDispatch();
  const items = useSelector(selectItemsInState);

  const errorOrSuccessInitialState = {
    error: false,
    success: false,
    message: "",
  };

  const [title, setTitle] = useState("");
  const [errorOrSuccess, setErrorOrSuccess] = useState(
    errorOrSuccessInitialState
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.length) {
      setErrorOrSuccess({
        ...errorOrSuccess,
        error: true,
        message: "Le titre de votre post doit etre renseigné",
      });
    } else {
      const newItem = {
        _id: uuidv4(),
        title: title,
        picture: await fetchRandomImage(),
      };
      dispatch(addItem(newItem));
      setTitle("");
      setErrorOrSuccess({
        ...errorOrSuccess,
        success: true,
        message: "Post ajouté avec succés",
      });
      clearErrorOrSuccess();
    }
  };
  const handleDelete = (_id) => {
    dispatch(deleteItem(_id));
    setErrorOrSuccess({
      ...errorOrSuccess,
      success: true,
      error: false,
      message: "Post Supprimé avec succés",
    });
    clearErrorOrSuccess();
  };
  const handleChange = (e) => {
    if (title.length) {
      clearErrorOrSuccess();
    }
    setTitle(e);
  };
  const clearErrorOrSuccess = () => {
    setTimeout(() => {
      setErrorOrSuccess({
        ...errorOrSuccess,
        ...errorOrSuccessInitialState,
      });
    }, 3000);
  };

  const renderItem = ({ item }) => (
    <ItemOverview {...item} handleDelete={handleDelete} />
  );
  const { error, success, message } = errorOrSuccess;

  return (
    <AppContainer>
      <InputElement
        type="text"
        keyboardType="default"
        placeholder="Quoi de Neuf ?"
        handleChange={handleChange}
        value={title}
        error={error}
      />
      <ErrorOrSuccessMessage error={error} success={success}>
        {message}
      </ErrorOrSuccessMessage>
      <SendButton disabled={error || !title.length} onPress={handleSubmit}>
        Publier
      </SendButton>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </AppContainer>
  );
}
