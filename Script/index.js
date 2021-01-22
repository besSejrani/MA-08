import fs from "fs"


import {createPages} from "./utils/createPages.js"
import {createEvents} from "./utils/createEvents.js"
import {createUsers} from "./utils/createUsers.js"
import {createCarts} from "./utils/createCarts.js"
import {createRoles} from "./utils/createRoles.js"
import {createDiscounts} from "./utils/createDiscounts.js"
import {createProducts} from "./utils/createProducts.js"
import {createSuppliers} from "./utils/createSuppliers.js"


fs.writeFile("../Rendu/FillDatabase Ecommerce.sql","", ()=>{
    try {
        console.log("file has been writen")
    } catch (error) {
        console.log(error.message)
    }
})

fs.appendFile("../Rendu/FillDatabase Ecommerce.sql",`--Automatically inserted values, please do not modify this file directly \n\n`, (err) => {
    if (err) console.log('The lyrics were updated!');
})

createPages(100)
createEvents(100)
createUsers(100)
createCarts(100)
createRoles(5)
createDiscounts(100)
createProducts(100)
createSuppliers(100)