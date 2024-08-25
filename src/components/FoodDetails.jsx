import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
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
        }
        fetchFood();
    }, [foodId]);
    return (
        <div>
            Food Details {foodId}
            {food.title}
            <img src={food.image} alt="" />
        </div>
    );
}
