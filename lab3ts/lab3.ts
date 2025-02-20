enum Documents {
    PASSPORT = 'Паспорт',
    FOREIGN_PASSPORT = 'Заграничный пасспорт',
    MILITARY_IDENTIFICATION_CARD = 'Удостоверение личности военнослужащего',
    BIRTH_CERTIFICATE = "Свидетельство о рождении",
}
enum Stampts {
    LADA = 'Lada',
    FORD = 'Ford',
    HAVAL = 'Haval',
}
enum BodyTypes {
    UNIVERSAL = 'Универсал',
    CABRIOLET = 'Кабриолет',
    ROADSTER = 'Внедорожник',
}
enum AutoClass {
    CABRIOLET = 'Кабриолет',
    ROADSTER = 'Внедорожник',
    SPORTS = 'Спорткар',
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
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _birthdate: Date;
    private _typedocument: Documents;
    private _document_series: number;
    private _document_number: number;
    get surname(): string {
        return this._surname;
    }
    set surname(value: string) {
        this._surname = value;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get patronymic(): string {
        return this._patronymic;
    }
    set patronymic(value: string) {
        this._patronymic = value;
    }
    get birthdate(): Date {
        return this._birthdate;
    }
    set birthdate(value: Date) {
        this._birthdate = value;
    }
    get typedocument(): Documents {
        return this._typedocument;
    }
    set typedocument(value: Documents) {
        this._typedocument = value;
    }
    get document_series(): number {
        return this._document_series;
    }
    set document_series(value: number) {
        this._document_series = value;
    }
    get document_number(): number {
        return this._document_number;
    }
    set document_number(value: number) {
        this._document_number = value;
    }
    constructor(surname: string, name: string, patronymic: string, birthdate: Date, typedocument: Documents, document_series: number, document_number: number) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthdate = birthdate;
        this._typedocument = typedocument;
        this._document_series = document_series;
        this._document_number = document_number;
    }
    ownerInfo(): string {
        return 'surname: ' + this._surname + '\nname: ' + this._name + '\npatronymic: ' + this._patronymic + '\nbirthdate: ' + this._birthdate + '\ntypedocument: ' + this._typedocument + '\ndocument_series' + this._document_series + '\ndocument_number' + this._document_number;
    }
}
class Vehicle implements IVehicle {
    private _stamp: string;
    private _model: string;
    private _relese: Date;
    private _VIN_number: number;
    private _Registration_number: number;
    private _owner: IOwner;
    get stamp(): string {
        return this._stamp;
    }
    set stamp(value: string) {
        this._stamp = value;
    }
    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }
    get relese(): Date {
        return this._relese;
    }
    set relese(value: Date) {
        this._relese = value;
    }
    get VIN_number(): number {
        return this._VIN_number;
    }
    set VIN_number(value: number) {
        this._VIN_number = value;
    }
    get Registration_number(): number {
        return this._Registration_number;
    }
    set Registration_number(value: number) {
        this._Registration_number = value;
    }
    get owner(): IOwner {
        return this._owner;
    }
    set owner(value: IOwner) {
        this._owner = value;
    }
    constructor(stamp: string, model: string, relese: Date, VIN_number: number, Registration_number: number, owner: IOwner) {
        this._stamp = stamp;
        this._model = model;
        this._relese = relese;
        this._VIN_number = VIN_number;
        this._Registration_number = Registration_number;
        this._owner = owner;
    }
    vehicleInfo(): string {
        return 'stamp: ' + this._stamp + '\nmodel: ' + this._model + '\nrelese: ' + this._relese + '\nVIN_number: ' + this._VIN_number + '\nRegistration_number: ' + this._Registration_number;
    }
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

    constructor(stamp: string, model: string, relese: Date, VIN_number: number, Reg_number: number, owner: IOwner, body_type: BodyTypes, auto_class: AutoClass) {
        super(stamp, model, relese, VIN_number, Reg_number, owner);
        this.body_type = body_type;
        this.auto_class = auto_class;
    }

    vehicleInfo(): string {
        return super.vehicleInfo() + '\nBody type: ' + this.body_type + '\nClass of Auto: ' + this.auto_class;
    }

}
interface IMotorbike extends IVehicle {
    frame_type: string;
    sport: boolean;
}

class Motorbike extends Vehicle implements IMotorbike {
    frame_type: string;
    sport: boolean;

    constructor(stamp: string, model: string, relese: Date, VIN_number: number, Reg_number: number, owner: IOwner, frame_type: string, sport: boolean) {
        super(stamp, model, relese, VIN_number, Reg_number, owner);
        this.frame_type = frame_type;
        this.sport = sport;
    }

    vehicleInfo(): string {
        if (this.sport === true) {
            return super.vehicleInfo() + '\nFrame type: ' + '\nSport bike';
        } else {
            return super.vehicleInfo() + '\nFrame type: ' + this.frame_type + '\nNot a sport bike'
        }
    }
}
interface IVehicleStorage<T extends IVehicle> {
    created: Date;
    data: T[];

    getAll: () => T[];

    save: (data: T) => void;
    remove: (index: number) => void;
}
class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T>{
    private readonly _created: Date;
    private _data: T[];
    get created(): Date {
        return this._created;
    }
    get data(): T[] {
        return this._data;
    }
    constructor() {
        this._created = new Date();
        this._data = [];
    }
    getAll(): T[] {
        return this._data;
    }
    save(data: T): void {
        this._data.push(data);
    }
    remove(index: number): void {
        this._data.splice(index, 1);
    }
}