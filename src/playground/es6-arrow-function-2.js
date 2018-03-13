//Arguments object is no longer bound with arrow functions

const add =(a,b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(23,34));


//this keyword is no longer bound in arrow functions

const user = {
    name: 'Kaushik prasath',
    cities: ['Coimbatore','Bangalore','Chennai'],
    printPlacesLived(){

        return this.cities.map((city) => this.name + ' has lived in ' +city);


        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [3,5,6],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((n)=>n * this.multiplyBy);
    }
}

console.log(multiplier.multiply());