const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTJkYTQ4Mjk1MGMzMmUyOTM3NDAyNTZiYzQ5MDMxOCIsInN1YiI6IjYzYjE4YTRmNWFkNzZiMDA4NWU2YTM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJOjwMg43BusUyYQQNuNQWW3Sf487fZwZpZTeVTw9vU",
                "Content-Type": "application/json;charset=utf-8",
            }
        }).then(result => result.json())
}