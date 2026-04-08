-- Write your query below
select name
from (SELECT name, orders.id as id from customers
left join orders on customers.id = orders.customer_id) where id is null;
