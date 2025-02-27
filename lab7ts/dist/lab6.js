"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seal = seal;
exports.toUpperCase = toUpperCase;
function seal(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function toUpperCase(target, propertyName, descriptor) {
    let originalMethod = descriptor.get;
    if (!originalMethod) {
        throw new Error("@toUpperCase can only be applied to getter properties.");
    }
    descriptor.get = function () {
        let result = originalMethod.apply(this);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
}
