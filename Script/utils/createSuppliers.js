import faker from "faker"
import fs from "fs"

export const createSuppliers = () => {

    for(let i=0; i<=100; i++){

        //Generates 100 suppliers entries
        const suppliers = `insert into suppliers (name, email, address, phone, country) VALUES('${faker.company.companyName().replace("'", "")}', '${faker.internet.email()}', '${faker.address.streetAddress().replace("'", "")}', '${faker.phone.phoneNumber().replace("'", "")}', '${faker.address.country().replace("'", "")}')`

        fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`${suppliers} \n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
    }
}