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
  for (const category in menu) {
    console.log(category + ":");
    for (const item in menu[category]) {
      console.log(item + ": $" + menu[category][item]);
    }
  }
}

function addToCart(selection, shoppingCart) {
  for (const category in menu) {
    for (const item in menu[category]) {
      if (selection.toLowerCase() === item.toLowerCase()) {
        if (!shoppingCart.items[item]) {
          shoppingCart.items[item] = {
            quantity: 1,
            price: menu[category][item],
            subtotal: menu[category][item],
          };
        } else {
          shoppingCart.items[item].quantity++;
          shoppingCart.items[item].subtotal += menu[category][item];
        }
        shoppingCart.totalprice += menu[category][item];
        return true;
      }
    }
  }
  return false;
}

while (true) {
  let shoppingCart = { items: {}, totalprice: 0 };
  displayMenu();

  while (true) {
    let userSelection = prompt(
      "What would you like to order? (press Enter to finish) ",
    );
    if (userSelection === "") {
      break;
    } else {
      if (!addToCart(userSelection, shoppingCart)) {
        console.log("Item not found. Please try again.");
      } else {
        console.log(shoppingCart);
      }
    }
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
        `${item} (x${shoppingCart.items[item].quantity}): $${shoppingCart.items[item].price} each, Subtotal: $${shoppingCart.items[item].subtotal}`,
      );
    }
    console.log(`TOTAL: $${shoppingCart.totalprice}`);
    console.log(`Remaining Octopus balance: HK$${balance}`);
  }

  let nextCustomer = prompt("Is there a next customer? (yes/no) ");
  if (nextCustomer.toLowerCase() !== "yes") {
    break;
  }
}
