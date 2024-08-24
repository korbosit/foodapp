import styles from "./search.module.css";
import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "15c6dc89ba1d4af49def1edb6b699117";

export default function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState("pizza");
    // Syntax of the useEffect hook in react
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
    }, [query]);
    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
            />
        </div>
    );
}
