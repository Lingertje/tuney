import { Layout } from "components/Layout";
import { FC, useEffect, useState } from "react";
import { Container } from "react-grid-system";

import { Artist } from "types/Artist";

const Artists: FC = () => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetctArtists()
      .then(fetchedArtists => {
        setArtists([...artists, ...fetchedArtists]);
      });
  }, [pageCount]);

  const fetctArtists = async () => {
    const response = await fetch(`http://localhost:8000/artists?_page=${pageCount}&_limit=20`);
    const data : Artist[] = await response.json();

    return data;
  };

  const fetctArtistsBySearch = async (query: string) => {
    const response = await fetch(`http://localhost:8000/artists?q=${query}`);
    const data = await response.json();

    setArtists(data);
  };

  return (
    <Layout>
      <Container>
        <h1>Artists</h1>
        <input type="text" name="search" onChange={(e) => fetctArtistsBySearch(e.target.value)} />
        <ul>
          {
            artists.map(artist => {
              return <li key={artist.id}>{artist.name}</li>;
            })
          }
        </ul>
        <button onClick={() => setPageCount(pageCount + 1)}>Load more artists</button>
      </Container>
    </Layout>
  );
};

export { Artists };
