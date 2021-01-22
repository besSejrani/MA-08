import faker from "faker";
import fs from "fs";

export const createUsers = (nomberRows) => {
  // Write Comments
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `--Generates users entries \n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });

  for (let i = 1; i <= nomberRows; i++) {
    // Generates users entries
    const users = `insert into users (username, firstname, lastname, email, password, url_profile, address, city, zip) VALUES('${faker.internet
      .userName()
      .replace("'", "")}', '${faker.name.firstName().replace("'", "")}', '${faker.name
      .lastName()
      .replace("'", "")}', '${faker.internet.email()}','${faker.internet
      .password()
      .replace("'", "")}', '${faker.image.people()}', '${faker.address
      .streetAddress()
      .replace("'", "")}', '${faker.address.city().replace("'", "")}', '${faker.address.zipCode().replace("'", "")}')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${users} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
