export function seal(constructor: Function): void {
    Object.seal(constructor);
    Object.seal(constructor.prototype)
}

export function toUpperCase(target: Object, propertyName: string, descriptor: PropertyDescriptor) {
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