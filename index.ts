export default function makeCaster<T> (anInstance: T): (toTest: any) => T {
	return (x: any): T => {
		checkObjectsSame(x, anInstance, '[');
		return x as T;
	};
}
// down the rabbit hole
function checkObjectsSame(sketch: any, good: any, crumbs: string): void {
	for(let prop in good) {
		let theseCrumbs = crumbs+'=>'+prop;
		if(good.hasOwnProperty(prop)) {
			if(!sketch.hasOwnProperty(prop)) {
				throw new Error(`type cast error: ${theseCrumbs} does not have property ${prop}`);
			}
			if(typeof sketch[prop] !== typeof good[prop]) {
				throw new Error(`type cast error: property ${prop} of ${theseCrumbs} does not have type ${typeof good[prop]}`);
			}
			if(typeof good[prop] === 'object' && !Array.isArray(good[prop])) {
				checkObjectsSame(sketch[prop], good[prop], theseCrumbs);
			}
		}
	}
}