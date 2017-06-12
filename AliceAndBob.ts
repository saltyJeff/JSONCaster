import makeCaster from './index'; //why waste time with circle references
interface Student { //create the definition
	name: string;
	age: number;
}
const instance: Student = { //create an instance to pass (just use placeholder values)
	name: '',
	age: 0
}
let castToStudent = makeCaster(instance); //get the caster function
const Alice = { //a good copy
	name: 'Alice',
	age: 20
}
const Bob = { //a bad copy
	name: 'Bob',
	age: 'psych'
}
let safeStudent = castToStudent(Alice); //works, and safeStudent's type is now Student
let unsafeStudent = castToStudent(Bob); //throws type cast error: property [=>age does not have type number