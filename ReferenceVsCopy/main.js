//occurs for strings, numbers, and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

//arrays
const players = ['joe', 'bob', 'fred', 'ted'];
const team = players;
console.log(players, team);
team[3] = 'Lux';

//players[3] will now be lux
console.log(players);

//able to slice an array to copy it
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];


const person = {
    name: 'jo cen',
    age: 80
  };
  // and think we make a copy:
  // const captain = person;
  // captain.number = 99;
  // how do we take a copy instead?
  const cap2 = Object.assign({}, person, { number: 99, age: 12 });
  console.log(cap2);
  // We will hopefully soon see the object ...spread
  // const cap3 = {...person};
  // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
  const joe = {
    name: 'Joe',
    age: 100,
    social: {
      twitter: '@jocen',
      facebook: 'jocen.developer'
    }
  };
  console.clear();
  console.log(joe);
  const dev = Object.assign({}, joe);
  const dev2 = JSON.parse(JSON.stringify(joe));