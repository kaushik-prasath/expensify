


class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi ${this.name}.Welcome!`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}


class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += `Their major is ${this.major}`;
        }

        return description;
    }
}



class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += `I'm from ${this.homeLocation}`;
        }

        return greeting;
    }
}


const me = new Traveler('Kaushik prasath',19,'Coimbatore');
console.log(me.getGreeting());

const she = new Traveler(undefined,undefined,'chennai');
console.log(she.getGreeting());