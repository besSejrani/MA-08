-- title:   View Ecomemrce.sql
-- Date:    21.01.2021
-- Author:  Besjan Sejrani
-- Goal:    Create ecommerce database for school project

---------------------------------------------------------------

-- Select Ecommerce database
Use Ecommerce
GO

-- Select all columns and create a view of it
CREATE VIEW [EcommerceCounter] AS 
Select COUNT(users.id) AS Users,
(Select COUNT(id) FROM roles) AS Roles, 
(Select COUNT(id) FROM events) AS Events,
(Select COUNT(id) FROM pages) AS Pages,
(Select COUNT(id) FROM discounts) AS Discounts,
(Select COUNT(id) FROM orders) AS Orders,
(Select COUNT(id) FROM carts) AS Carts,
(Select COUNT(id) FROM products) AS Products,
(Select COUNT(id) FROM suppliers) AS Suppliers
FROM users