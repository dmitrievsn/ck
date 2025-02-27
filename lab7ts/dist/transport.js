"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let Documents;
    (function (Documents) {
        Documents["PASSPORT"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        Documents["FOREIGN_PASSPORT"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        Documents["MILITARY_IDENTIFICATION_CARD"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        Documents["BIRTH_CERTIFICATE"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    })(Documents = Transport.Documents || (Transport.Documents = {}));
    let Stampts;
    (function (Stampts) {
        Stampts["LADA"] = "Lada";
        Stampts["FORD"] = "Ford";
        Stampts["HAVAL"] = "Haval";
    })(Stampts = Transport.Stampts || (Transport.Stampts = {}));
    let BodyTypes;
    (function (BodyTypes) {
        BodyTypes["UNIVERSAL"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        BodyTypes["CABRIOLET"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        BodyTypes["ROADSTER"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    })(BodyTypes = Transport.BodyTypes || (Transport.BodyTypes = {}));
    let AutoClass;
    (function (AutoClass) {
        AutoClass["CABRIOLET"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        AutoClass["ROADSTER"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
        AutoClass["SPORTS"] = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
    })(AutoClass = Transport.AutoClass || (Transport.AutoClass = {}));
    class Owner {
        get surname() {
            return this._surname;
        }
        set surname(value) {
            this._surname = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get patronymic() {
            return this._patronymic;
        }
        set patronymic(value) {
            this._patronymic = value;
        }
        get birthdate() {
            return this._birthdate;
        }
        set birthdate(value) {
            this._birthdate = value;
        }
        get typedocument() {
            return this._typedocument;
        }
        set typedocument(value) {
            this._typedocument = value;
        }
        get document_series() {
            return this._document_series;
        }
        set document_series(value) {
            this._document_series = value;
        }
        get document_number() {
            return this._document_number;
        }
        set document_number(value) {
            this._document_number = value;
        }
        constructor(surname, name, patronymic, birthdate, typedocument, document_series, document_number) {
            this._surname = surname;
            this._name = name;
            this._patronymic = patronymic;
            this._birthdate = birthdate;
            this._typedocument = typedocument;
            this._document_series = document_series;
            this._document_number = document_number;
        }
        ownerInfo() {
            return 'surname: ' + this._surname + '\nname: ' + this._name + '\npatronymic: ' + this._patronymic + '\nbirthdate: ' + this._birthdate + '\ntypedocument: ' + this._typedocument + '\ndocument_series' + this._document_series + '\ndocument_number' + this._document_number;
        }
    }
    Transport.Owner = Owner;
    class Vehicle {
        get stamp() {
            return this._stamp;
        }
        set stamp(value) {
            this._stamp = value;
        }
        get model() {
            return this._model;
        }
        set model(value) {
            this._model = value;
        }
        get relese() {
            return this._relese;
        }
        set relese(value) {
            this._relese = value;
        }
        get VIN_number() {
            return this._VIN_number;
        }
        set VIN_number(value) {
            this._VIN_number = value;
        }
        get Registration_number() {
            return this._Registration_number;
        }
        set Registration_number(value) {
            this._Registration_number = value;
        }
        get owner() {
            return this._owner;
        }
        set owner(value) {
            this._owner = value;
        }
        constructor(stamp, model, relese, VIN_number, Registration_number, owner) {
            this._stamp = stamp;
            this._model = model;
            this._relese = relese;
            this._VIN_number = VIN_number;
            this._Registration_number = Registration_number;
            this._owner = owner;
        }
        vehicleInfo() {
            return 'stamp: ' + this._stamp + '\nmodel: ' + this._model + '\nrelese: ' + this._relese + '\nVIN_number: ' + this._VIN_number + '\nRegistration_number: ' + this._Registration_number;
        }
    }
    Transport.Vehicle = Vehicle;
    class Car extends Vehicle {
        constructor(stamp, model, relese, VIN_number, Reg_number, owner, body_type, auto_class) {
            super(stamp, model, relese, VIN_number, Reg_number, owner);
            this.body_type = body_type;
            this.auto_class = auto_class;
        }
        vehicleInfo() {
            return super.vehicleInfo() + '\nBody type: ' + this.body_type + '\nClass of Auto: ' + this.auto_class;
        }
    }
    Transport.Car = Car;
    class Motorbike extends Vehicle {
        constructor(stamp, model, relese, VIN_number, Reg_number, owner, frame_type, sport) {
            super(stamp, model, relese, VIN_number, Reg_number, owner);
            this.frame_type = frame_type;
            this.sport = sport;
        }
        vehicleInfo() {
            if (this.sport === true) {
                return super.vehicleInfo() + '\nFrame type: ' + '\nSport bike';
            }
            else {
                return super.vehicleInfo() + '\nFrame type: ' + this.frame_type + '\nNot a sport bike';
            }
        }
        getFrameInfo() {
            const frameInfo = {
                frameType: this.frame_type,
                isSportBike: this.sport
            };
            return JSON.stringify(frameInfo);
        }
    }
    Transport.Motorbike = Motorbike;
    class VehicleStorage {
        get created() {
            return this._created;
        }
        get data() {
            return this._data;
        }
        constructor() {
            this._created = new Date();
            this._data = [];
        }
        getAll() {
            return this._data;
        }
        save(data) {
            this._data.push(data);
        }
        remove(index) {
            this._data.splice(index, 1);
        }
        sortByOwnerLastName() {
            this._data.sort((a, b) => {
                const lastNameA = a.owner.surname.toLowerCase();
                const lastNameB = b.owner.surname.toLowerCase();
                if (lastNameA < lastNameB)
                    return -1;
                if (lastNameA > lastNameB)
                    return 1;
                return 0;
            });
        }
        getVehiclesByDocumentPrefix(prefix) {
            return this._data.filter(vehicle => {
                const documentNumber = vehicle.owner.document_number.toString();
                return documentNumber.startsWith(prefix);
            });
        }
    }
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (exports.Transport = Transport = {}));
