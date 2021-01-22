import faker from "faker"
import fs from "fs"

export const createSuppliers = (nomberRows) => {
    
    // Write Comments
    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql",`--Generates suppliers entries \n`, (err) => {
        if (err) console.log('The lyrics were updated!');
    })

    for(let i=0; i<=nomberRows; i++){

        // Generates suppliers entries
        const suppliers = `insert into suppliers (name, email, address, phone, country) VALUES('${faker.company.companyName().replace("'", "")}', '${faker.internet.email()}', '${faker.address.streetAddress().replace("'", "")}', '${faker.phone.phoneNumber().replace("'", "")}', '${faker.address.country().replace("'", "")}')`

        fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql",`${suppliers} \n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
    }

    // Add New Lines
    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql",`\n\n\n\n`, (err) => {
        if (err) console.log('The lyrics were updated!');
    })
}