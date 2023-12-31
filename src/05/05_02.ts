import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetTitlesOfGovermentsBuldings =
    (buildings: Array<GovernmentBuildingsType>) => {
        return buildings.map(buildings => buildings.address.street.title)
    }

export const getStreetsTitlesofHouses = (houses: Array<HouseType>) => {
return  houses.map(houses => houses.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {

    let callbackfn = (houses: HouseType) => {
        return `Hello guys from ${houses.address.street.title}`;
    }


    let newArray = houses.map(callbackfn);
    return newArray
}