import faker from "faker";
import fs from "fs";

export const createEvents = (nomberRows) => {
  // Write Comments
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `--Generates events entries \n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });

  for (let i = 1; i <= nomberRows; i++) {
    // Generates events entries
    const events = `insert into events (name, description, address, start_date, end_date, created_at, updated_at, city, zip, lat, lng) VALUES('${faker.hacker.noun()} Event', '${faker.commerce
      .productDescription()
      .replace("'", "")}', '${faker.address
      .streetAddress()
      .replace("'", "")}', '${faker.date.soon()}','${faker.date.future()}', '${new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "")}', 'null', '${faker.address.city().replace("'", "")}', '${faker.address
      .zipCode()
      .replace("'", "")}', '${faker.address.latitude()}', '${faker.address.longitude()}')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${events} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
