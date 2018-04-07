//
//  object destructuring
//


// const student = {
//     name: 'Kaushik prasath',    
//     rollNo: '15mss018',
//     dept: {
//         course: 'Msc Software Systems',
//         year: 3
//     }
// };


// const {name: firstName = 'Anonymous', rollNo:rollno } = student;

// const {course, year} = student.dept;

// console.log(`${firstName}(${rollno}) is studying ${year} year ${course}.`)


// const book = {
//     name: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//     }
// }

// const { name: publisherName = 'Self published'} = book.publisher;


// console.log(publisherName);



//
//  Array destructuring
//

// const address = ['10/1-3 Jeeva Nagar','Coimbatore','Tamil Nadu','641302'];

// const [ , city, state = 'Bangalore'] = address;

// console.log(`I live in ${city},${state}.`);

const items = ['Masal Roast', '30RS', '50RS', '70RS'];

const [item, , medium] = items;

console.log(`A medium sized ${item} costs ${medium}`);