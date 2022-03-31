class AppHeader extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
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

                .header {
                    background-color: #865439;
                    padding: 30px 60px;
                    display: flex;
                }

                .header img {
                    width: 90px;
                    height: 90px;
                }
        
                .header h2 {
                    color: white;
                    padding: 25px 0px 0px 20px;
                    font-size: 45px;
                    letter-spacing: 2px;
                }

                @media (max-width: 850px) {
                    .header {
                        padding: 30px;
                    }
        
                    .header img {
                        display: none;
                    }
        
                    .header h2 {
                        padding: 0;
                        font-size: 35px;
                    }
                }

                @media (max-width: 480px) {
                    .header h2 {
                        font-size: 30px;
                    }
                }
            </style>

            <div class="header">
                <img src="https://www.pngall.com/wp-content/uploads/2/Meal-PNG-File-Download-Free.png" alt="logo-header">
                <h2>Meals Info Application</h2>
            </div>
        `;
    }
}

customElements.define("app-header", AppHeader);
