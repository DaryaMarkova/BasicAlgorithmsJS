import { CustomSet } from './customSet';

const set = new CustomSet(6);
set.union(2, 5);
set.union(2, 1);
set.union(0, 3);


console.log(set.find(4));
console.log(set.find(2));
console.log(set.find(5));
console.log(set.find(1));

console.log(set.find(0));
console.log(set.find(3));