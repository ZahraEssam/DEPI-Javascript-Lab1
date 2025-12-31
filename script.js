// Tabs
function openTab(index){
    document.querySelectorAll(".tab").forEach((t,i)=>t.classList.toggle("active", i===index));
    document.querySelectorAll(".content").forEach((c,i)=>c.classList.toggle("active", i===index));
}

/* ======= Functions ======= */

// 1- Type
function typeOfVariable(variable){ 
    if(!isNaN(variable) && variable !== "") return "number";
    if(variable === "") return "empty string";
    return typeof variable; 
}
function runType(){
    const val = document.getElementById("typeInput").value;
    document.getElementById("typeResult").innerText = typeOfVariable(val);
}

// 2- Math Ops
function add(a,b){ return a+b; }
function subtract(a,b){ return a-b; }
function multiply(a,b){ return a*b; }
function divide(a,b){ return b==0?"Error: Division by zero":a/b; }
function runMathOps(){
    const a = Number(document.getElementById("numOne").value);
    const b = Number(document.getElementById("numTwo").value);
    const res = `Sum: ${add(a,b)}, Sub: ${subtract(a,b)}, Mul: ${multiply(a,b)}, Div: ${divide(a,b)}`;
    document.getElementById("mathResult").innerText = res;
}

// 3- isNaN
function isANaN(val){ return isNaN(val) || val === ""; }
function runIsNaN(){
    const val = document.getElementById("nanInput").value;
    document.getElementById("nanResult").innerText = isANaN(val);
}

// 4- Even / Odd
function isEven(n){ return n%2===0; }
function runEven(){
    const n = Number(document.getElementById("evenInput").value);
    if(isNaN(n)){ document.getElementById("evenResult").innerText="أدخل رقم صحيح"; return;}
    document.getElementById("evenResult").innerText = isEven(n)? "Even":"Odd";
}

// 5- Concat
function concatenateStrings(s1,s2){ return s1.trim() + " " + s2.trim(); }
function runConcat(){
    const s1 = document.getElementById("text1").value;
    const s2 = document.getElementById("text2").value;
    document.getElementById("concatResult").innerText = concatenateStrings(s1,s2);
}

// 6- Uppercase
function toUpperCase(str){ return str.toUpperCase(); }
function runUpper(){
    const s = document.getElementById("upperInput").value;
    document.getElementById("upperResult").innerText = toUpperCase(s);
}

// 7- Char At
function charAtIndex(str,index){
    index = Number(index);
    if(isNaN(index)) return "الموقع يجب أن يكون رقم";
    if(index<0 || index>=str.length) return "Index out of range";
    return str.charAt(index);
}
function runCharAt(){
    const str = document.getElementById("charInput").value;
    const idx = document.getElementById("charIndex").value;
    document.getElementById("charResult").innerText = charAtIndex(str,idx);
}

// 8- Greet
function greet(name){ return `Hello, ${name}`; }
function runGreet(){
    const name = document.getElementById("nameInput").value;
    document.getElementById("greetResult").innerText = greet(name);
}

// 9- Null / Undefined
function isNullOrUndefined(val){
    if(val===null || val==="") return "undefined";
    return "Valid Value";
}
function runNullCheck(){
    const val = document.getElementById("nullInput").value;
    document.getElementById("nullResult").innerText = isNullOrUndefined(val);
}

// 10- Random
function randomBetween(min,max){
    min=Number(min); max=Number(max);
    if(isNaN(min)||isNaN(max)) return "أدخل قيم صحيحة";
    if(min>max) [min,max] = [max,min];
    return Math.random()*(max-min)+min;
}
function runRandom(){
    const min = document.getElementById("randMin").value;
    const max = document.getElementById("randMax").value;
    document.getElementById("randResult").innerText = randomBetween(min,max);
}

// 11- Pos / Neg / Zero
function posNegZero(n){
    n=Number(n);
    if(isNaN(n)) return "أدخل رقم صحيح";
    if(n>0) return "Positive";
    if(n<0) return "Negative";
    return "Zero";
}
function runPosNeg(){
    const n = document.getElementById("posInput").value;
    document.getElementById("posResult").innerText = posNegZero(n);
}

// 12- Safe Eval
function safeEval(expr){
    try{
        let res = eval(expr);
        if(isNaN(res)) return "Result is NaN";
        return res;
    } catch(e){ return "Error: Invalid expression"; }
}
function runSafeEval(){
    const expr = document.getElementById("exprInput").value;
    document.getElementById("evalResult").innerText = safeEval(expr);
}
