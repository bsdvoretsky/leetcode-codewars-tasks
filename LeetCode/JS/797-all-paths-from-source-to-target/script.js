/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function(graph) {
  const ans = []
  const visit = (index, path) => {
    let newPath = [...path]
    newPath.push(index)

    if (index === graph.length - 1) {
      ans.push(newPath)
    } else {
      for (tempIndex in graph[index]) {
        visit(graph[index][tempIndex], newPath)
      }
    }
  }

  visit(0, [])
  
  return ans;
};