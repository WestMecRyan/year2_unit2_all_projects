const fiveUsers = [{ age: 5 }, { age: 3 }, { age: 4 }, { age: 2 }, { age: 1 }]
function sortUsersByAge(users) {
    let sortedUsers = [...users];
    for (let i = 0; i < sortedUsers.length; i++) {
        // runs from i = 0 until i = 4
        for (let j = 0; j < sortedUsers.length - 1; j++) {
            // runs from j = 0 until j = 3
            if (sortedUsers[j].age > sortedUsers[j + 1].age) {
                // first iteration
                // if (sortedUsers[0].age > sortedUsers[1].age)
                // if (5 > 3)
                let temp = sortedUsers[j];// let temp = age.5
                sortedUsers[j] = sortedUsers[j + 1]; //sortedUsers[0] = sortedUsers[1]
                sortedUsers[j + 1] = temp; // sortedUsers[1] = temp
            }
        }
        console.log(`${JSON.stringify(sortedUsers)} on ${i + 1} pass`)
    }
    return sortedUsers;
}
sortUsersByAge(fiveUsers);