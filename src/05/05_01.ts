export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrey Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dimychTransformator = (man: ManType) => ({
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split("")[0],
        lastName: man.name.split("")[1]
    })

// devs1, devs2, devs3 и devs4 - это делают одно и то же
// (получают один и тот же массив) просто разными способами.

const devs1 = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrey", lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    },
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]

const devs3 = people.map(dimychTransformator)

const devs4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split("")[0],
    lastName: man.name.split("")[1]
}))


const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
   return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}