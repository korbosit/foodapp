import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";

function App() {
    const [foodData, setFoodData] = useState([]);
    return (
        <div className="App">
            <Nav />
            <Search foodData={foodData} setFoodData={setFoodData} />
            <FoodList foodData={foodData} />
            <Container></Container>
        </div>
    );
}

export default App;
