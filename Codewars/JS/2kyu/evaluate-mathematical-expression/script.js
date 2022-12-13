var calc = function (expression) {
  let expr = expression.split('').filter(sym => sym !== ' ').join('');
  
  if (expr[0] === '-') {
    expr = '_' + expr.slice(1, expr.length);
  }

  for (let i = 1; i < expr.length; i++) {
    if (
      (expr[i - 1] === '-' 
      || expr[i - 1] === '+'
      || expr[i - 1] === '*'
      || expr[i - 1] === '/'
      || expr[i - 1] === '(')
      && expr[i] === '-') {
      expr = expr.slice(0, i) + '_' + expr.slice(i + 1, expr.length);
    }  
  }

  const parseExpr = (expr) => {
    let pos = 0;
    let begin, end;
    let leftNum, rightNum;
    let leftIndex, rightIndex;
    let innerExpr;
    let braceIndex;
    
    for (;;) {
      if (pos >= expr.length) break;
      
      if (expr[pos] === '(') {
        begin = pos;
        braceIndex = 0;
        pos++;

        for (;;) {
          if (expr[pos] === ')' && braceIndex === 0) break;
          if (expr[pos] === '(') braceIndex++;
          else if (expr[pos] === ')') braceIndex--;
          pos++;
        }
        
        end = pos;
        
        innerExpr = parseExpr(expr.slice(begin + 1, end));
        if (innerExpr < 0) {
          if (begin - 1 >= 0 && expr[begin - 1] === '_') {
            expr = expr.slice(0, begin - 1) + -innerExpr.toString() + expr.slice(end + 1, expr.length);
          } else {
            expr = expr.slice(0, begin) + '_' + -innerExpr.toString() + expr.slice(end + 1, expr.length);
          }
        } else {
          expr = expr.slice(0, begin) + innerExpr.toString() + expr.slice(end + 1, expr.length);
        }
        
        pos = 0;
      }
      
      pos++;
    }

    pos = 0;
    
    for (;;) {
      if (pos >= expr.length) break;
      
      if (expr[pos] === '*' || expr[pos] === '/') {
        leftNum = "";
        rightNum = "";
        leftIndex = pos - 1;
        rightIndex = pos + 1;
        
        while (
          expr[leftIndex] >= '0' 
          && expr[leftIndex] <= '9'
          || expr[leftIndex] === '.'
          || expr[leftIndex] === '_'
        ) {
          if (expr[leftIndex] === '_') {
            leftNum += '-';
          } else {
            leftNum += expr[leftIndex];
          }
          
          leftIndex--;
        }
        
        while (
          expr[rightIndex] >= '0' 
          && expr[rightIndex] <= '9'
          || expr[rightIndex] === '.'
          || expr[rightIndex] === '_'
        ) {
          if (expr[rightIndex] === '_') {
            rightNum += '-';
          } else {
            rightNum += expr[rightIndex];
          }
          
          rightIndex++;
        }
        
        leftNum = parseFloat(leftNum.split('').reverse().join(''));
        rightNum = parseFloat(rightNum.split('').join(''));
        
        if (expr[pos] === '*') {
          if (leftIndex + 1 > 0 && rightIndex < expr.length) {
            if (leftNum * rightNum < 0) {
              expr = expr.slice(0, leftIndex + 1) + '_' + (-leftNum * rightNum).toString() + expr.slice(rightIndex, expr.length);
            } else {
              expr = expr.slice(0, leftIndex + 1) + (leftNum * rightNum).toString() + expr.slice(rightIndex, expr.length);

            }
          } else if (leftIndex + 1 > 0) {
            if (leftNum * rightNum < 0) {
              expr = expr.slice(0, leftIndex + 1) + '_' + (-leftNum * rightNum).toString();
            } else {
              expr = expr.slice(0, leftIndex + 1) + (leftNum * rightNum).toString();
            }
          } else if (rightIndex < expr.length) {
            if (leftNum * rightNum < 0) {
              expr = '_' + (-leftNum * rightNum).toString() + expr.slice(rightIndex, expr.length);         
            } else {
              expr = (leftNum * rightNum).toString() + expr.slice(rightIndex, expr.length);
            }
          } else {
            if (leftNum * rightNum < 0) {
              expr = '_' + (-leftNum * rightNum).toString();           
            } else {
              expr = (leftNum * rightNum).toString();
            }
          }
        } else {
          if (leftIndex + 1 > 0 && rightIndex < expr.length) {
            if (leftNum / rightNum < 0) {
              expr = expr.slice(0, leftIndex + 1) + '_' + (-leftNum / rightNum).toString() + expr.slice(rightIndex, expr.length);
            } else {
              expr = expr.slice(0, leftIndex + 1) + (leftNum / rightNum).toString() + expr.slice(rightIndex, expr.length);

            }
          } else if (leftIndex + 1 > 0) {
            if (leftNum / rightNum < 0) {
              expr = expr.slice(0, leftIndex + 1) + '_' + (-leftNum / rightNum).toString();
            } else {
              expr = expr.slice(0, leftIndex + 1) + (leftNum / rightNum).toString();
            }
          } else if (rightIndex < expr.length) {
            if (leftNum / rightNum < 0) {
              expr = '_' + (-leftNum / rightNum).toString() + expr.slice(rightIndex, expr.length);         
            } else {
              expr = (leftNum / rightNum).toString() + expr.slice(rightIndex, expr.length);
            }
          } else {
            if (leftNum / rightNum < 0) {
              expr = '_' + (-leftNum / rightNum).toString();           
            } else {
              expr = (leftNum / rightNum).toString();
            }
          }
        }
        
        pos = 0;
      }
      
      pos++;
    }

    pos = 0;
    
    for (;;) {
      if (pos >= expr.length) break;
      
      if (expr[pos] === '+' || expr[pos] === '-')  {
        leftNum = "";
        rightNum = "";
        leftIndex = pos - 1;
        rightIndex = pos + 1;
        
        while (
          expr[leftIndex] >= '0' 
          && expr[leftIndex] <= '9'
          || expr[leftIndex] === '.'
          || expr[leftIndex] === '_'
        ) {
          if (expr[leftIndex] === '_') {
            leftNum += '-';
          } else {
            leftNum += expr[leftIndex];
          }
          
          leftIndex--;
        }
        
        while (
          expr[rightIndex] >= '0' 
          && expr[rightIndex] <= '9'
          || expr[rightIndex] === '.'
          || expr[rightIndex] === '_'
        ) {
          if (expr[rightIndex] === '_') {
            rightNum += '-';
          } else {
            rightNum += expr[rightIndex];
          }
          
          rightIndex++;
        }
        
        leftNum = parseFloat(leftNum.split('').reverse().join(''));
        rightNum = parseFloat(rightNum.split('').join(''));
        
        if (expr[pos] === '+') {
          if (leftIndex + 1 > 0 && rightIndex < expr.length) {
            if (leftNum + rightNum < 0) {
              expr = expr.slice(0, leftIndex + 1) + '_' + (-leftNum - rightNum).toString() + expr.slice(rightIndex, expr.length);
            } else {
              expr = expr.slice(0, leftIndex + 1) + (leftNum + rightNum).toString() + expr.slice(rightIndex, expr.length);

            }
          } else if (leftIndex + 1 > 0) {
            if (leftNum + rightNum < 0) {
              expr = expr.slice(0, leftIndex + 1) + '_' + (-leftNum - rightNum).toString();
            } else {
              expr = expr.slice(0, leftIndex + 1) + (leftNum + rightNum).toString();
            }
          } else if (rightIndex < expr.length) {
            if (leftNum + rightNum < 0) {
              expr = '_' + (-leftNum - rightNum).toString() + expr.slice(rightIndex, expr.length);         
            } else {
              expr = (leftNum + rightNum).toString() + expr.slice(rightIndex, expr.length);
            }
          } else {
            if (leftNum + rightNum < 0) {
              expr = '_' + (-leftNum - rightNum).toString();           
            } else {
              expr = (leftNum + rightNum).toString();
            }
          }
        } else {
          if (leftIndex + 1 > 0 && rightIndex < expr.length) {
            if (leftNum - rightNum < 0) {
              expr = expr.slice(0, leftIndex + 1) + '_' + (-leftNum + rightNum).toString() + expr.slice(rightIndex, expr.length);
            } else {
              expr = expr.slice(0, leftIndex + 1) + (leftNum - rightNum).toString() + expr.slice(rightIndex, expr.length);

            }
          } else if (leftIndex + 1 > 0) {
            if (leftNum - rightNum < 0) {
              expr = expr.slice(0, leftIndex + 1) + '_' + (-leftNum + rightNum).toString();
            } else {
              expr = expr.slice(0, leftIndex + 1) + (leftNum - rightNum).toString();
            }
          } else if (rightIndex < expr.length) {
            if (leftNum - rightNum < 0) {
              expr = '_' + (-leftNum + rightNum).toString() + expr.slice(rightIndex, expr.length);         
            } else {
              expr = (leftNum - rightNum).toString() + expr.slice(rightIndex, expr.length);
            }
          } else {
            if (leftNum - rightNum < 0) {
              expr = '_' + (-leftNum + rightNum).toString();           
            } else {
              expr = (leftNum - rightNum).toString();
            }
          }
        }
        
        pos = 0;
      }
      
      pos++;
    }

    if (expr[0] === '_') {
      expr = '-' + expr.slice(1, expr.length);
    }

    return parseFloat(expr);
  }
  
  return parseExpr(expr);
};