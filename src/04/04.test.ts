export {}

test("should take old men older then 90", () => {
    const ages = [12, 20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test("should take chip courses", () => {

    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]

// Говорим: filter, пробеги по массиву courses и отфильтруй
// в новый массив (chipCourses) courses стоимость(price), которых
// будет меньше 160.
    const chipCourses = courses.filter(courses => courses.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
    expect(chipCourses[1].title).toBe("REACT");

})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Salt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);

})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Salt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]

// Это же выражение можно записать так:
// const uncompletedTasks = tasks.filter(task => task.isDone === false)
   const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);

})