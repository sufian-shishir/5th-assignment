

const searchBtn = document.getElementById('search-btn').addEventListener('click', function () {
    let innerDish = document.getElementsByClassName('food');
    for (let i = 0; i < innerDish.length; i++) {
        const dish = innerDish[i];
        dish.style.display = 'none';
    };

    let getMealArea = document.getElementById('search-meal').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${getMealArea}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));

});

const displayMeals = foods => {
    const dishesDiv = document.getElementById('dishes');

    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        const dishDiv = document.createElement('div');
        dishDiv.className = 'food';
        dishDiv.innerHTML = `
            <img src="${food.strMealThumb}">
            <h3>${food.strMeal}</h3>
            `
        dishesDiv.appendChild(dishDiv);
    }
};

// document.getElementsByClassName('food').addEventListener('click', function () {

// })




