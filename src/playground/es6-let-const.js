var nameVar = 'Kaushik';
var nameVar = 'Nandhini';

console.log('Name:',nameVar);


let nameLet = 'Arun wesley';
nameLet = 'Prasanth';
console.log('nameLet:',nameLet);


let nameConst = 'Vikram';
console.log('nameConst:',nameConst);



//Block scoping

const fullName = "Kaushik prasath";
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log('FirstName:',firstName);
}

console.log('FirstName:',firstName);
