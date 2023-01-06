SELECT employee_id
FROM Employees
WHERE employee_id NOT IN (
  SELECT e.employee_id
  FROM Employees e
  JOIN Salaries s ON e.employee_id = s.employee_id
)
UNION
SELECT employee_id
FROM Salaries
WHERE employee_id NOT IN (
  SELECT s.employee_id
  FROM Salaries s
  JOIN Employees e ON s.employee_id = e.employee_id
)
ORDER BY employee_id