import axios from "axios";

// Di sini membuat instance dari axios
const tmdbInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        // TODO: Jangan lupa masukkan API_KEY yang benar 
        api_key: process.env.REACT_APP_TMDB_KEY,
    },
});

// Jangan lupa diexport karena akan digunakan ditempat lainnya
export default tmdbInstance;