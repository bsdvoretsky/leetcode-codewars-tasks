function interpret(code) {
  let stack = [];
  let dir = 'RIGHT';
  var output = "";

  // 2d array represents 2d plane with instructions
  let codeMatrix = code.split('\n').map(el => el.split(''));

  // coords of current instruction
  let i = 0;
  let j = 0;

  // current instruction
  let token = codeMatrix[i][j];

  let a;
  let b;
  let value;
  let y;
  let x;
  let v;
  let isStringMode = false;
  let isTrampoline = false;

  const getRandomDir = () => {
    let dirs = ['RIGHT', 'LEFT', 'UP', 'DOWN'];
    let index = Math.floor(Math.random() * 4);
    return dirs[index];
  }

  while (token !== '@') {
    if (!isTrampoline) {
      if (isStringMode & token !== '"') {
        stack.push(token.charCodeAt());
      } else {
        if (
          token === '+' || token === '-' || token === '*'
          || token === '/' || token === '%' || token === '`'
        ) {
          a = stack.pop();
          b = stack.pop();
        } else if (
            token === '!' || token === '_' || token === '|'
            || token === '$' || token === '.' || token === ','
        ) 
        {
          value = stack.pop();
        } else if (token === 'p') {
          y = stack.pop();
          x = stack.pop();
          v = stack.pop();
        } else if (token === 'g') {
          y = stack.pop();
          x = stack.pop();
        }

        if (
          '0'.charCodeAt() <= token.charCodeAt() 
          & token.charCodeAt() <= '9'.charCodeAt()
        ) {
          stack.push(parseInt(token));
        } else {
          switch(token) {
            case '+':
              stack.push(a + b);
              break;
            case '-':
              stack.push(b - a);
              break;
            case '*':
              stack.push(a * b);
              break;
            case '/':
              a === 0 ? stack.push(0) : stack.push(Math.floor(b / a));
              break;
            case '%':
              a === 0 ? stack.push(0) : stack.push(b % a);
              break;
            case '!':
              value === 0 ? stack.push(1) : stack.push(0);
              break;
            case '`':
              b > a ? stack.push(1) : stack.push(0);
              break;
            case '>':
              dir = 'RIGHT';
              break;
            case '<':
              dir = 'LEFT';
              break;
            case '^':
              dir = 'UP';
              break;
            case 'v':
              dir = 'DOWN';
              break;
            case '?':
              dir = getRandomDir();
              break;
            case '_':
              value === 0 ? dir = 'RIGHT' : dir = 'LEFT';
              break;
            case '|':
              value === 0 ? dir = 'DOWN' : dir = 'UP';
              break;
            case '"':
              isStringMode = !isStringMode;
              break;
            case ':':
              if (stack.length === 0) {
                stack.push(0);
              } else {
                value = stack.pop();
                stack.push(value, value);
              }
              break;
            case '\\':
              if (stack.length === 1) {
                stack.push(0);
              } else {
                a = stack.pop();
                b = stack.pop();
                stack.push(a, b);
              }
              break;
            case '.':
              output += value;
              break;
            case ',':
              output += String.fromCharCode(value);
              break;
            case '#':
              isTrampoline = true;
              break;
            case 'p':
              codeMatrix[y][x] = String.fromCharCode(v);
              break;
            case 'g':
              stack.push(codeMatrix[y][x].charCodeAt());
              break;
          }
        }
      }
    } else {
      isTrampoline = false;
    }

    switch(dir) {
      case 'RIGHT':
        j++;
        break;
      case 'LEFT':
        j--;
        break;
      case 'UP':
        i--;
        break;
      case 'DOWN':
        i++;
        break;
    }

    token = codeMatrix[i][j];
  }

  return output;
}