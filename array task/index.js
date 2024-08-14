function fun(value) {
    return value.sort((a, b) => a.age - b.age);
}
let em = [
    {
        age: 21
    },
    {
        age: 26
    },
    {
        age: 23
    },
    {
        age: 22
    },
]
console.log(fun(em));