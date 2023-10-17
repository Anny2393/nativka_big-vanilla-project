import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

// Сумма может быть написана и так
export function sum2(a: number, b: number) {
    return a + b
}

// Функция  addTechnologies стрелочного типа, которая добавляет студенту technologies.
// st - это тоже самое, что и student.
// Просто параметр может называться как угодно. Это ссылочный тип объектов.
export const addTechnologies = (st: StudentType, technologies: string) => {

// Эта строка добавляет новый объект в массив technologies, который,
// вероятно, уже существует в объекте student.
// Мы используем push для добавления нового элемента в конец массива.
    st.technologies.push({
        id: new Date().getTime(),
        title: technologies
    })
}

// Второй пример написания такой же функции addTechnologies , которая добавляет студенту technologies.
// st - это тоже самое, что и student.
// Просто параметр может называться как угодно. Это ссылочный тип объектов.
export function addTechnologies2(st: StudentType, technologies: string) {

    st.technologies.push({
        id: new Date().getTime(),
        title: technologies
    })
}

// st и s - это тоже самое, что и student.
// Просто параметр может называться как угодно. Это ссылочный тип объектов.
export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export const studentLivesCity = (s: StudentType, cityName: string) => {
return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export const createMessage = (city: CityType) => {
    // return "Hello" + city.title + "New York. All" + city.cityzensNumber + "men";
    return `Hello${city.title}New York. All ${city.cityzensNumber} men`;
}