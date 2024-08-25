import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // console.log("Received foodId:", foodId); // Выводим значение foodId
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "15c6dc89ba1d4af49def1edb6b699117";
    useEffect(() => {
        async function fetchFood() {
            // console.log("Fetching data for foodId:", foodId); // Проверка перед запросом
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
            <div>
                <h1>{food.title}</h1>
                <img src={food.image} alt="" />
                <div>
                    <span>
                        <strong>⏳{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        <strong>👩‍👩‍👦 Serves {food.servings}</strong>
                    </span>
                    <span>
                        {" "}
                        {food.vegetarian
                            ? "🥕 Vegeterian"
                            : "🥩 Non-Vegeterian"}
                    </span>
                    <span> {food.vegan ? "🐮 Vegan" : ""}</span>
                </div>
                <div>
                    💲<span>{food.pricePerServing / 100} Per serving</span>
                </div>
            </div>
            <div>
                <h2>Instructions </h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    food.analyzedInstructions[0].steps.map((step) => (
                        <li>{step.step}</li>
                    ))
                )}
                {}
            </div>
        </div>
    );
}
