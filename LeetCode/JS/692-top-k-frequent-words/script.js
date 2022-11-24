/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

class MaxHeap {
  constructor(compareFunc) {
    this.arr = [null];
    this.compare = compareFunc;
  }

  insert(node) {
    this.arr.push(node);

    if (this.arr.length > 2) {
      let cur = this.arr.length - 1;

      while (
        cur > 1 
        && this.compare(this.arr[cur], this.arr[Math.floor(cur / 2)])
        ) {
        [this.arr[Math.floor(cur / 2)], this.arr[cur]] = [this.arr[cur], this.arr[Math.floor(cur / 2)]];
        cur = Math.floor(cur / 2);
      }
    }
  }

  remove() {
    let largest = this.arr[1];
    let leftChildIndex;
    let rightChildIndex;
    let cur;

    if (this.arr.length === 1) return null;
    
    this.arr[1] = this.arr[this.arr.length - 1];
    this.arr.splice(this.arr.length - 1);

    cur = 1;
    leftChildIndex = cur * 2;
    rightChildIndex = cur * 2 + 1;

    while (
      this.arr[leftChildIndex]
      && this.arr[rightChildIndex]
      && 
      (this.compare(this.arr[leftChildIndex], this.arr[cur])
      || this.compare(this.arr[rightChildIndex], this.arr[cur]))
    ) {
      if (this.compare(this.arr[leftChildIndex], this.arr[rightChildIndex])) {
        [this.arr[cur], this.arr[leftChildIndex]] = [this.arr[leftChildIndex], this.arr[cur]];
        cur = leftChildIndex;
      } else {
        [this.arr[cur], this.arr[rightChildIndex]] = [this.arr[rightChildIndex], this.arr[cur]];
        cur = rightChildIndex;
      }

      leftChildIndex = cur * 2;
      rightChildIndex = cur * 2 + 1;
    }

    if (
      !this.arr[rightChildIndex]
      && this.arr[leftChildIndex]
      && this.compare(this.arr[leftChildIndex], this.arr[cur])
    ) {
      [this.arr[cur], this.arr[leftChildIndex]] = [this.arr[leftChildIndex], this.arr[cur]];
    }

    return largest;
  }
}

var topKFrequent = function(words, k) {
  const compare = (s1, s2) => {
    if (
      map.get(s1) > map.get(s2)
      ||
      (map.get(s1) === map.get(s2)
      && s1 < s2)
    ) return true;
    return false;
  }
  
  const map = new Map();
  let heap = new MaxHeap(compare);
  let res = [];
  let buff = new Set();

  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      map.set(words[i], map.get(words[i]) + 1);
    } else {
      map.set(words[i], 1);
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (!buff.has(words[i])) {
      heap.insert(words[i]);
      buff.add(words[i]);
    }
  }

  for (let i = 0; i < k; i++) {
    res.push(heap.remove());
  }

  return res;
};