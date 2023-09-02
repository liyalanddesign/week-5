// Menu app
// 1. User can watch full menu (as per task)
// 2. User can add menu item to order (as per task)
// 3. User can check if total price is more then his budget
// 4. User can delete some items from order (as per task)
// 5. User can order a combo

// ===============================
// 1. App's logic
// ===============================

const menuItems = [
  {
    name: "Whopper",
    description:
      "Our signature flame-grilled beef patty topped with tomatoes, lettuce, mayonnaise, ketchup, pickles, and onions on a soft sesame seed bun.",
    price: 4.99,
  },
  {
    name: "Chicken Fries",
    description:
      "Made with white meat chicken, our Chicken Fries are coated in a light crispy breading seasoned with savory spices and herbs.",
    price: 2.99,
  },
  {
    name: "Big King XL",
    description:
      "More than 1/2 lb.* of flame-grilled 100% beef, topped with melted cheese, sliced onions, zesty pickles, lettuce, and our special Big King sauce all on a toasted sesame bun.",
    price: 5.49,
  },
  {
    name: "BK Veggie Burger",
    description:
      "A delicious veggie patty served with lettuce, tomatoes, and our special sauce on a toasted sesame seed bun.",
    price: 3.99,
  },
  {
    name: "Cheesy Tots",
    description:
      "Melted cheese potato bites covered in a crispy bread coating.",
    price: 1.99,
  },
  {
    name: "Chocolate Milkshake",
    description:
      "Velvety vanilla soft serve and chocolate sauce are blended to perfection and finished with a sweet whipped topping.",
    price: 2.89,
  },
];

const menuCombos = [
  {
    name: "Whopper Meal",
    items: ["Whopper", "Medium Fries", "Medium Drink"],
    price: 6.99, // USD, prices may vary by location and over time
  },
  {
    name: "Chicken Fries Meal",
    items: ["Chicken Fries", "Medium Fries", "Medium Drink"],
    price: 5.99,
  },
  {
    name: "Big King XL Meal",
    items: ["Big King XL", "Medium Fries", "Medium Drink"],
    price: 7.49,
  },
  {
    name: "BK Veggie Burger Meal",
    items: ["BK Veggie Burger", "Medium Fries", "Medium Drink"],
    price: 6.49,
  },
];

// Menu Item Class
class MenuItem {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
  displayMenu() {
    console.log(`${this.name} - ${this.price} USD:
    ${this.items}`);
  }
}

// Combo Class
class Combo {
  constructor(name, items, price) {
    this.name = name;
    this.items = items;
    this.price = price;
  }

  displayCombo() {
    console.log(`${this.name} - ${this.price} USD:
    ${this.items}`);
  }
}

class MenuApp {
  constructor() {
    this.order = [];
    this.menu = menuItems;
    this.combo = menuCombos;
  }

  // Display all items in the menu
  displayMenuItems() {
    console.log("====== Menu Items: ======");
    for (let i = 0; i < this.menu.length; i++) {
      console.log(
        `| ${[i + 1]}. ${this.menu[i].name} - ${this.menu[i].price} USD\n|    ${
          this.menu[i].description
        }`
      );
    }
    console.log("\n===========================");
  }

  // Display all combos in the menu
  displayCombos() {
    console.log("\n====== Menu Combos: ======");
    for (let i = 0; i < this.combo.length; i++) {
      console.log(
        `| ${[i + 1]}. ${this.combo[i].name} - ${
          this.combo[i].price
        } USD\n|    ${this.combo[i].items}`
      );
    }
    console.log("\n===========================");
  }

  // Add item to the order using its index
  addToOrder(itemIndex) {
    this.order.push(this.menu[itemIndex]); // we take items from menuItems array
    console.log(`"${this.menu[itemIndex].name}" -  added to order!`);
  }

  // Order a combo using its index
  orderCombo(comboIndex) {
    this.order.push(menuCombos[comboIndex]); // we take items from menuCombos array
    console.log(`"${menuCombos[comboIndex].name}" - added to order!`);
  }

  // Delete an item from the order using its index
  deleteFromOrder(itemIndex) {
    console.log(`"${this.order[itemIndex].name}" - removed from order!`);
    this.order.splice(itemIndex, 1); // move item from order's array
  }

  // Check if the total price is more than user's budget
  checkBudget(budget) {
    const totalPrice = this.getTotalPrice();
    if (totalPrice > budget) {
      console.log(`
      Your total price of ${totalPrice} exceeds your budget of ${budget}!
      `);
    } else {
      console.log(`
Your total price of ${totalPrice} is within your budget of ${budget}.
        `);
    }
  }

  // Calculate the total price of the order
  getTotalPrice() {
    // here we use reduce() method to calculate total price by sum all item's prices
    return this.order.reduce((total, item) => total + item.price, 0);
  }

  // View the order with items and their prices
  viewOrder() {
    console.log("\n === Your Order: ===");
    console.log(" ===================");
    this.order.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - ${item.price} USD`);
    });
    console.log(`Total Price: ${this.getTotalPrice()} USD`);
  }
}

// ===============================
// 2. Sample Usage
// ===============================
const menuApp = new MenuApp(); // create instance

// Display menu items and combos
menuApp.displayMenuItems();
menuApp.displayCombos();

// Add items and combos to the order
menuApp.addToOrder(0); // Whopper
menuApp.orderCombo(1); // Chicken Fries Meal

// View the order
menuApp.viewOrder();

// Check budget
menuApp.checkBudget(15); // check if total price exceeds budget of 15

// Delete item from order
menuApp.deleteFromOrder(1); // deletes Chicken Fries Meal from order

// View updated order
menuApp.viewOrder();
