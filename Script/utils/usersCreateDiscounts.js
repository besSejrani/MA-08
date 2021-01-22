import fs from "fs";

export const usersCreateDiscounts = (nomberRows) => {
  // Write Comments
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `--Generates users_create_discounts entries \n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });

  for (let i = 1; i <= nomberRows; i++) {
    // Generates users_create_discounts entries
    const users_create_discounts = `insert into users_create_discounts (user_id, discount_id) VALUES('${i}', '${i}')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${users_create_discounts} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
