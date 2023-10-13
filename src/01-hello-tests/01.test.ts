import {mult, splitIntoWords, sum} from "./01";

test('sum should be correct', () => {

    //Исхлдные данные
    let a = 1;
    let b = 2;
    let c = 3;

    //Действие, которое мы выполняем
    let result1 = sum(a,b);
    let result2 = sum(b,c);

    //Ожидаемый результат
    expect(result1).toBe(3);
    expect(result2).toBe(5);

})

test('mult should be correct', () => {

    //Исходные данные
    let a = 1;
    let b = 2;
    let c = 3;

    //Действие, которое мы выполняем
    let result3 = mult(a,b);
    let result4 = mult(b,c);

    //Ожидаемый результат
    expect(result3).toBe(2);
    expect(result4).toBe(6);

})

test("splitIntoWords should be correct", () => {

    //Исходные данные
    const  sent1 = "Hello my friend!"
    const  sent2 = "JS - the best  programming language."

    //Действие, которое мы выполняем
    let result1 = splitIntoWords(sent1);
    let result2 = splitIntoWords(sent2);


    //Ожидаемый результат
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");

})