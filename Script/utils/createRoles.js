import faker from "faker"
import fs from "fs"

export const createRoles = () => {   
    for(let i=0; i<=5; i++){
        // Generates 5 roles entries
        const roles = `insert into roles (name) VALUES('${faker.name.jobType().replace("'", "")}')`

    fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`${roles} \n`, (err) => {
        if (err) console.log('The lyrics were updated!');
    })
    }
}

