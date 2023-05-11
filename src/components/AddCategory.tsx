// main tools
import { Dispatch, SetStateAction, useState } from "react";
import { FC } from "react";

// types
import { ChangeEvent } from "react";

type Props = {
  onAddCategory: (event: string) => void;
};

export const AddCategory: FC<Props> = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    setInputValue(target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    // El método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas.

    onAddCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChanged(event)}
      />
    </form>
  );
};
