import { Badge, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../types";
import posterPlaceholder from "../assets/poster-placeholder.png"; 

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const poster = movie.Poster === "N/A" ? posterPlaceholder : movie.Poster;
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image alt={movie.Title} src={poster} />
      <CardBody>
        <Heading fontSize="xl">{movie.Title} ({movie.Year})</Heading>
        <Badge>{movie.Type}</Badge>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
