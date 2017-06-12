import makeCaster from './index';
import * as colors from 'colors';

console.log(colors.bold.blue('Starting tests for JSON caster'));
class Test1 {
	a_string: string = '';
	a_number: number = 5;
}
const toTest1Pass = {
	a_string: 'hello',
	a_number: 8
}
const toTest1Fail = {
	a_string: '3',
	a_number: 'donuts'
}
tester('a simple object', toTest1Pass, Test1, true);
tester('a simple object', toTest1Fail, Test1, false);
class Test2 {
	a_string: string = '';
	a_child: Test1 = new Test1();
}
const toTest2Pass = {
	a_string: 'hello',
	a_child: toTest1Pass
}
const toTest2Fail = {
	a_string: 'bananna',
	a_child: {
		a_string: 'yes',
		a_number: false
	}
}
tester('an object with a child', toTest2Pass, Test2, true);
tester('an object with a child', toTest2Fail, Test2, false);

function tester<T>(name: string, toTest: any, theClass: any, shouldPass: boolean) {
	console.log(colors.cyan('Testing: '+name));
	console.log('Should '+ (shouldPass ? colors.green('pass') : colors.red('error')));
	let inst = new theClass();
	let cast = makeCaster(inst);
	try {
		let a = cast(toTest);
		console.log(colors.green('all good')); 
	}
	catch (e) {
		console.error(colors.red(e.message));
	}
}