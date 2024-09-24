const { series } = require("gulp");
const func = ()=>{
    console.log("Hello Gulp!");
}

const bar = ()=>{
    console.log("bar run");
}
exports.ser = series(func, bar);