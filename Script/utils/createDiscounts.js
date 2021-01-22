import faker from "faker"
import fs from "fs"

export const createDiscounts = () => {

    
    for(let i=0; i<=100; i++){

        // Generates 100 discounts entries
        const discounts = `insert into discounts (rebate, from_date, to_date, created_at) VALUES('${Math.floor(Math.random()*100 + 1)}','${faker.date.soon()}', '${faker.date.future()}', '${faker.date.past()}')`

        fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`${discounts} \n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
        
    }
}