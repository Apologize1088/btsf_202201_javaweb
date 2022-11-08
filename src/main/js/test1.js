//js代码
var a = "警告：这是个字符串";
//const修饰的是只读变量
const b = 10;
let c = 10.01;
let d = true;
let e = new Date();
let f = null;
let g;
//输出方式
//弹窗
alert(a);
//控制台输出
console.log(b);
console.log(c);
console.log(e);
console.log(f);
console.log(d);
console.log(g);
//直接输出
document.write("<h1>当前时间</h1>");
document.write(e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日");
let arr1 = new Array();
let arr2 = [];
let arr3 = [1,3,5,7,8,10,12];
arr3.push(100);
//pop方法的返回值为被删除的元素
console.log(arr3);
console.log(arr3.pop());
//设计一个学生对象
let student = {
    id:10001,
    name:"张三",
    age: 20,
    gender: "男",
    eat: function () {
        console.log("马上要吃饭了");
    },
    sleep: function (){
        return "20";
    },
    study: function (a,b) {
        let c = a+b;
        console.log(a);
        console.log(b);
    },
};
console.log(student.toString());
student.eat();
//单独定义一个函数
function f1(){

}
//定义一个匿名的
student.study(function f2(){
    return 10;
},function f3(){
    return 20;
});