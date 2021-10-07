import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Layout } from "components/Layout";
import { Song } from "types/Song";
import { Container } from "react-grid-system";

const ArtistDetail: FC = () => {
  const { artistName } : { artistName: string } = useParams();
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchSongs(artistName)
      .then(data => {
        setSongs(data);
      });
  }, [artistName]);

  const fetchSongs = async (artist: string) => {
    const response = await fetch(`http://localhost:8000/songs?artist=${artist}`);
    const data = response.json();

    return data;
  };

  return (
    <Layout>
      <Container>
        <h1>{ artistName }:</h1>
        {
          songs.map(song => {
            return (
              <li key={song.id}>
                {song.name}
              </li>
            );
          })
        }
      </Container>
    </Layout>
  );
};

export default ArtistDetail;
