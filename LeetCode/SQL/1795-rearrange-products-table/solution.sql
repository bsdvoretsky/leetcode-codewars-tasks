SELECT product_id, 'store1' AS 'store', store1 AS 'price'
FROM Products
WHERE NOT store1 IS NULL
UNION
SELECT product_id, 'store2' AS 'store', store2 AS 'price'
FROM Products
WHERE NOT store2 IS NULL
UNION
SELECT product_id, 'store3' AS 'store', store3 AS 'price'
FROM Products
WHERE NOT store3 IS NULL