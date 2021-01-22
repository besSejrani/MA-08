-- title:   SelectDatabase Ecommerce.sql
-- Date:    21.01.2021
-- Author:  Besjan Sejrani
-- Goal:    Create ecommerce database for school project

---------------------------------------------------------------

-- Show all users who haven't user role
select * from users where role != 'users'


-- Search for all suppliers which match the inner join selection of table suppliers and suppliers_supply_products 
select email
from suppliers
inner join suppliers_supply_products as intermediary
on suppliers.id = intermediary.supplier_id


-- Double inner join, selects all orders and discounts which matches the ids on the orders_apply_discounts table
select id, total_amount, tracking_number
from orders
inner join orders_apply_discounts as orderDiscount
on orders.id = orderDiscount.order_id
inner join discounts
on orderDiscount.discount_id = dicounts.id


select title from pages where title != 'home'


-- Search for all users having created a discount
select email
from users
inner join users_create_discounts as createDiscount
on users.id = createDiscount.user_id