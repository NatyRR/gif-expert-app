import { useState, useEffect } from "react";
import { getGifs } from "../utils/getGifs";

export const useFetchGifs = (category: string) => {
  const [counter, setCounter] = useState(10);
  const [images, setImages] = useState<
    {
      id: number;
      title: string;
      url: string;
    }[]
  >([]);

  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
