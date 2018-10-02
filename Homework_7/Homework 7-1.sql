
-- 1a
SELECT actor.first_name, actor.last_name
FROM actor
GROUP BY actor.last_name 

-- 1b
SELECT CONCAT(first_name, ' ' ,last_name) AS ActorName
FROM actor
GROUP BY actor.last_name;

-- 2a
SELECT actor.first_name, actor.last_name, actor.actor_id
FROM actor
WHERE first_name="Joe";

-- 2b
SELECT actor.first_name, actor.last_name
FROM actor
WHERE last_name LIKE '%GEN%'

-- 2c
SELECT actor.first_name, actor.last_name
FROM actor
WHERE last_name LIKE '%LI%'
GROUP BY actor.last_name, actor.first_name;

-- 2d
SELECT country.country_id, country.country
FROM country
WHERE country IN ('Afghanistan', 'Bangladesh', 'China');

-- 3a
ALTER TABLE actor
ADD description blob;

-- 3b
ALTER TABLE actor
DROP description;

-- 4a
SELECT count(actor.last_name), actor.last_name
FROM actor
GROUP BY last_name

-- 4b
SELECT actor.last_name, COUNT(actor.last_name)
FROM actor
GROUP BY actor.last_name 
HAVING COUNT(actor.last_name)>=2;

-- 4c

UPDATE actor
SET first_name = replace(first_name, Groucho, Harpo)
WHERE first_name like Harpo

-- 5a
SHOW CREATE TABLE address


-- 6a
SELECT s.first_name, s.last_name , a.address
FROM staff s
JOIN address a
ON s.address_id = a.address_id

-- 6b
SELECT s.first_name, s.last_name , SUM(p.amount)
FROM staff s
JOIN payment p
ON p.staff_id = s.staff_id
WHERE Month(p.payment_date)=08 AND Year(p.payment_date)=2005
GROUP BY s.staff_id;


-- 6c
SELECT actor.last_name, COUNT(actor.last_name)
FROM actor
GROUP BY actor.last_name 
HAVING COUNT(actor.last_name)>=2;

-- 6d
SELECT film.title, count(inventory.inventory_id)
FROM film
JOIN inventory
ON film.film_id=inventory.film_id
GROUP BY inventory_id
HAVING film.title= "Hunchback Impossible";




--7c
SELECT c.first_name, c.last_name , c.email, cou.country
FROM customer c
JOIN address a
ON c.address_id = a.address_id
JOIN city
ON a.city_id = city.city_id
JOIN country cou
ON cou.country_id = city.country_id
WHERE cou.country = 'canada';

-- 7h
SELECT SUM(payment.amount),category.name
FROM payment
JOIN rental 
ON payment.rental_id = rental.rental_id
JOIN inventory
ON inventory.inventory_id=rental.inventory_id
JOIN film_category
ON film_category.film_id=inventory.film_id
JOIN category
ON category.category_id=film_category.category_id
GROUP BY category.name
ORDER BY Sum(payment.amount) DESC 


-- 8a
CREATE VIEW Top_Five_Genres
AS SELECT SUM(payment.amount),category.name
FROM payment
JOIN rental 
ON payment.rental_id = rental.rental_id
JOIN inventory
ON inventory.inventory_id=rental.inventory_id
JOIN film_category
ON film_category.film_id=inventory.film_id
JOIN category
ON category.category_id=film_category.category_id
GROUP BY category.name
ORDER BY Sum(payment.amount) DESC;

-- 8b
SELECT * FROM Top_Five_Genres;
