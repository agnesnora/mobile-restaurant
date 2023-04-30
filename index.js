import { menuArray } from "./data.js";

// import menuArray

//render basic site with menuCard
// iterate over the menuArray and display the menu items
let menuCardHtml = document.getElementById("menuCard").innerHTML;
menuCardHtml = "";

function render() {
  menuCardHtml = getMenuHtml(menuArray);
}
render();
document.addEventListener("click", addToCart);

function getMenuHtml(menuArray) {
  menuArray.forEach((item) => {
    const { ingredients, name, price, id, emoji } = item;
    menuCard.innerHTML += `<div class="emoji">
    <h1>${emoji}</h1>
  </div>
  <div class="foodDetails">
    <h2 class="foodName">${name}</h2>
    <p class="ingredients">${ingredients.join()}</p>
    <p class="foodPrice">$${price}</p>
  </div>
  <button id="add" class="addToCart" data-addbutton="${id}">+</button>`;
  });
}

function addToCart(e) {
  if (e.target.dataset.addbutton) {
    handleAddToCart(e.target.dataset.addbutton);
  }
}

function handleAddToCart(foodId) {
  console.log(menuArray);
  console.log(foodId);

  const targetFoodObj = menuArray.filter((item) => {
    if (item.id === parseInt(foodId)) {
      return item;
    }
  });
  console.log(targetFoodObj);
}

//make the buttons work
//make a function called addToCart
//identify which item the click belongs to in the array
//create a new array and push the items in it
//display added items with pric and remove button and total price
//add a button called complete order
