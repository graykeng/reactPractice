import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=7d47594';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data);
    }
    
    useEffect(() => {
        searchMovies("Spiderman");
    }, [])

    return (
        <h1>test</h1>
    )
}

export default App;