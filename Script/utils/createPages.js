import faker from "faker";
import fs from "fs";

export const createPages = (nomberRows) => {
  // Write Comments
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `--Generates pages entries \n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });

  for (let i = 1; i <= nomberRows; i++) {
    // Generates pages entries
    const pages = `insert into pages (title, description, url_page, created_at, updated_at) VALUES('${faker.hacker.noun()}' , '${faker.commerce
      .productDescription()
      .replace("'", "")}' , '${faker.internet.url()}',  '${new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "")}' , 'null')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${pages} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
