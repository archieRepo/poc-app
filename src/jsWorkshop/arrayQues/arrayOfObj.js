//Ques.
//1. Write code to get array of names from given array of users
//2. Get back only active users
//3. Get array of names of active users
//4. Sort users by age descending

const users = [
    {
        id:1,
        name: "Jack",
        isActive: true,
        age: 20
    },
    {
        id:2,
        name: "John",
        isActive: true,
        age: 18
    },
    {
        id:3,
        name: "Mike",
        isActive: false,
        age: 30
    },
];

/* ques 1 */

const usersName = users.map((user) => user.name);

console.log("name:", usersName);

/* ques 1 */
/* ques 2 */

const activeUsers = users.filter((user) => user.isActive && user.age > 19);

console.log("activeUsers:", activeUsers);

/* ques 2 */

/* ques 3 */

const activeUsersName = users.filter(user => user.isActive).map(user => user.name);

console.log(activeUsersName);

/* ques 3 */

/* ques 4 */

const sortedUsers = users.sort((user1, user2) => user1.age > user2.age ? -1 : 1);

console.log("sorted users", sortedUsers);

const sortedNames = users.sort((user1, user2) => user1.age > user2.age ? -1 : 1).filter(user => user.isActive).map(user =>  user.name);

console.log('sorted names', sortedNames)

/* ques 4 */

/* ques 5 deep copy */
const user2 = JSON.parse(JSON.stringify(users));

user2[2].age = 45;

console.log("newUser", user2)
console.log("oldUser", users);