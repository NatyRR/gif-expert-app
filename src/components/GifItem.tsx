import { FC } from "react";

type GifItemProps = {
  image: {
    id: number;
    title: string;
    url: string;
  };
};
export const GifItem: FC<GifItemProps> = ({ image }) => {
  return (
    <div className="card">
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};
