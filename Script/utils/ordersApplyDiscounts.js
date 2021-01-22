import fs from "fs";

export const ordersApplyDiscounts = (nomberRows) => {
  // Write Comments
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `--Generates orders_apply_discounts entries \n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });

  for (let i = 1; i <= nomberRows; i++) {
    // Generates orders_apply_discounts entries
    const orders_apply_discounts = `insert into orders_apply_discounts (discount_id, order_id) VALUES('${i}', '${i}')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${orders_apply_discounts} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
