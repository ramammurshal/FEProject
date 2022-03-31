class MealBtn extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    // Ingat bahwa clickEvent merupakan sebuah property
    set clickEvent(e) {
        this._clickEvent = e;
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

                p {
                    font-family: sans-serif;
                    font-size: 20px;
                    margin-bottom: 15px;
                }

                button {
                    background-color: #865439;
                    color: #fff;
                    font-family: sans-serif;
                    font-size: 12px;
                    padding: 8px 30px;
                    border: 0;
                    border-radius: 20px;
                    margin-bottom: 30px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #704630;
                }
        
                button:active {
                    outline: 0;
                    transform: scale(0.97);
                    background-color: #5f3a26;
                }

                @media (max-width: 850px) {
                    button {
                        margin-bottom: 40px;
                    }
                }
            </style>

            <p>Click the button below to get a random meal information: </p>
            <button>Get it!</button>
        `;

        this.shadowDOM.querySelector("button").addEventListener("click", this._clickEvent);
    }
}

customElements.define("meal-btn", MealBtn);
