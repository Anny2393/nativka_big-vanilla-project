import {StudentType} from "../02/02";
import {addTechnologies, makeStudentActive, studentLivesCity} from "./03";

let student: StudentType;
    beforeEach(()=> {
        student = {
            id: 1,
            name: "Ann",
            age: 30,
            isActive: false,
            address: {
                streetTitle: "Surganova 2",
                city: {
                    title: "Minsk",
                    countryTitle: "Belarus",
                }
            },
            technologies: [
                {
                    id: 1,
                    title: "HTML"
                },
                {
                    id: 2,
                    title: "CSS"
                },
                {
                    id: 1,
                    title: "React"
                },
            ]
        }
    })

test("new technologies should be added to student", ()=>{
    expect(student.technologies.length).toBe(3);

    addTechnologies(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();

})

test("student should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);

})

test("student lives in city?", () => {

    let result1 = studentLivesCity(student, "Moscow");
    let result2 = studentLivesCity(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})

