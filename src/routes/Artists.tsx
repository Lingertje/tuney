import { FC, useEffect, useState } from "react";
import { Artist } from "types/Artist";

const Artists: FC = () => {
  const [pageCount, setPageCount] = useState(1);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetctArtists()
      .then(fetchedArtists => {
        setArtists([...artists, ...fetchedArtists]);
      });
  }, [pageCount]);

  const fetctArtists = async () => {
    const response = await fetch(`http://localhost:8000/artists?_page=${pageCount}&_limit=20`);
    const data = await response.json();

    return data;
  };

  return (
    <>
      <h1>Artists</h1>
      <ul>
        {
          artists.map(artist => {
            return <li key={artist.id}>{artist.name}</li>;
          })
        }
      </ul>
      <button onClick={() => setPageCount(pageCount + 1)}>Load more artists</button>
    </>
  );
};

export { Artists };
