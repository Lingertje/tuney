import { FC } from "react";
import { Col } from "react-grid-system";
import { Link } from "react-router-dom";

import { Artist } from "types/Artist";

type ArtistListProps = {
  artists: Artist[]
}

const ArtistList: FC<ArtistListProps> = ({ artists }: ArtistListProps) => {
	return (
		<Col xs={12} component="ul" className="reset-list">
			{
				artists.map(artist => {
					return (
						<li key={artist.id}>
							<Link to={`/artist/${artist.name}`}>{artist.name}</Link>
						</li>
					);
				})
			}
		</Col>
	);
};

export { ArtistList };
