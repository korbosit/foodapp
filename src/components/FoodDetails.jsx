import styles from "./fooddetails.module.css";
import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // console.log("Received foodId:", foodId); // Выводим значение foodId
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "15c6dc89ba1d4af49def1edb6b699117";
    useEffect(() => {
        async function fetchFood() {
            // // console.log("Fetching data for foodId:", foodId); // Проверка перед запросом
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    }, [foodId]);
    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>⏳{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        <strong>👩‍👩‍👦 Serves {food.servings}</strong>
                    </span>
                    <span>
                        <strong>
                            {food.vegetarian
                                ? "🥕 Vegeterian"
                                : "🥩 Non-Vegeterian"}
                        </strong>
                    </span>
                    <span>
                        {" "}
                        <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>{" "}
                    </span>
                </div>
                <div>
                    💲<span>{food.pricePerServing / 100} Per serving</span>
                </div>
                <h2>Ingredients</h2>
                {food.extendedIngredients &&
                    food.extendedIngredients.map((item) => (
                        <div>
                            <img
                                src={
                                    `https://spoonacular.com/cdn/ingredients_100x100/` +
                                    item.image
                                }
                                alt=""
                            />
                            <h3>{item.name}</h3>
                            <h3>
                                {item.amount} {item.unit}
                            </h3>
                        </div>
                    ))}
                <h2>Instructions </h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            food.analyzedInstructions[0].steps.map((step) => (
                                <li>{step.step}</li>
                            ))
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
}
