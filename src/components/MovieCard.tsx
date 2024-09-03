import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../types";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image alt={movie.Title} src={movie.Poster} />
      <CardBody>
        <Heading fontSize="xl">{movie.Title} ({movie.Year})</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
