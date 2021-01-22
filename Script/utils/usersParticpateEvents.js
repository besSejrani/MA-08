import fs from "fs";

export const usersParticipateEvents = (nomberRows) => {
  // Write Comments
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `--Generates users_participate_events entries \n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });

  for (let i = 1; i <= nomberRows; i++) {
    // Generates users_participate_events entries
    const users_participate_events = `insert into users_participate_events (user_id, event_id) VALUES('${i}', '${i}')`;

    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `${users_participate_events} \n`, (err) => {
      if (err) console.log("The lyrics were updated!");
    });
  }

  // Add New Lines
  fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql", `\n\n\n\n`, (err) => {
    if (err) console.log("The lyrics were updated!");
  });
};
