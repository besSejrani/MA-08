import faker from "faker"
import fs from "fs"

export const createCarts = () =>{

    for(let i=0; i<=100; i++){
       
         // Generates 100 carts entries
        const carts = `insert into carts (created_at, updated_at) VALUES('${faker.date.past()}', 'null')`

        fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`${carts} \n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
        
    }
}