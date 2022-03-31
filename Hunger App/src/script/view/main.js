// Import semua tampilan
import "../component/app-header.js";
import "../component/meal-btn.js";
import "../component/meal-box.js";

// Import Class yang akan melakukan HTTP Request
import DataSource from "../data/data-source.js";

const main = () => {
    const mealBtn = document.querySelector("meal-btn");
    const mealBox = document.querySelector("meal-box");

    // Fungsi ini mengembalikan object yang udah bisa langsung dipakai
    const onButtonSearchClicked = () => {
        DataSource.searchMeal()
            .then(renderResult)
    };

    // Yang masuk kesini sudah berupa object
    const renderResult = result => {
        mealBox.meal = result;
    };

    mealBtn.clickEvent = onButtonSearchClicked;
}

export default main;
