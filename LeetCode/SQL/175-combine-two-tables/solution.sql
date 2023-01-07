SELECT p.firstName, p.lastName, a.city, a.state
FROM Person AS p
JOIN Address AS a
ON p.personId = a.personId
UNION 
SELECT firstName, lastName, null AS 'city', null AS 'state'
FROM Person AS p
WHERE p.personId NOT IN (SELECT personId FROM Address)