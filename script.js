// import LinkedList from './linked-list';
// const linkedList = LinkedList();
function hash(key) {
  let hashCode = 0;
      
  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  };
  
  return hashCode;
};

function HashMap() {
  let buckets = Array(4).fill(null);  
  
  function set(key, value) {
    let index = hash(key) % buckets.length;
    // let hashCode = hash(key);
    // let index = hashCode //% 4
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }; 

    if (buckets[index] === null) {
      buckets[index] = [[key, value]];
      // buckets[index] = [key, value];
    } else {
      const sameKey = buckets[index].find(x => x[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        buckets[index].push([key,value]);
      };
    };
    
    let load = length();
    if (buckets.length / load > 0.75) {
      reSize();
    };
  };

  function reSize() {
    let copy = Array(buckets.length * 2).fill(null);
    //create new double size Array
    buckets.forEach(bucket => {
      if(bucket !== null) {
        // bucket.forEach(([key, value]) => {
        //     let index = hash(key) % copy.length; 
        //     if (copy[index] === null) {
        //       copy[index] = []; // Initialize copy[index] if it's null
        //     }
        //     copy[index].push([key,value]);
        //   });
        // };
        if (bucket !== null) {
          bucket.forEach(([key, value]) => {
            let index = hash(key) % copy.length;      

            if (copy[index] === null) {
              copy[index] = [[key, value]];  
            } else {
              const sameKey = copy[index].find(x => x[0] === key);
              if (sameKey) {
                sameKey[1] = value;
              } else {
                copy[index].push([key,value]);
              };
            };
          });
        };
      };
      buckets = copy;
    });
  };
  
  function get(key) {
    //let index = hash(key);
    return buckets[index].find(x => x[0] === key)[1];
  };

  function has(key) {
    let index = hash(key);
    if (buckets[index] === null) return false
    return true;
  };

  function remove(key) {
    if (has(key)) {
      //let index = hash(key);
      const removeIndex = buckets[index].findIndex(x => x[0] === key);
      buckets[index].splice(removeIndex, 1)
      return true;
    } else {
      return false;
    };
  };

  function length() {
    let keySum = 0;
    buckets.forEach(bucket => {
      if (bucket !== null) {
        keySum += bucket.length; 
      };
    });
    return keySum;
  };

  function clear() {
    let num = length();
    buckets = Array(num).fill(null);
  };

  function keys() {
    let allKeys = [];
    buckets.forEach(bucket => {
      if (bucket !== null) {
        bucket.forEach(pair => {
          allKeys.push(pair[0]);
        });
      };
    });
    return allKeys;
  };

  function values() {
    let allValues =[];
    buckets.forEach(bucket => {
      if (bucket !== null) {
        bucket.forEach(pair => {
          allValues.push(pair[1]);
        });
      };
    });
    return allValues;
  };

  function entries() {
    let allEntries = [];
    buckets.forEach(bucket => {
      if (bucket !== null) {
        bucket.forEach(pair => {
          allEntries.push(pair);
        });
      };
    });
    return allEntries;
  }

  return {
    entries,
    values,
    keys,
    clear,
    length,
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
//  console.log(myTable.entries());
console.log(myTable.buckets);
myTable.set('a', '1');
myTable.set('b', '2');
myTable.set('c', '3');
myTable.set('d', '4');
myTable.set('f', '5');

console.log(myTable.buckets);
console.log(myTable.entries());
console.log(myTable.length());
// myTable.remove('first name');
// console.log(myTable.buckets);
// console.log(myTable.get("first name"));
// console.log(myTable.get("last name"));
// console.log(myTable.has('first name'));