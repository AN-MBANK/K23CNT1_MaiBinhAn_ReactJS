var x=100; //global
function vardemo(){
    console.log("x trong ham;", x);
}
//
console.log("x ngoai ham;", x);

// thuc hien
vardemo();

//local
function fn_demo(){
    var y=200; //local
    console.log("y trong ham:",y);
}
fn_demo();
// y ngoai ham
console.log("y ngoai ham:",y);//==error: ReferenceError: y is not defined


// vi du chatgpt / deepseek
