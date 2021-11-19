import { FC, useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";

import { ArtistList } from "components/Artist/ArtistList";
import { Layout } from "components/Layout";
import { Searchbar } from "components/Searchbar";
import axios from "utils/AxiosInstance";

import { Artist } from "types/Artist";

const Artists: FC = () => {
    const [pageCount, setPageCount] = useState<number>(1);
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        fetctArtists()
            .then(fetchedArtists => {
                // setArtists([...artists, ...fetchedArtists]);
            });
    }, [pageCount]);

    const fetctArtists = async () => {
        const response = await axios("/movie/550");
        // const data : Artist[] = await response.json();
        console.log(response);


        return response;
    };

    const fetctArtistsBySearch = async (query: string) => {
        if (query === "") {
            const artists = await fetctArtists();
            // return setArtists(artists);
        }

        const response = await fetch(`http://localhost:8000/artists?q=${query}`);
        const data = await response.json();

        setArtists(data);
    };

    return (
        <Layout>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Searchbar name="search" placeholder="Search artist..." callback={fetctArtistsBySearch} />
                    </Col>
                </Row>
                <Row>
                    <ArtistList artists={artists} />
                </Row>
                <button onClick={() => setPageCount(pageCount + 1)}>Load more artists</button>
            </Container>
        </Layout>
    );
};

export default Artists;
