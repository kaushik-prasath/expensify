function square(x){
    return x*x;
}

console.log(square(3));

// const squareArrow = (x)=>{
//     return x*x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(9));


// const getFirstName = (fullname) => {
//     const firstName = fullname.split(' ')[0];
//     return firstName;
// }

const getFirstName = (fullname) => fullname.split(' ')[0];


console.log(getFirstName('Kaushik prasath'));