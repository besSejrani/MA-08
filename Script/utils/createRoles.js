import faker from "faker"
import fs from "fs"

export const createRoles = (nomberRows) => {   
    
    // Write Comments
    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql",`--Generates roles entries \n`, (err) => {
        if (err) console.log('The lyrics were updated!');
    })

    for(let i=0; i<=nomberRows; i++){
        
        // Generates roles entries
        const roles = `insert into roles (name) VALUES('${faker.name.jobType().replace("'", "")}')`

        fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql",`${roles} \n`, (err) => {
            if (err) console.log('The lyrics were updated!');
        })
    }
    
    // Add New Lines
    fs.appendFileSync("../Rendu/FillDatabase Ecommerce.sql",`\n\n\n\n`, (err) => {
        if (err) console.log('The lyrics were updated!');
    })
}

