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
  let buckets = [];
  let bucketsLength = 16;

  function set(key, value) {
    let hashCode = hash(key);

    let index = hashCode % 16
    if (index < 0 || index >= bucketsLength) {
      throw new Error("Trying to access index out of bound");
    }; 

    if (buckets[index] === undefined) {
      buckets[index] = [key,value];
    };

    if (buckets[index]) {
      let sameKey = false;
      buckets.forEach(bucket => {
        if (bucket[0][0] === key) {
          buckets[index] = [[key,value]]
          sameKey = true;
        };
      });
      
      if (sameKey) {        
        buckets[index].push([key,value]);
      };
    };
  };

  function get(key) {
    let hashCode = hash(key);
    return buckets[hashCode].find(x => x[0] === key)[1];
  }

  return {
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
console.log(myTable.buckets)