import { FC } from "react";
import { Link } from "react-router-dom";

import { Artist } from "types/Artist";

type ArtistListProps = {
  artists: Artist[]
}

const ArtistList: FC<ArtistListProps> = ({ artists }: ArtistListProps) => {
  return (
    <ul>
      {
        artists.map(artist => {
          return (
            <li key={artist.id}>
              <Link to={`/artist/${artist.name}`}>{artist.name}</Link>
            </li>
          );
        })
      }
    </ul>
  );
};

export { ArtistList };
