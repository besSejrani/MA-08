import fs from "fs";

import { createPages } from "./utils/createPages.js";
import { createEvents } from "./utils/createEvents.js";
import { createUsers } from "./utils/createUsers.js";
import { createCarts } from "./utils/createCarts.js";
import { createRoles } from "./utils/createRoles.js";
import { createDiscounts } from "./utils/createDiscounts.js";
import { createProducts } from "./utils/createProducts.js";
import { createSuppliers } from "./utils/createSuppliers.js";

import { ordersContainProducts } from "./utils/ordersContainProducts.js";
import { productsAddCarts } from "./utils/productsAddCarts.js";
import { suppliersSupplyProducts } from "./utils/suppliersSupplyProducts.js";
import { ordersApplyDiscounts } from "./utils/ordersApplyDiscounts.js";
import { usersConfigurePages } from "./utils/usersConfigurePages.js";
import { usersCreateDiscounts } from "./utils/usersCreateDiscounts.js";
import { usersHasRoles } from "./utils/usersHasRoles.js";
import { usersOwnCarts } from "./utils/usersOwnCarts.js";
import { usersParticipateEvents } from "./utils/usersParticpateEvents.js";
import { usersPerformOrders } from "./utils/usersPerformOrders.js";

fs.writeFile("../Rendu/FillDatabase Ecommerce.sql", "", () => {
  try {
    console.log("file has been writen");
  } catch (error) {
    console.log(error.message);
  }
});

fs.appendFileSync(
  "../Rendu/FillDatabase Ecommerce.sql",
  `--Automatically inserted values, please do not modify this file directly \n\n`,
  (err) => {
    if (err) console.log("The lyrics were updated!");
  }
);

fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `USE Ecommerce\nGO \n\n`, (err) => {
  if (err) console.log("The lyrics were updated!");
});

createPages(100);
createEvents(100);
createUsers(100);
createCarts(100);
createRoles(5);
createDiscounts(100);
createProducts(100);
createSuppliers(100);

ordersContainProducts(100);
productsAddCarts(100);
suppliersSupplyProducts(100);
ordersApplyDiscounts(100);
usersConfigurePages(100);
usersCreateDiscounts(100);
usersHasRoles(5);
usersOwnCarts(100);
usersParticipateEvents(100);
usersPerformOrders(100);
