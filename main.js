var sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad"
]

var mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "BBQ Chicken Burgers",
    "Ramen"
]

var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Pumpkin Pie"
]

var letsCookBtn = document.querySelector('.lets-cook-btn');
var sideBtn = document.querySelector('.side-btn');
var mainBtn = document.querySelector('.main-dish-btn');
var dessertBtn = document.querySelector('.dessert-btn');
var icon = document.querySelector('.icon');
var suggestedDishView = document.querySelector('.suggestion-view');
var youShouldMake = document.querySelector('.you-should-make');

letsCookBtn.addEventListener('click', displayRandomDish)

function hideIcon() {   
    icon.classList.add("hidden");
    suggestedDishView.classList.remove("hidden");
}

function showRandomSide() {
    var randomSideIndex = Math.floor(Math.random() * sides.length);
    suggestedDishView.innerHTML = 
        `<p class="you-should-make"><em>You should make:</em></p> 
        <h1 class="dish">${sides[randomSideIndex]}!<h1>
        <button class="clear-btn">CLEAR</button>`
}

function showRandomMain() {
    var randomMainIndex = Math.floor(Math.random() * mains.length);
    suggestedDishView.innerHTML = 
        `<p class="you-should-make"><em>You should make:</em></p> 
        <h1 class="dish">${mains[randomMainIndex]}!<h1>
        <button class="clear-btn">CLEAR</button>`
}

function showRandomDessert() {
    var randomDessertIndex = Math.floor(Math.random() * desserts.length);
    suggestedDishView.innerHTML = 
        `<p class="you-should-make"><em>You should make:</em></p> 
        <h1 class="dish">${desserts[randomDessertIndex]}!<h1>
        <button class="clear-btn">CLEAR</button>`
}

function displayRandomDish() {
    hideIcon();
    if (sideBtn.checked ) {
        showRandomSide();
    } else if (mainBtn.checked) {
        showRandomMain();
    } else if (dessertBtn.checked) {
        showRandomDessert();
    } else {
        alert("Please select a category!");
    }
}