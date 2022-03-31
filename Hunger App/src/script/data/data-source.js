class DataSource {
    static searchMeal() {
        return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                return Promise.resolve(responseJSON.meals[0]);
            })
    }
}

export default DataSource;
