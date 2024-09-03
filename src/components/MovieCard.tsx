import {
  Badge,
  Card,
  CardBody,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import posterPlaceholderDark from "../assets/poster-placeholder-dark.png";
import posterPlaceholder from "../assets/poster-placeholder.png";
import { Movie } from "../types";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const placeholder = useColorModeValue(
    posterPlaceholder,
    posterPlaceholderDark
  );
  const poster = movie.Poster === "N/A" ? placeholder : movie.Poster;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image alt={movie.Title} src={poster} />
      <CardBody>
        <Heading fontSize="xl">
          {movie.Title} ({movie.Year})
        </Heading>
        <Badge>{movie.Type}</Badge>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
