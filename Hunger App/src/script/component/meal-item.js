class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set item(item) {
        this._item = item;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .item-box {
                background-color: #FFE28E;
                height: 370px;
                padding: 40px;
                border-radius: 40px;
                display: flex;
            }

            .img-box {
                flex-basis: 30%;
                background-image: url("${this._item.strMealThumb}");
                background-size: cover;
                background-position: center;
                border-radius: 20px;
            }

            .detail-item-box {
                flex-basis: 70%;
                padding: 40px;
            }

            .detail-item-box h3 {
                font-size: 2em;
                font-style: italic;
                margin-bottom: 20px;
            }

            .detail-item-box hr {
                border: 0.05px solid rgba(0, 0, 0, 0.5);
                margin-bottom: 20px;
            }

            .detail-item-box p {
                font-size: 15px;
                font-family: sans-serif;
                margin-bottom: 10px;
            }

            @media (max-width: 850px) {
                .item-box {
                    height: 650px;
                    flex-direction: column;
                }
    
                .img-box {
                    flex-basis: 60%;
                    width: 85%;
                    margin: 0 auto;
                    border-radius: 20px;
                }
    
                .detail-item-box {
                    text-align: center;
                }
            }
        </style>

        <div class="item-box">
            <div class="img-box"></div>
            <div class="detail-item-box">
                <h3>${this._item.strMeal}</h3>
                <hr>
                <p>Category: <b>${this._item.strCategory}</b></p>
                <p>Origin: <b>${this._item.strArea}</b></p>
            </div>
        </div>
        `
    }
}

customElements.define("meal-item", MealItem);

