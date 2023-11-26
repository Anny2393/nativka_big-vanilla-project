export

type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach( () => {
users = {
    '64748': {id: 64748, name: "Ann"},
    '69039': {id: 69039, name: "Roma"},
    '75027': {id: 75027, name: "Djordan"}
}
})

test("should update corresponding user", () => {
    users['64748'].name = "Hanna"
    expect(users['64748']).toEqual({id: 64748, name: "Hanna"})
})