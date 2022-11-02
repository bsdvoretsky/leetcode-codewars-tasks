/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  if (color === image[sr][sc]) return image;
  
  let firstColor = image[sr][sc];
  
  const floodFillRec = (sr, sc) => {
    image[sr][sc] = color;
    
    if (
      sr - 1 >= 0 
      && image[sr - 1][sc] === firstColor
    ) floodFillRec(sr - 1, sc);
    if (
      sr + 1 < image.length
      && image[sr + 1][sc] === firstColor
    ) floodFillRec(sr + 1, sc);
    if (
      sc - 1 >= 0
      && image[sr][sc - 1] === firstColor
    ) floodFillRec(sr, sc - 1);
    if (
      sc + 1 < image[0].length
      && image[sr][sc + 1] === firstColor
    ) floodFillRec(sr, sc + 1);
  }
  
  image[sr][sc] = color;
  
  floodFillRec(sr, sc);
  
  return image;
};