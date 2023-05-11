export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=qRxsdFq91bBVjtj8tM2kEeM33O4Owp3e&q=${category}&limit=10`;

  const resp = await fetch(url);

  const { data = [] } = await resp.json();

  const gifs = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(data);
  return gifs;
};
