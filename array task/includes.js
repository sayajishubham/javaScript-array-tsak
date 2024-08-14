function check(arr1,arr2){
    return arr1.filter(Element=>arr2.includes(Element))
}
let arr1=[10,20,30,40]
let arr2=[10,20,30,40]
console.log(check(arr1,arr2));