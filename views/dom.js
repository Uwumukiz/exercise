// function vehicle(name, maker){
//     this.name=name;
//     this.maker=maker;

// }

// let car1 = new vehicle('fiesta','Ford');
// let car2 = new vehicle('Santa Fe', 'Hyundai');
// console.log(car1.maker);
// console.log(car2.name);

// class people{
//     constructor(){
//         this.name = 'Adam';
//         this.age = 23;
//     }
// }
// let person1 = new people();
// console.log(`${person1.name} is ${person1.age} years old`);

let person = { 
	
} 

var person1 = Object.create(person); 
person1.name = "Adam"; 
person1.age = 45; 
person1.nationality = "Australian"; 
person1.gender = "male";

for (let key in person1) { 
// Output : name, age, nationality 
// and gender 
	console.log(key); 
}		 
