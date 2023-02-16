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
var clearBtn = document.querySelector('.clear-btn');
var dish = document.querySelector('.dish');

letsCookBtn.addEventListener('click', displayRandomDish);
clearBtn.addEventListener('click', clearRandomDish);

function hideIcon() {   
    icon.classList.add("hidden");
    suggestedDishView.classList.remove("hidden");
};

function showRandomSide() {
    var randomSideIndex = Math.floor(Math.random() * sides.length);
    dish.innerText = `${sides[randomSideIndex]}!`;
};

function showRandomMain() {
    var randomMainIndex = Math.floor(Math.random() * mains.length);
    dish.innerText = `${mains[randomMainIndex]}!`;
};

function showRandomDessert() {
    var randomDessertIndex = Math.floor(Math.random() * desserts.length);
    dish.innerText = `${desserts[randomDessertIndex]}!`;
};

function displayRandomDish() {
    hideIcon();
    if (sideBtn.checked ) {
        showRandomSide();
    } else if (mainBtn.checked) {
        showRandomMain();
    } else if (dessertBtn.checked) {
        showRandomDessert();
    } else {
        alert("Please select an option!");
    }
};

function clearRandomDish() {
    suggestedDishView.classList.add("hidden");
    icon.classList.remove("hidden");
};