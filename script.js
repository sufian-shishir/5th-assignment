// searchBtn Eventlistener and loop through for innerDish
const searchBtn = document.getElementById('search-btn').addEventListener('click', function () {
    document.getElementById('dishIngredients').style.display = 'none';
    let innerDish = document.getElementsByClassName('food');
    for (let i = 0; i < innerDish.length; i++) {
        const dish = innerDish[i];
        dish.style.display = 'none';
    };

    let getMealArea = document.getElementById('search-meal').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${getMealArea}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));

});

// displayMeals function for display the foods in dishDiv.
const displayMeals = foods => {
   if(foods){
       document.getElementById("not-found").style.display = 'none';
    const dishesDiv = document.getElementById('dishes');
    foods.forEach(food => {
        const dishDiv = document.createElement('div');
        dishDiv.className = 'food';
        dishDiv.innerHTML = `
        <img  onclick="displayIngredients('${food.strMeal}')" src="${food.strMealThumb}">
        <h3 onclick ="displayIngredients('${food.strMeal}')">${food.strMeal}</h3>
            `
        dishesDiv.appendChild(dishDiv);
    });
   }
   else{
       document.getElementById("not-found").style.display = 'block';
    const dishesDiv = document.getElementById('not-found');
    dishesDiv.innerHTML = `
    <h2>No Dishes Available<h2>`
   }
};

// displayIngredients function.
const displayIngredients = dishName =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
    .then(res => res.json())
    .then(data => displayIngredientDetails(data.meals))
};

// displayIngredientDetails function for show the details of a food.
const displayIngredientDetails = foods => {
    document.getElementById('dishIngredients').style.display = 'block';
    const foodDetail = document.getElementById('dishIngredients')
    foodDetail.innerHTML = `
    <img src="${foods.strMealThumb}">
    <h3>${foods.strMeal}</h3>

    `
    for (let i = 1; i < 21; i++) {
        let Ingredient = `strIngredient` + i.toString();
        let measure = `strMeasure` + i.toString();
        if (foods[Ingredient]) {
            dishIngredients.innerHTML += `
        <p>${foods[Ingredient]}: ${foods[measure]}</p>
        `
        };

    };
};





