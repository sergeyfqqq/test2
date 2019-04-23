
let user = {
    name: 'sergey',
    age: 22,
    nationality: 'Ukrainian'
};

console.log(user.age);
user.born = 1996;

delete user.nationality;
user.other = {
    gender: 'male',
    skin: 'white'
};
console.log(user);

for (let key in user) {
    console.log('This key ' + key + ' has a value ' + user[key]);
};