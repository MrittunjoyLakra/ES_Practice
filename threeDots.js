const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 26, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allages2 = [...ages,...ages2, 5, ...ages3];
console.log(allages2);