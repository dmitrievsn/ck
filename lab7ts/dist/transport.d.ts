export declare namespace Transport {
    enum Documents {
        PASSPORT = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
        FOREIGN_PASSPORT = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
        MILITARY_IDENTIFICATION_CARD = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
        BIRTH_CERTIFICATE = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"
    }
    enum Stampts {
        LADA = "Lada",
        FORD = "Ford",
        HAVAL = "Haval"
    }
    enum BodyTypes {
        UNIVERSAL = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
        CABRIOLET = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
        ROADSTER = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"
    }
    enum AutoClass {
        CABRIOLET = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
        ROADSTER = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD",
        SPORTS = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"
    }
    interface IOwner {
        surname: string;
        name: string;
        patronymic: string;
        birthdate: Date;
        typedocument: Documents;
        document_series: number;
        document_number: number;
        ownerInfo: () => string;
    }
    interface IVehicle {
        stamp: string;
        model: string;
        relese: Date;
        VIN_number: number;
        Registration_number: number;
        vehicleInfo: () => string;
        owner: IOwner;
    }
    class Owner implements IOwner {
        private _surname;
        private _name;
        private _patronymic;
        private _birthdate;
        private _typedocument;
        private _document_series;
        private _document_number;
        get surname(): string;
        set surname(value: string);
        get name(): string;
        set name(value: string);
        get patronymic(): string;
        set patronymic(value: string);
        get birthdate(): Date;
        set birthdate(value: Date);
        get typedocument(): Documents;
        set typedocument(value: Documents);
        get document_series(): number;
        set document_series(value: number);
        get document_number(): number;
        set document_number(value: number);
        constructor(surname: string, name: string, patronymic: string, birthdate: Date, typedocument: Documents, document_series: number, document_number: number);
        ownerInfo(): string;
    }
    class Vehicle implements IVehicle {
        private _stamp;
        private _model;
        private _relese;
        private _VIN_number;
        private _Registration_number;
        private _owner;
        get stamp(): string;
        set stamp(value: string);
        get model(): string;
        set model(value: string);
        get relese(): Date;
        set relese(value: Date);
        get VIN_number(): number;
        set VIN_number(value: number);
        get Registration_number(): number;
        set Registration_number(value: number);
        get owner(): IOwner;
        set owner(value: IOwner);
        constructor(stamp: string, model: string, relese: Date, VIN_number: number, Registration_number: number, owner: IOwner);
        vehicleInfo(): string;
    }
    interface ICar extends IVehicle {
        body_type: BodyTypes;
        auto_class: AutoClass;
    }
    interface ICar extends IVehicle {
        body_type: BodyTypes;
        auto_class: AutoClass;
    }
    class Car extends Vehicle implements ICar {
        body_type: BodyTypes;
        auto_class: AutoClass;
        constructor(stamp: string, model: string, relese: Date, VIN_number: number, Reg_number: number, owner: IOwner, body_type: BodyTypes, auto_class: AutoClass);
        vehicleInfo(): string;
    }
    interface IMotorbike extends IVehicle {
        frame_type: string;
        sport: boolean;
    }
    class Motorbike extends Vehicle implements IMotorbike {
        frame_type: string;
        sport: boolean;
        constructor(stamp: string, model: string, relese: Date, VIN_number: number, Reg_number: number, owner: IOwner, frame_type: string, sport: boolean);
        vehicleInfo(): string;
        getFrameInfo(): string;
    }
    interface IVehicleStorage<T extends IVehicle> {
        created: Date;
        data: T[];
        getAll: () => T[];
        save: (data: T) => void;
        remove: (index: number) => void;
    }
    class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
        private readonly _created;
        private _data;
        get created(): Date;
        get data(): T[];
        constructor();
        getAll(): T[];
        save(data: T): void;
        remove(index: number): void;
        sortByOwnerLastName(): void;
        getVehiclesByDocumentPrefix(prefix: string): T[];
    }
}
