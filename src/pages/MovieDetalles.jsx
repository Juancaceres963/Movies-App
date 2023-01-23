import styles from "./MovieDetalles.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetalles(){
    const {movieId} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        get("/movie/" + movieId).then(data => {
            setIsLoading(false)
            setMovie(data);
        })
    }, [movieId])

    if (isLoading) {
        return <Spinner />
    }

    const imagenUrl = getMovieImg(movie.poster_path, 500) ;
    return <div className={styles.detailsContainer}>
        <img className={styles.col + " " + styles.movieImage} src={imagenUrl} alt={movie.title} />
        <div className={styles.col + " " + styles.movieDetails}>
            <p className={styles.firstItem} ><strong>Title:</strong> {movie.title}</p>
            <p><strong>Generes:</strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
            <p><strong>Description:</strong> {movie.overview}</p>
        </div>
    </div>
}