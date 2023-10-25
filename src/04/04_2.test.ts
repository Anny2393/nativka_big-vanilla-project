import {CityType} from "../02/02_02";
import {demoLisHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id:1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100, street: {title: "White street"}
                }
            },
            {
                id:2, buildedAt: 2008, repaired: false,
                address: {
                    number: 100, street: {title: "Happy street"}
                }
            },
            {
                id:3, buildedAt: 2020, repaired: false,
                address: {
                    number: 101, street: {title: "Happy street"}
                }
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "Souths str"
                    }
                }
            },
        ],
        cityzensNumber: 1000000

    }
})

test("Houses should be destroyed", () => {
    demoLisHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

// Внутри функции теста вызывается функция
// getBuildingsWithStaffCountGreaterThen, передавая массив
// city.governmentBuildings и число 500 в качестве
// аргументов. Это действие фильтрует здания и сохраняет
// результат в переменной buildings.
test("buildings with correct staff count", () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

// Это утверждение (assertion), которое проверяет, что
// после выполнения функции
// getBuildingsWithStaffCountGreaterThen, длина массива
// buildings равна 1. Это предполагает, что только одно
// здание имеет количество сотрудников более 500.
    expect(buildings.length).toBe(1)

// Это ещё одно утверждение, которое проверяет, что тип
// первого здания в массиве buildings равен строке
// "FIRE-STATION". Это предполагает, что единственное
// оставшееся здание с достаточным количеством сотрудников
// является пожарной станцией.
    expect(buildings[0].type).toBe("FIRE-STATION")
})