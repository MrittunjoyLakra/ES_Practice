const person = { name: 'Jack', age: 17, job: 'Fb', gfName: 'Ema Watson', address: 'Kochu khet', phone: '999998888666', friends: ['tom', 'bom', 'kom']}
const { phone,gfName,address,} = person;

const complexObject = {
    name : 'abc',
    info: {
        address: 'Kola bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info
//const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName,phone,address);
// console.log(gfName,phone,address);
// console.log(gfName,phone,address);
// console.log(gfName,phone,address);


const friends = ['chaddi', 'gaddi', 'maddi'];
const [first,...restFriends] = friends;
console.log(first, restFriends);