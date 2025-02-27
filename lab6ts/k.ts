import { Transport } from './transport';
const owner = new Transport.Owner(
    "Zubenko",
    "Mihail",
    "Petrovich",
    new Date("1990-01-01"),
    Transport.Documents.MILITARY_IDENTIFICATION_CARD,
    88800,
    5545
);

const car = new Transport.Car(
    "Kia",
    "Soul",
    new Date("2022-01-01"),
    821241,
    123456,
    owner,
    Transport.BodyTypes.CABRIOLET,
    Transport.AutoClass.SPORTS
)

console.log(car.vehicleInfo());