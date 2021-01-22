import faker from "faker"
import fs from "fs"

export const createUsers = () =>{
    
for(let i=0; i<=100; i++){
    // Generates 100 users entries
    const users = `insert into users (username, firstname, lastname, email, password, url_profile, address, city, zip) VALUES('${faker.internet.userName().replace("'", "")}', '${faker.name.firstName().replace("'", "")}', '${faker.name.lastName().replace("'", "")}', '${faker.internet.email()}','${faker.internet.password().replace("'", "")}', '${faker.image.people()}', '${faker.address.streetAddress().replace("'", "")}', '${faker.address.city().replace("'", "")}', '${faker.address.zipCode().replace("'", "")}')`;

    fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`${users} \n`, (err) => {
        if (err) console.log('The lyrics were updated!');
    })

}
}