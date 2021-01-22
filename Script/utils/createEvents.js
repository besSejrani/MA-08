import faker from "faker"
import fs from "fs"

export const createEvents = () =>{

    for(let i=0; i<=100; i++){
        
        // Generates 100 events entries
        const events = `insert into events (name, description, address, start_date, end_date, created_at, updated_at, city, zip, lat, lng) VALUES('${faker.hacker.noun()} Event', '${faker.commerce.productDescription().replace("'", "")}', '${faker.address.streetAddress().replace("'", "")}', '${faker.date.soon()}','${faker.date.future()}', '${faker.date.past()}', 'null', '${faker.address.city().replace("'", "")}', '${faker.address.zipCode().replace("'", "")}', '${faker.address.latitude()}', '${faker.address.longitude()}')`
        
        fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`${events} \n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
        
    }
}