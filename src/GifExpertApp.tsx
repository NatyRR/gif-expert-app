import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  // El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
