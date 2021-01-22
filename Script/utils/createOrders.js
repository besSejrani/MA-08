import faker from "faker"
import {v4 as uuid} from "uuid"
import fs from "fs"

export const createOrders = () => {
    for(let i=0; i<=100; i++){

        //Generates 100 orders entries
        const orders = `insert into orders (total_amount, tracking_number, created_at) VALUES('${Math.floor(Math.random()*10000 + 1)}','${uuid()}', '${faker.date.past()}')`

        fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`${orders} \n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
    }
}