const apiFlagsUrl = import.meta.env.VITE_COUNTRYFLAGS_API_URL;
const apiMoviesUrl = import.meta.env.VITE_THEMOVIEDB_API_IMAGE_URL;

export default function MoviesList({ movies }) {
    return (
        <ul>
            {Array.isArray(movies) &&
                movies.map((movie) => (
                    <li key={movie.id}>
                        <img
                            src={`${apiMoviesUrl}/w154${movie.poster_path}`}
                            alt=""
                        />
                        Titolo: {movie.title || movie.name}; Titolo Originale:
                        {movie.original_title || movie.original_name}; Lingua
                        originale: {movie.original_language + " "}
                        <img
                            src={`${apiFlagsUrl}/us.png`}
                            alt="country-flag"
                            width="28"
                        />
                        ; Voto:
                        {movie.vote_average}
                    </li>
                ))}
        </ul>
    );
}
