function Node(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode
  };
}

function LinkedList() {
  let list = [
    {
      value: 'Head',
      nextNode: null
    },
  ];

  function append(newValue) {
    const newNode = Node(newValue);
    list[list.length-1].nextNode = newNode;
    list.push(newNode);
  };

  function prepend(newValue) {
    const newNode = Node(newValue);
    if (list.length >= 1) {
      newNode.nextNode = list[1];
    };
      list[0].nextNode = newNode;
      list.splice(1, 0, newNode);
  };
  
  function size() {
    return list.length
  };
  
  function head() {
    return list[1];
  };
  
  function tail() {
    return list[list.length-1];
  };
  
  function at(index) {
    return list[index];
  };
  
  function pop() {
    return list.pop();
  };

  function contains(value) {
    if (list.find(obj => obj.value === value)) {
      return true;
    }
    return false;
  };
  
  function find(value) {
    return list.findIndex(obj => obj.value === value);
  };
  
  function toString() {
    let preview = '';
    list.forEach(obj => {
      if (obj.value !== 'Head') {
        preview = `${preview} ( ${obj.value} ) ->`;
      };
    });
    return `${preview} null`;
  };
  
  function insertAt(newValue, index) {
    const newNode = Node(newValue);
    if (list.length >= index) {
      newNode.nextNode = list[index];
    };
    list[index-1].nextNode = newNode;
    list.splice(index, 0, newNode);
  };

  function removeAt(index) {
    list.splice(index, 1)
    list[index].nextNode = list[index + 1]
  };

  // also correct
  // return { also correct
  //   list: list,
  //   append: append,
  //   prepend: prepend
  // };
  return {
    list,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
  };
};

export default LinkedList;

const linkedList = LinkedList();
linkedList.prepend(1);
linkedList.append(2);

console.log(linkedList.toString());
linkedList.append(3);
linkedList.insertAt('ALPHA', 2)
console.log(linkedList.toString());
linkedList.removeAt(2)
console.log(linkedList.toString());
// console.log(linkedList.size());
// console.log(linkedList.head());
// console.log(linkedList.tail());
// console.log(linkedList.at(1));
// console.log(linkedList.find(10));
// console.log(linkedList.pop());
// console.log(linkedList.find(10));
// console.log(linkedList.contains(20));
// console.log(linkedList.contains(30));

// console.log(linkedList.list);
// console.dir(linkedList.list, { depth: null })