import faker from "faker";
import fs from "fs";

export const createCarts = (nomberRows) => {
  // Write Comments
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `--Generates carts entries \n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });

  for (let i = 1; i <= nomberRows; i++) {
    // Generates carts entries
    const carts = `insert into carts (created_at, updated_at) VALUES('${new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "")}' , 'null')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${carts} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
