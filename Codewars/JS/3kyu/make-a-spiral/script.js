function spiralize (n) {
  let top = 1;
  let bottom = n;
  let right = n;
  let left = -1;
  
  let dir = 'RIGHT';
  
  let x = 0;
  let y = 0;
  
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push((new Array(n)).fill(0));
  }
  
  let isItEnd;
  
  for(;;) {
    isItEnd = false;
    
    res[y][x] = 1;
    
    if (dir === 'RIGHT' && x + 1 >= right) {
      dir = 'DOWN';
      right -= 2;
    } else if (dir === 'DOWN' && y + 1 >= bottom) {
      dir = 'LEFT';
      bottom -= 2;
    } else if (dir === 'LEFT' && x - 1 <= left) {
      dir = 'UP';
      left += 2;
    } else if (dir === 'UP' && y - 1 <= top) {
      dir = 'RIGHT';
      top += 2;
    }
    
    if (top > bottom || left > right) isItEnd = true;
    
    switch(dir) {
      case 'RIGHT':
        x++;
        if (x >= right) isItEnd = true;
        break;
      case 'LEFT':
        x--;
        if (x <= left) isItEnd = true;
        break;
      case 'DOWN':
        y++;
        if (y >= bottom) isItEnd = true;
        break;
      case 'UP':
        y--;
        if (y <= top) isItEnd = true;
        break;
    }
    
    if (isItEnd) break;
  }
  
  return res;
}