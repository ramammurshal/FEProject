import "./meal-item.js"

class MealBox extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        const mealItem = document.createElement("meal-item");
        mealItem.item = this._meal;
        this.shadowDOM.appendChild(mealItem);
    }
}

customElements.define("meal-box", MealBox);
