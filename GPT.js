const prompt = require("prompt-sync")();

const menu = {
  drinks: {
    Cola: 12,
    "Milk Tea": 18,
    "Orange Juice": 20,
    "Hot Chocolate": 15,
    "Iced Fresh Lemon Tea": 16,
  },
  burger: {
    "McSpicy Chicken Filet": 24,
    "Big Mac": 26,
    "Double Cheeseburger": 22,
    "Ham N' Cheese Burger": 20,
    "Sausage McMuffin": 18,
  },
  sides: {
    "Chicken McNuggets": 19,
    "Fries": 10,
    "Hash Browns": 8,
    "Fresh Corn Cup": 9,
    "McWings": 12,
    "abc": 88,
  },
};

function displayMenu() {
  console.log("Menu Options:");
  let categoryIndex = 1;
  for (const category in menu) {
    console.log(`${categoryIndex}: ${category}`);
    let itemNumber = 1;
    for (const item in menu[category]) {
      console.log(`  ${itemNumber}: ${item} - $${menu[category][item]}`);
      itemNumber++;
    }
    categoryIndex++;
  }
}

function addToCart(categorySelection, itemSelection, shoppingCart) {
  let categoryIndex = 1;
  for (const category in menu) {
    if (parseInt(categorySelection) === categoryIndex) {
      let itemNumber = 1;
      for (const item in menu[category]) {
        if (parseInt(itemSelection) === itemNumber) {
          const itemName = Object.keys(menu[category])[itemNumber - 1];
          const itemPrice = menu[category][itemName];
          if (!shoppingCart.items[itemName]) {
            shoppingCart.items[itemName] = {
              quantity: 1,
              price: itemPrice,
              subtotal: itemPrice,
            };
          } else {
            shoppingCart.items[itemName].quantity++;
            shoppingCart.items[itemName].subtotal += itemPrice;
          }
          shoppingCart.totalprice += itemPrice;
          return true;
        }
        itemNumber++;
      }
    }
    categoryIndex++;
  }
  return false;
}

while (true) {
  let shoppingCart = { items: {}, totalprice: 0 };
  displayMenu();

  let categorySelection = prompt("Enter the number of the category you would like to order from: ");
  let itemSelection = prompt("Enter the number of the item you would like to order (press Enter to finish): ");

  while (categorySelection !== "") {
    if (!addToCart(categorySelection, itemSelection, shoppingCart)) {
      console.log("Category or item not found. Please try again.");
    } else {
      console.log(shoppingCart);
    }
    categorySelection = prompt("Enter the number of the category you would like to order from: ");
    itemSelection = prompt("Enter the number of the item you would like to order (press Enter to finish): ");
  }

  let balance = parseFloat(prompt("What is your balance? (HK$) "));
  if (balance - shoppingCart.totalprice < -35) {
    console.log("Not enough money");
  } else {
    balance -= shoppingCart.totalprice;
    console.log("Successful payment!");
    console.log("Receipt:");
    for (const item in shoppingCart.items) {
      console.log(
        `${item} (x${shoppingCart.items[item].quantity}): $${shoppingCart.items[item].price} each, Subtotal: $${shoppingCart.items[item].subtotal}`
      );
    }
    console.log(`TOTAL: $${shoppingCart.totalprice}`);
    console.log(`Remaining balance: HK$${balance}`);
  }

  let nextCustomer = prompt("Is there a next customer? (yes/no) ");
  if (nextCustomer.toLowerCase() !== "yes") {
    break;
  }
}
