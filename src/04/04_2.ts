import {CityType, GovernmentBuildingsType} from "../02/02_02";

export function demoLisHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

// Это объявление функции getBuildingsWithStaffCountGreaterThen.
// Она принимает два аргумента: массив зданий buildings
// и число number. Типы аргументов указаны, где buildings
// представляет массив объектов типа GovernmentBuildingsType,
// а number - число, с которым будут сравниваться значения
// staffCount в объектах.
export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {

// Внутри функции происходит фильтрация массива buildings.
// Она использует метод filter, чтобы оставить только здания,
// у которых staffCount (количество сотрудников) больше чем
// значение, переданное в аргументе number. Таким образом,
// возвращается новый массив, содержащий только здания
// с достаточным количеством сотрудников.
    return buildings.filter(building => building.staffCount > number)
}