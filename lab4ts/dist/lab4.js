"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport_1 = require("./transport");
const owner = new transport_1.Transport.Owner("Zubenko", "Mihail", "Petrovich", new Date("1990-01-01"), transport_1.Transport.Documents.MILITARY_IDENTIFICATION_CARD, 88800, 5545);
const car = new transport_1.Transport.Car("Kia", "Soul", new Date("2022-01-01"), 821241, 123456, owner, transport_1.Transport.BodyTypes.CABRIOLET, transport_1.Transport.AutoClass.SPORTS);
console.log(car.vehicleInfo());
