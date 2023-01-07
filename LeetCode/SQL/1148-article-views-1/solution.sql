SELECT DISTINCT v1.author_id AS 'id'
FROM Views AS v1
WHERE v1.author_id = v1.viewer_id
ORDER BY v1.author_id