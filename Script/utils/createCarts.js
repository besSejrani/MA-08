import faker from "faker"
import fs from "fs"

export const createCarts = (nomberRows) =>{

    fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`--Generates carts entries \n`, (err) => {
        if (err) console.log('The lyrics were updated!');
    })
    for(let i=0; i<=nomberRows; i++){
       
         // Generates carts entries
        const carts = `insert into carts (created_at, updated_at) VALUES('${faker.date.past()}', 'null')`

        fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`${carts} \n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
    }
        fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`\n\n\n\n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
}