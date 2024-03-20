// import LinkedList from './linked-list';
// const linkedList = LinkedList();
function hash(key) {
  let hashCode = 0;
      
  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  };
  
  return hashCode % 4;
};

function HashMap() {
  let buckets = Array(4).fill(null);
  let bucketsLength = 4;

  function set(key, value) {
    // let hashCode = hash(key);
    // let index = hashCode //% 4
    let index = hash(key);
    if (index < 0 || index >= bucketsLength) {
      throw new Error("Trying to access index out of bound");
    }; 

    if (buckets[index] === undefined) {
      buckets[index] = [key,value];
    };

    if (buckets[index] === null) {
      buckets[index] = [[key, value]];  
    } else {
      const sameKey = buckets[index].find(x => x[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        buckets[index].push([key,value]);
      };
    };  
  };
  
  function get(key) {
    let index = hash(key);
    return buckets[index].find(x => x[0] === key)[1];
  };

  function has(key) {
    let index = hash(key);
    if (buckets[index] === null) return false
    return true;
  }

  function remove(key) {
    if (has(key)) {
      let index = hash(key);
      const removeIndex = buckets[index].findIndex(x => x[0] === key);
      buckets[index].splice(removeIndex, 1)
      return true;
    } else {
      return false;
    };
  };

  return {
    remove,
    has,
    set,
    get,
    buckets
  };
};

const myTable = new HashMap();
myTable.set('first name', 'bob');
myTable.set('last name', 'tim');
myTable.set('age', 5);
myTable.set('dob', '1/2/1999');
console.log(myTable.buckets);
myTable.remove('first name');
console.log(myTable.buckets);
// console.log(myTable.get("first name"));
// console.log(myTable.get("last name"));
// console.log(myTable.has('first name'))