//Error Message not showing (default) 
document.getElementById('error-message').style.display ='none';

// Search Food Field 
const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear search field
    searchField.value = '';
    //Error message hide
    document.getElementById('error-message').style.display ='none';
   // if input field is empty 
    if (searchText == ''){
        const searchResult = document.getElementById('search-result');
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="text-center">Please write something to display</p>
        `;
        searchResult.appendChild(div);
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);
    fetch(url)
    .then (res => res.json())
    .then (data => mealsSearchResult(data.meals))
    .catch (error => displayError(error)) // if showing this type of error then apply .catch "syntaxError: Unexpected token < in JSON at position" 
    }
    }

// If jsn url went to be wrong then call the display error function 
const displayError = (error) =>{
        document.getElementById('error-message').style.display ='block';
    }

// Meal Search Result 
const mealsSearchResult = meals =>{
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML= ''; // clear search result 
    searchResult.textContent = ''; // clear search result (but this one is better)
    // Into the meals there is an array so we can apply for loop
   for (const meal of meals){
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card shadow m-4 h-100">
            <img src="${meal.strMealThumb}" class="card-img-top " alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p> 
              <button  onclick= "loadMealDetail(${meal.idMeal})"; type="button" class="btn btn-outline-success">Details</button>
            </div>
    </div>
    `;
    searchResult.appendChild(div);
   } 
}

// Meal Details Load dynamically 
const loadMealDetail = id =>{
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
   fetch(url)
   .then (res => res.json())
   .then (data => displayMealDetail(data.meals[0]))
}

// Display meal details if click on the details button
const displayMealDetail = meal =>{
    console.log(meal);
    const singleMeal = document.getElementById('single-meal');
    singleMeal.textContent='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p> 
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    singleMeal.appendChild(div);
}