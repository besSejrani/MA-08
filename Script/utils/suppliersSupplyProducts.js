import fs from "fs";

export const suppliersSupplyProducts = (nomberRows) => {
  // Write Comments
  fs.appendFileSync(
    "../Rendu/FillDatabase Ecommerce.sql",
    `--Generates suppliers_supply_products entries \n`,
    (err) => {
      if (err) console.log("The lyrics were updated!");
    }
  );

  for (let i = 1; i <= nomberRows; i++) {
    // Generates suppliers_supply_products entries
    const suppliers_supply_products = `insert into suppliers_supply_products (supplier_id, product_id) VALUES('${i}', '${i}')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${suppliers_supply_products} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
