# JSONCaster
A tiny library for runtime serialization of JSON into Typescript classes/interfaces

works with simple types as well as nested objects, just not arrays
# Usage
1. Add `import makeCaster from 'jsoncaster'` to the top of the file
2. Create an instance of the class/interface you want to cast to
3. Pass that instance into `makeCaster(instance)` to get a casting function
4. Pass the object you want to cast into the received casting function
5. To use with an object with an array, just for-loop through the array and cast each element
(js arrays are trippy because they have different elements in each)
# API
makeCaster: takes in an instance of the class you want to cast to, returns a caster function

the caster function takes in the object you want to cast, and either returns the object casted to the type you want, 
or throws an error with the first property that isn't matched right

# Example
```typescript
import makeCaster from 'jsoncaster';
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
```
Check `AliceAndBob.ts` in the repo to see this example (and check if intellisense works for you)
# License
MIT License (read LICENSE in the repo)