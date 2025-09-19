const firstNames = ['zxc', 'zxc', 'zxc'];
const lastNames = ['asd', 'azxc', 'azxc'];

 
const fullNames = firstNames.map((firstName, index) => `${firstName} ${lastNames[index]}`);

 
const searchName = 'Jane Smith';

 
const foundName = fullNames.find(name => name === searchName);

if (foundName) {
  console.log(`Found: ${foundName}`);
} else {
  console.log(`${searchName} not found.`);
}