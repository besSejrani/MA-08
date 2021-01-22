import faker from "faker";
import fs from "fs";

export const createProducts = (nomberRows) => {
  // Write Comments
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `--Generates products entries \n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });

  for (let i = 1; i <= nomberRows; i++) {
    // Generates products entries
    const products = `insert into products (name, description_francais, description_deutsch, description_english, price) VALUES('${faker.commerce.productName()}','${faker.commerce
      .productDescription()
      .replace("'", "")}', '${faker.commerce
      .productDescription()
      .replace("'", "")}', '${faker.commerce.productDescription().replace("'", "")}', '${Math.floor(
      Math.random() * 1000 + 1
    )}')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${products} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
