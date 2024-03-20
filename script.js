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
    let hashCode = hash(key);

    let index = hashCode //% 4
    if (index < 0 || index >= bucketsLength) {
      throw new Error("Trying to access index out of bound");
    }; 

    if (buckets[index] === undefined) {
      buckets[index] = [key,value];
    };

    // if (buckets[index]) {
    //   let sameKey = false;
    //   buckets.forEach(bucket => {
    //     bucket.forEach(idx => {
    //       // if (bucket[0][0] === key) {
    //     if (idx[0] === key && sameKey === false) {}
    //       buckets[index] = [[key,value]]
    //       sameKey = true;
    //     })
    //   });
    //   if (sameKey === true) {        
    //     buckets[index].push([key,value]);
    //   };
    // };

    if (buckets[index]) {
      buckets[index].push([key,value]);
    } else {
      buckets[index] = [[key,value]]
    };    
  };
  

  function get(key) {
    let hashCode = hash(key);
    return buckets[hashCode].find(x => x[0] === key)[1];
  };

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
console.log(myTable.get("first name"));
console.log(myTable.get("last name"));