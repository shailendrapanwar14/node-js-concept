// inermost function of any other function which has access to all the function and 
//variables which it's parents or the outer function has

// since javascript is functional programming language so we can either return a function 
//from another function or we can pass a function in parameter value



function outerScope(){
    var msg = "Hello World";

function innerScope(){
    console.log(msg)
}
return innerScope();

}
outerScope();