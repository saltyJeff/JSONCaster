"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeCaster(anInstance) {
    return (x) => {
        checkObjectsSame(x, anInstance, '[');
        return x;
    };
}
exports.default = makeCaster;
// down the rabbit hole
function checkObjectsSame(sketch, good, crumbs) {
    for (let prop in good) {
        let theseCrumbs = crumbs + '=>' + prop;
        if (good.hasOwnProperty(prop)) {
            if (!sketch.hasOwnProperty(prop)) {
                throw new Error(`type cast error: ${theseCrumbs} does not have property ${prop}`);
            }
            if (typeof sketch[prop] !== typeof good[prop]) {
                throw new Error(`type cast error: property ${prop} of ${theseCrumbs} does not have type ${typeof good[prop]}`);
            }
            if (typeof good[prop] === 'object' && !Array.isArray(good[prop])) {
                checkObjectsSame(sketch[prop], good[prop], theseCrumbs);
            }
        }
    }
}
//# sourceMappingURL=index.js.map