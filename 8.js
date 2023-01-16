let myMap = new Map([
  [false, 'value1'],
  [123, 'value2'],
  ["abc", 'value3']
  ]);


for (let key of myMap.keys()) {
  
  console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);

}

