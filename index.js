import { menuArray } from "./data.js";

function getRestaurantHtml() {
  let menuCardHtml = "";
  menuArray.forEach(function (menu) {
    menuCardHtml += ` <div id="menucard">
        <div class="menucard">
            <h1 id="emoji">${menu.emoji}</h1>
        </div>
        <div class="menucard">
            <h2>${menu.name}</h2>
            <p>${menu.ingredients}</p>
            <h3>${menu.price}$</h3>
        </div>
        <div class="menucard">
            <button id="add" data-addbutton="${menu.id}">+</button>
        </div>
    </div>`;
  });

  return menuCardHtml;
}
function render() {
  document.getElementById("restaurant").innerHTML = getRestaurantHtml();
}

render();

document.addEventListener("click", function (e) {
  if (e.target.dataset.addbutton) {
    handleAddToCart(e.target.dataset.addbutton);
  }
});
/* Identifying the clicks*/

let addedToCart = [];
let totalPrice = 0;

function handleAddToCart(foodId) {
  const targetFoodObj = menuArray.filter(function (dish) {
    return dish.id.toString() === foodId;
  })[0];
  //  console.log("targetFoodObj:", targetFoodObj);

  //addedToCart.push(targetFoodObj);
  totalPrice += targetFoodObj.price;
  console.log(totalPrice);

  const existsInCart =
    addedToCart.findIndex((food) => food.id === targetFoodObj.id) > -1;

  let inCartIndex = addedToCart.findIndex(
    (food) => food.id === targetFoodObj.id
  );
  //  console.log("inCartIndex:", inCartIndex);

  if (!existsInCart) {
    const cloneCart = {};
    Object.assign(cloneCart, targetFoodObj);
    console.log("cloneCart1:", cloneCart);
    addedToCart.push(cloneCart);
  } else {
    addedToCart[inCartIndex].price += targetFoodObj.price;
    console.log("most növelem ezt:", addedToCart[inCartIndex]);
    //console.log("cloneCart2:", cloneCart.price);
    //cloneCart.price += targetFoodObj.price;
  }
  //inCartIndex = addedToCart.findIndex((food) => food.id === targetFoodObj.id);
  // console.log("inCartIndex2:", inCartIndex);
  // console.log("addedToCart:", addedToCart);
  getYourOrderHtml(addedToCart);
}

function getYourOrderHtml() {
  let yourOrderHtml = "";
  addedToCart.forEach(function (order) {
    yourOrderHtml += `   <div id="orderedFoodList">
    <div id ="orderedFoodListLeft">
        <h2 class="orderedFoodDetails">${order.name}</h2>
        <button class="orderedFoodDetails" id="remove" data-remove="${order.id}">remove</button>
    </div>
    <div class="orderedFoodDetails" id="orderedFoodListRight">$${order.price}
    </div>
</div>`;
  });
  document.getElementById("yourOrder").innerHTML = `<h2>Your order</h2>`;

  document.getElementById("yourOrderedItems").innerHTML = yourOrderHtml;
  document.getElementById("totalPrice").innerHTML = `
  <h2>Total price</h2>
  <h3>$${totalPrice}</h3>`;

  /**document.getElementById("yourOrder").innerHTML += `
    <div id="orderedFoodList">
        <div id ="orderedFoodListLeft">
            <h2 class="orderedFoodDetails">${targetFoodObj.name}</h2>
            <button class="orderedFoodDetails" id="remove" data-remove="${targetFoodObj.id}">remove</button>
        </div>
        <div class="orderedFoodDetails" id="orderedFoodListRight">$${targetFoodObj.price}
        </div>
    </div>
    ;


      document.getElementById("totalPrice").innerHTML = `<h2>Total Price</h2>
      <h3>$12</h3>
  }**/

  console.log(addedToCart);
}
