import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {
  const imagenUrl = getMovieImg(movie.poster_path, 300);
  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imagenUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
