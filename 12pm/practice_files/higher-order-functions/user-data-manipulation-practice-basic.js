// Dummy user data
const users = [
  { id: 1, name: "Alice Johnson", email: "alice@email.com", age: 28, city: "New York", messages: ["Hello", "How are you?"] },
  { id: 2, name: "Bob Smith", email: "bob@email.com", age: 35, city: "Los Angeles", messages: ["What's up?"] },
  { id: 3, name: "Charlie Brown", email: "charlie@email.com", age: 22, city: "Chicago", messages: [] },
  { id: 4, name: "Diana Ross", email: "diana@email.com", age: 40, city: "New York", messages: ["Nice to meet you", "Goodbye"] },
  { id: 5, name: "Edward Norton", email: "edward@email.com", age: 45, city: "Los Angeles", messages: ["Hello world"] },
  { id: 6, name: "Fiona Apple", email: "fiona@email.com", age: 30, city: "Chicago", messages: [] },
  { id: 7, name: "George Clooney", email: "george@email.com", age: 55, city: "New York", messages: ["How's it going?", "See you soon"] },
];
function sayHello() {
  let message = 'hello 12pm';
  return message;
}
// Find a user by their name
function findUserByName(name) {
  return users.find(user => user.name === name);
}
// Find a user by their id

function findUserById(id) {
  return users.find(user => user.id === id);
}
// filter users who live in New York

function filterUsersByCity(city) {
  return users.filter(user => user.city === city);
}
// filter users whose messages array contains the message "Hello"
// "Hello"
function filterUsersWithPhrase(phrase) {
  return users.filter(user => user.messages.some(message => message.includes(phrase)));
}
// filter the users for each user where their messages has some message that includes the phrase
// map a new array where all users' ages are increased by 10
function addYears(amount) {
  return users.map(user => ({ ...user, age: user.age + amount }));
}
// arrow function with implicit return of a modified object literal with spread syntax
module.exports = { users, sayHello, findUserByName, findUserById, filterUsersByCity, addYears, filterUsersWithPhrase }