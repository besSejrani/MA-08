import faker from "faker"
import fs from "fs"

export const createDiscounts = (nomberRows) => {

    // Write Comments
    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql",`--Generates discounts entries \n`, (err) => {
        if (err) console.log('The lyrics were updated!');
    })

    for(let i=0; i<=nomberRows; i++){

        // Generates discounts entries
        const discounts = `insert into discounts (rebate, from_date, to_date, created_at) VALUES('${Math.floor(Math.random()*100 + 1)}','${faker.date.soon()}', '${faker.date.future()}', '${faker.date.past()}')`

        fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql",`${discounts} \n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
    }
    
    // Add New Lines
    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql",`\n\n\n\n`, (err) => {
        if (err) console.log('The lyrics were updated!');
    })
}