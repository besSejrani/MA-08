import fs from "fs";

export const usersConfigurePages = (nomberRows) => {
  // Write Comments
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `--Generates users_configure_pages entries \n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });

  for (let i = 1; i <= nomberRows; i++) {
    // Generates users_configure_pages entries
    const users_configure_pages = `insert into users_configure_pages (user_id, page_id) VALUES('${i}', '${i}')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${users_configure_pages} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
