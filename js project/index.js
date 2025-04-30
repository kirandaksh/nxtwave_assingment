let box = document.querySelector(".box"); 
let button = document.querySelector("button");// select the element with class box

const speakFun = input => {
    let speakInput = new SpeechSynthesisUtterance(input); 
    // speakInput.rate = 1;
    // speakInput.pitch = 1;
    // speakInput.valume = 1;
    speakInput.lang = "en-IN";
    window.speechSynthesis.speak(speakInput); // use the speechSynthesis API to speak the input text
    // create a new instance of the SpeechSynthesisUtterance class
}
window.onload = () => {
    speakFun("hello just for fun");
    greetingFunc();
}

const greetingFunc = () => {
    let date = new Date();
    let hour = date.getHours();
    if (hour >= 0 && hour < 12) {
        speakFun("Good Morning sir, How are you doing today?");
    }
    else if (hour >= 12 && hour < 16) {
        speakFun("Good Afternoon sir, How are you doing today?");
    }
    else{
        speakFun("Good Evening sir, How are you doing today?");

    }
} 

const startVoiceInput = () => {
    if("webkitSpeechRecognition" in window) {
        let recogination = new webkitSpeechRecognition();
        recogination.lang = "en-US";
        recogination.onresult = e => {
            let spokenText = e.results[0][0].transcript; 
            handleCommands(spokenText.toLowerCase())
            box.classList.remove("btn-box");
            button.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
        }
        recogination.start();
    }
    else{
        alert("Your browser does not support voice input");
    }
}

button.onclick = () => {
    box.classList.add("btn-box");
    button.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
}

const handleCommands = command => {
    if(command.includes("hello") || command.includes("hi") || command.includes("hey")) {
        speakFun("Hello sir, How can i help you?");
    }
    else if(command.includes("how are you")) {
        speakFun("I am doing great sir, How are you doing today?");
    }
    else if(command.includes("what is your name")) {
        speakFun("My name is Kiran Daksh, I am a web developer and I am here to help you with your work.");
    }
    else if(command.includes("who are you")  || command.includes("developed") || command.includes("hu r u")) {
        speakFun("I am virtual assistance, I am a web developer and I am here to help you with your work.");
    }
    else if(command.includes("open youtube")  || command.includes("youtube")) {
        speakFun("Opening...youtube");
        window.open("https://www.youtube.com", "_blank");
    }
    else if(command.includes("open facebook")  || command.includes("facebook")) {
        speakFun("Opening...facebook");
        window.open("https://www.facebook.com", "_blank");
    }
    else if(command.includes("open instagram")  || command.includes("instagram")) {
        speakFun("Opening...instagram");
        window.open("https://www.instagram.com", "_blank");
    }
    else if(command.includes("open whatsapp")  || command.includes("whatsapp")) {
        speakFun("Opening...whatsapp");
        window.open("https://www.whatsapp.com", "_blank");
    }
    else if(command.includes("open google")  || command.includes("google")) {
        speakFun("Opening...google");
        window.open("https://www.google.com", "_blank");
    }
    else if(command.includes("open calculator")  || command.includes("calculator")) {
        speakFun("Opening...calculator");
        window.open("calculator://", "_blank");
    }
    else if(command.includes("tell me time")  || command.includes("time")) {
        let time = new Date().toLocaleTimeString(undefined, {hour: "numeric", minute: "numeric"});
        speakFun(`The current time is ${time}`);
    }
    else if(command.includes("tell me date")  || command.includes("date")) {
        let date = new Date().toLocaleTimeString(undefined, {day: "numeric", month: "long", year: "numeric"});
        speakFun(`The current time is ${date}`);
    }
    else{
        speakFun(`tHIS IS, WHAT I FOUND ON INTERNET REGARDING ${command}`);
        window.open(`https://www.google.com/search?q=${command}`, "_blank");
    }
}




//JavaScript - 10 days , to make interactive websites 

    //the website that consist of only html, css are static website 
 
    //skeleton - html,skin, hair, eyebrows-css, life-js 

    //Java Script - java , 
   
    //programs that are written using this js are known to be scripts
    
    //js - es6 => echmascripts6 => echma => is a standard for js 
  
    //microsoft , dell, apple , bell 

    //js is a  language which is a dynamically typed language and also js is an high lavel langugae.

    //c programming langugae: int a ; => static typing, where we are telling that a variable can only store a data of a given data type.
  
    //js: let a; dynamically typed language , where at nay given point of this var "a" can store any data type.  
          
    //let A = 12;

    //A = "kiran daksh";
   // 'kiran daksh'
    //js is user friently to write the programming with 

    //program in js: we ue our general english terms 
  
    //lang hight-level 

    //the browser can only understand html, css & js 

    //so browser has v8 engine in it, which helps to understand js 

    //by browser 
    //js is a safe programming language, it doesnt interact with the files that are present in the computer and also it doesnt deal with mem of your computer 
    //using this js, we can manipulate the content on the screen , which gives the ability to control webpaage .
//js is actually known as programming logic, because to run js we need just the environment that support js  
//browser , node js , 2 environment that are capable of running js: we download environmet into our computers or pc  
//node js that helps your laptop to understand compile and excute the js code . 

//second days 

//data types in js, operations , conditions, statememnts 
//data types in js: 8 data types in total where we have 7 data types which have primitive data types and 1 in non primitive data type
//we can only store only one data type in primitive data types whwre as in non primitive data types we can store multiple data types 
//& primitive daat types that are present in js: 
//number, bigint, string, boolean, null, undefined, symbol

// 1 non primitive data types in js: objects 
//number: a var that acn store either int or floating point numbers
//number, int are limited by -(2^53 - 1) to (2^53 - 1)
//a = 2^53 - 1 > any num that can store (-2^53 - 1) 
//bigint: is used to store int  of very big length c = 5659654689664854646n // is storing bigInt data type 
//depenting on a var data type, their mem is allocated in ram during execution of program 
//js gives special mathematical symbols , infinity , -infinity, NaN (not a number)
//a = 2^53.2344 - 1 // this is consider in int 
//a = 2^53.2344 => bigInt , as same space as bigInt data type          
// let a = 1/0 //console.log(a); // print(infinity) in js 
// let a = -1/0 //console.log(a); // print(-infinity) in js 
//console.log(a); // print(1/0) but other show error 
// 10line of python code , where we have an error on 6th line, then once your pyhton intrepreter reaches to 6th line, it will stop the execution of code and will not run the rest of the code
// but js it doesnt happend in this case . 
// let a = "hello" // console.log(a/2) => "hello"/2 
// console.log(a/2); // print(NaN)
// let a = 33n; //console.log(typeof(a)); // print(bigInt)
// let a = Infinity; //console.log(typeof(a)); // print(number)

// In js we can declare a string in 3 ways 
// let  a = "hello"; //console.log(typeof(a)); // print(string)
// let  a = 'hello'; //console.log(typeof(a)); // print(string)
// let a = `hello`; //console.log(typeof(a)); // print(string) // usage backticks this has more edge compared to others 
// let age = 21; console.log(`so my age is currently ${age}`); // print(so my age is currently 21)
// hierarchy of string -> backticks(string intrepretation and called as template literals ) -> double quotes -> single quotes
// let a = "hello"; a[2] = "k"; //console.log(a); // print(hello) // string is immutable in js

//boolean =true or false
//let age = null //  (typeof(age)) => object // this value doesnt belong to any of types describe above , reference to non existing object / null pointer 
//let genter = underfined // value is not assigned to this var

//symbols , used to create unique identifier , these used to give completness to a data type 
// object 

// let oj = {name: "kiran", age: 21, isadmin: true,} //console.log(oj); // print(object) // this is a non primitive data type

// console.log(typeof(null)); // print(object) // this is a bug in js 
//we have unary, binary, ternary operators in js
// a + b => "a, b" are both operands and "+" is operator 
//if the operator has only one operand then it is called as unary operator
//if the operator has two operands then it is called as binary operator
// + ,/ ,-, * , %, ** (exponentiation operator) are binary operators
//binary + in js used for string concatenation
// let a = "hello" + "world"; //console.log(a); // print(helloworld) //console.log("hi" * 3); // print(NaN) //console.log("hi" - 3); // print(NaN) //console.log("hi" / 3); // print(NaN) //console.log("hi" % 3); // print(NaN) //console.log("hi" ** 3); // print(NaN)
//in js , binary + , is the only binary operator used to work wuth string 
//let a = "123" console.log(typeof(a)); // print(string) 
//let a = Number("123") console.log(typeof(a)); // print(number) //type casting 
// unary + in js, actually used to type cast any daat type that consist of number init, to number data type 
//let b = + ("hello") //console.log(typeof(b)); // print(number) //console.log(b); // print(NaN) //console.log(+true); // print(1) //console.log(+false); // print(0) //console.log(+null); // print(0) //console.log(+undefined); // print(NaN)
//let a = +("123") console.log(typeof(a)); // print(number) //console.log(a); // print(123) //console.log(+("123.23")); // print(123.23) //console.log(+("123.23hello")); // print(NaN) //console.log(+("hello123.23")); // print(NaN)
//let c = "1" + 2 console.log(c) // print(12) //console.log(1 + 2 + "hello"); // print(3hello) //console.log("hello" + 1 + 2); // print(hello12) //console.log(1 + "hello" + 2); // print(1hello2) //console.log(1 - "hello"); // print(NaN) //console.log(1 * "hello"); // print(NaN) //console.log(1 / "hello"); // print(NaN) //console.log(1 % "hello"); // print(NaN)


//when we use binary + , if either of the opearand is actually a string, then the other operand will be type converted to string  
//console.log(2 + 2 + "1") // 221 or 41 
//first binary plus is add the num ,"41"
//console.log("2" + 2 + 1) // 
//first binary + converts number 2 to "2" => ("12" + 2) => ("122")
//and = as an operator is js , "=" is assingment opertor 
//let a = 1;
//a = a + 1 // a += 1; 
//postfix and prifix drecrement //let b = 1; let c = b++;  console.log(c, b); // print(1, 2) //let b = 1; let c = ++b; console.log(c, b); // print(2, 2) //let b = 1; let c = b--; console.log(c, b); // print(1, 0) //let b = 1; let c = --b; console.log(c, b); // print(0, 0)

// b  = b + 1 // b += 1 => b++(postfix) / (prefix) +++b 
//when we use the operator ++/-- before the operand it is prefix(++b / --b)
//when we use the operator ++/-- after the operand it is prefix(b++/b--)


//let b = 1; let c = b++ ;let d = ++b ; let e = b--; let f = --b; //console.log(c, d, e, f); // print(1, 3, 2, 0) //let b = 1; let c = b-- ;let d = --b ; let e = b++; let f = ++b; console.log(c, d, e, f); // print(1, -1, 0, 2)

//when postfix we do , we first use the value in the operand and them we will increment / decrement the value 
//c = 1 => b = b + 1 => b = 2
//if we use prefix then first value is updated & then we use the var 


//days 3


//comparison operators in js
// > , <, <=, >=, ==, !=
//All comparision operator return a boolean value // either true or false 
//true: yes, corrector the truth  //false: no, wrong or not the truth

//console.log(2>1); // print(true) //console.log(2<1); // print(false) //console.log(2>=1); // print(true) //console.log(2<=1); // print(false) //console.log(2==1); // print(false) //console.log(2!=1); // print(true)
//console.log(2 == 1): //this == checks between 2 oprands //check both are equal or not 
//we can assign the result of comparison to a variable 
//let result = 2>1; //console.log(result); // print(true) //let result = 2<1; //console.log(result); // print(false) //let result = 2>=1; //console.log(result); // print(true) //let result = 2<=1; //console.log(result); // print(false) //let result = 2==1; //console.log(result); // print(false) //let result = 2!=1; //console.log(result); // print(true) 

//string comparison : they are compared letter by letter //console.log("z">"a"); // print(true) //console.log("a">"z"); // print(false) //console.log("a">"A"); // print(true) //console.log("A">"a"); // print(false) //console.log("hello">"Hello"); // print(true) //console.log("Hello">"hello"); // print(false)
//console.log("glow">"glee"); // print(true) //console.log("glee">"glow"); // print(false) //console.log("glow">"glow"); // print(false) //console.log("glow">"glo"); // print(true) //console.log("glo">"glow"); // print(false)
//will check each letter first 

//"o">"e" => true //console.log("bee" > "be"); // print(true) //console.log("be" > "bee"); // print(false) //console.log("bee" > "bee"); // print(false) //console.log("bee" > "be"); // print(true) //console.log("be" > "bee"); // print(false)
//the comparison algorithms given above is rougly equal to the following
//a = Number("b"); //console.log(a); // print(NaN) //console.log(2 == "2"); // print(true) //console.log(2 === "2"); // print(false) //console.log(2 == 2); // print(true) //console.log(2 === 2); // print(true) //console.log(2 == true); // print(true) //console.log(2 === true); // print(false)
//when comparing values of different types, js converts the values to numbers  
//console.log("2">1); "2" is converted to 2 => true 
//console.log("01" == 1): // "01" is converted to 1 => true
//true => 1, false => 0
//two values are equal , one of them is true as boolean and 
//the other one is false as boolean 
//let a = 0; //console.log(a == false); // print(true) //console.log(a === false); // print(false) //console.log(a == true); // print(false) //console.log(a === true); // print(false) //console.log(1 == true); // print(true) //console.log(1 === true); // print(false)

//a = 0, b = "0" console.log(a == b); // print(true) //console.log(a === b); // print(false) //console.log(a != b); // print(false) //console.log(a !== b); // print(true)

//console.log("h" > 0); // print(true) //console.log("h" == 0); // print(false) //console.log("h" === 0); // print(false) //console.log("h" != 0); // print(true) //console.log("h" !== 0); // print(true)
// == for equality check or === for strict equality check 
// console.log(0 == false); // print(true) //console.log(0 === false); // print(false) //console.log(0 != false); // print(false) //console.log(0 !== false); // print(true)
//console.log(0 === false); // print(false) //console.log(0 !== false); // print(true) //console.log(0 == false); // print(true) //console.log(0 != false); // print(false)

//when we use === then this checks both operands value at the same time it checks both operand data types also 
//console.log("A">65); // print(false) //console.log("A" == 65); // print(true) //console.log("A" === 65); // print(false) //console.log("A" != 65); // print(true) //console.log("A" !== 65); // print(true)

//console.log(~5); // print(-6) //console.log(~-5); // print(4) //console.log(~0); // print(-1) //console.log(~1); // print(-2) //console.log(~-1); // print(0) //console.log(~-2); // print(1)
//"1h" > 0 => NaN > 0
//2+"2"-1 => 22-1 => 21

//console.log("1h"< "2h"); // print(true) //console.log("1h" > "2h"); // print(false) //console.log("1h" == "2h"); // print(false) //console.log("1h" != "2h"); // print(true) //console.log("1h" === "2h"); // print(false) //console.log("1h" !== "2h"); // print(true)

//null or undefined are compare other values 
//console.log(null === undefined); // print(false) //console.log(null == undefined); // print(true) //console.log(null > undefined); // print(false) //console.log(null < undefined); // print(false) //console.log(null >= undefined); // print(false) //console.log(null <= undefined); // print(false)

//special rule in js both null,undefined are equal to each other
//null becomes = 0 and undefined become NaN 
//console.log(null >= 0); // print(true) //console.log(null <= 0); // print(true) //console.log(null > 0); // print(false) //console.log(null < 0); // print(false) //console.log(null == 0); // print(false) //console.log(null != 0); // print(true) //console.log(null === 0); // print(false) //console.log(null !== 0); // print(true)
//console.log(null == 0); // print(false) //console.log(null != 0); // print(true) //console.log(null === 0); // print(false) //console.log(null !== 0); // print(true)
//== convert thenull without conversion the null or undefined will be used than < , > , <=, >= 
//console.log(NaN == NaN); // print(false) //console.log(NaN != NaN); // print(true) //console.log(NaN > NaN); // print(false) //console.log(NaN < NaN); // print(false) //console.log(NaN >= NaN); // print(false) //console.log(NaN <= NaN); // print(false)

//CONSOLE.LOG(true + 1); // print(2) //console.log(true + 1); // print(2) //console.log(true - 1); // print(0) //console.log(true * 1); // print(1) //console.log(true / 1); // print(1) //console.log(true % 1); // print(0) //console.log(true ** 1); // print(1)
//binary + will convert any operand to the number when the operand is not string //console.log(null ==null) => true 
////console.log(null == 0) => false

//condition statements in js 
// let age = 21; 
//if(age >= 18){
//    console.log("you are eligible to vote");//you are adault 
//}

//let year = prompt("whatyour age?")
//if(year >= 18){
//    console.log("you are eligible to vote");
//}
//else if (year > 18){
//    console.log("you are teenger)
//}
//else{
//    console.log("you are not eligible to vote");}

//conditional operator "?" 
//let result = (cndition)? value1 :value2 ; 

// null > 18 => 0 18 => false 
// let age = prompt("what is your age", 18);
// let msg = (age < 3) ? "hi, kid" : (age < 18) ? "hello" : (age < 100) ? "greeting" : "you are superman;
// //console.log(msg); // print(hi, kid) //console.log(msg); // print(hello) //console.log(msg); // print(greeting) //console.log(msg); // print(you are superman)

//confirm("are your a robot") => true 
//alert("this is for adault") => 
//alert, confirm, prompt are given by browser 

// || , &&, !, ?? => logical operator 

//logical operators in js:
// || => or , && => AND . ! => NOT, ?? => nullish coalescing operator

// || => OR , | => pipe operator //OR operator actually means that, if 2 operands are equal to the boolean value of true or either of the operand value is true, then result is true 
// OR operator actually foolows the or gate truth table when we apply them. 
//console.log(true || true); // print(true) //console.log(true || false); // print(true) //console.log(false || true); // print(true) //console.log(false || false); // print(false)
//console.log(false || false)

// let hour = 12;
//if(hour >10 || hour <18){
//    console.log("hello");
//}

//OR finds the first truthy value, in a chain of values  //result = value1 || value2 || value3;
//the || execution stopes when it finds 1s truthy value. 
//console.log(null || 1 || 0); //null || 1 => true , then the excution of remaining expression will not be done , means 1 || 0 will notbe excuted as here OR actully found out 1st truth value .

////OR try to find first truthy value or last false value 
//let result = null || 1 | 0; result = 1 
//let result = null || result || 0 ;result = "hello"
//let result = null || null|| 0: //result = 0

//&& AND , where if either of operand or bothof them are false values then the mresult of this && is false 
//this AND operator follows the AND truth table, so when ever we use this operation  than js will take refence from ANS truth table 
//console.log(true && true); // print(true) //console.log(true && false); // print(false) //console.log(false && true); // print(false) //console.log(false && false); // print(false)

// && find first false value and last truth =value
//this &&continues its excution, till it sees  the value of true 
//and this stops execution when it finds false value.

//let result = 1 && false && 0; //result = false 
//let result = 1 && 0 && null; //result = 0

//this ! converts true to false and false to true //console.log(!1); // print(false) //console.log(!0); // print(true) //console.log(!true); // print(false) //console.log(!false); // print(true) //console.log(!null); // print(true) //console.log(!undefined); // print(true) //console.log(!"hello"); // print(false) //console.log(!""); // print(true)
//this ! converts true to false and false to true //console.log(!!1); // print(true) //console.log(!!0); // print(false) //console.log(!!true); // print(true) //console.log(!!false); // print(false) //console.log(!!null); // print(false) //console.log(!!undefined); // print(false) //console.log(!!"hello"); // print(true) //console.log(!!""); // print(false)

//?? (nulish coalescing ), it treats null and undefined similarly 
//we'll say that value is"defined" when its neuther "null nor" "undefined " 
//undefined means that var is having npo data stored 
//let a = undefiend; //console.log(a); // print(undefined) //console.log(typeof(a)); // print(undefined) //let a = null; //console.log(a); // print(null) //console.log(typeof(a)); // print(object)

//let a = null; //console.log(a); // print(null) //console.log(typeof(a)); // print(object) //let a = undefined; //console.log(a); // print(undefined) //console.log(typeof(a)); // print(undefined)

//result = a ?? b,//if "a" is defined then "a" will be stored in result var 
//if "b" isdefined then "b" will be storedin result var 

//?? retuirns the first argument if its not null / undefined 
//let b = 0, a;      //lt = a ?? b; console.log(it); // print(0) //let a = null; let b = 0; //let result = a ?? b; console.log(result); // print(0) //let a = undefined; let b = 0; //let result = a ?? b; console.log(result); // print(0) //let a = null; let b = undefined; //let result = a ?? b; console.log(result); // print(undefined) //let a = undefined; let b = null; //let result = a ?? b; console.log(result); // print(null)

//js stopped using ?? together with && , ||
//let result = 1 && 2 ?? 3; //result = 3



//?? returns the first defined value and last undefined value 
// || return the firrt truth value and also last faslse value 
// &&return first value and also last true value 
// || can be used in same way as ??, to find the defined var 

// let result = 0 ?? false ?? "hello"; console.log(result) => 0


//let result = 1 ?? 2: result = 1 

//let result = null ?? null; //console.log(result); =>null 

//you have a login page and where youare actually trying to take the values of firstName , lastName 
//if(firstName ?? middleName ?? lastName){
//console.log("you have entered required values")
//} else {
// console.log("please enter the values")
//}

// let b = 0; 

//loops 

//initialization , conndition check => loop body , condition body => flase => body outsite loop 
                      //true 

//while loop 

//let i = 0 , //initilaztion the a var 
//while(i < 5){  //condition 
// console.log(i);
//  i++ //inc and dec the value 
//}
//console.log("your out of the loop as  the cond is false") 
//we want only to run the loop limited number of time not infint times 

//forloop 

//for(let i=0; i<5; i++){
//console.log(i):
//}
//init actully happens once, which when loop is getting 
//started => goto condition check => goto inc => cond check => exceution loop body => goto inc

//break, continue 
//for(let i=0; i<5; i++){
// if(i ==2){
//continue 
//}
//console.log(i); 
//}
//console.log("loop ended") //output => 0 1 3 4 


//for(let i=0; i<5; i++){
// if(i == 2){
//break 
//}
//console.log(i); 
//}
//console.log("loop ended") // 0 1 output

//days 5 


//objects and also arrays 
//2 types in js where we can define any object 
//using constructor function and object literal 
//let user = new Object(); //object constractor func 
//let user2 = {}; //objectliteral; 

let user = { ///object in js is a key value pair 
    name: "KIRAN",
    age: 21, 
    isAdmin: false,
}
//here object is created from another object not from a class 

//dot notation where we can access the property of given objects 
// console.log(user.name, user.age) => KIRAN 21
// console.log(user["name"]); => KIRAN 

//console.log(user) => {name: kiran, age: 21, isAdmin:false}

//objects are not primtive data types, where theycan store multiple data tips at once 

//delete user.age => true 
//console.log(user) => {isAdmin: false, name: "kiran"}

let users= { ///object in js is a key value pair 
    name: "KIRAN",
    "likes fruits": true,
}

//console.log(users) => {name: "kiran", likes fruits: true}
//console.log(user.["likes fruits"]) => true 

//delete users["likes fruits"]; => true 

let obj = {
    0 : "simple", //key is interger 
}
//console.log(obj.0) => syntax error 
//console.log(obj[0]); => simple //console.log(obj["0"]); => simple 
//ther no limitation on property names, they can be any strings  or symbols 
//other type are automatically converted to strings 
//console.log(obj.__proto__); 
//proto is a spl property name, we can't set it to non-object value                                                                                                                                                  


//let user_s = {}
//console.log(user_s.age === undefined); //check whether age is actually present in user object or not , isso inoperator 
//true 
//"age" in user_s; => false 

//let user_s = {
// age: undefined,
 //} 
 //console.log(user_s.age === undefined); => true 
//console.log("age" in user_s) => true 

// let obj_j = {
//     name: "neelam",
//     age: 24, 
//     isAdmin: true,
// }
// for(let i in obj_j) {
//     console.log(i)           => name, age. isAdmin 
// }
//  married into the obj user then we do the below thing obj_j.isMarried = false  

//  obj_j => {      //outut 
//     name: "neelam",
//     age: 24, 
//     isAdmin: true,
//     obj_j.isMarried = false,
//}

//let user_fun = { 
//  //name: "john",
//}; 

// let admin = user_fun; 
// admin.name = "kiran";
// console.loh(user_fun); => {name = "kiran"}


//let aa ={};
//let b = {};
//  //console.log(aa == box, a === b); => false false 

// let k = {
//     name: "arun",
//     age: 25,
// }

// let clone = {};
// for (let key in k){
//     clone[key] = k[key];
// }
// console.log(clone); =>/(ame: "arun",
//     age: 25,}

// clone.name = "rahul" 
// console.log(k);//name: "arun",
//     age: 25,}

//let user_fun = { 
//  name: "john",
//  age: 30, 
//}; 

// user_fun.sayHi = function(){
//     console.log("hello");
// }

// console.log(user_fun); => {name: "john", age: 30, sayHi: f}
// user_fun.sayHi() => hello 
// console.log(user_fun.isPrototypeOf()); => false  

// console.log(user_fun.isPrototypeOf(object)); => false 

// let ob = {
//     name: "kaliya",
//     age: 25, 
//     sayHii: function{
//         console.log(`${ob.name}the owner of this obj user`); // ob.sayHii(); => kaliya ther owner of this object user 
//         console.log(`${this.name} of this obj user`);//ob.sayHii(); => kaliya ther owner of this object user 
//     }
// };

// /in js , this can be used in any function , event if it is not method of an object => this in js is unbound, 


// let name : "peter";
//function sayHi(){
// name = "suhana",
// console.log(`${this.name} is the owner of the function`)
//}
//sayHi(); => is the owner of the function


// let name : "peter";
//function sayHi(){
// name = "suhana",
// console.log(`${this} is the owner of the function`)
//}
//sayHi(); => [object window] is the owner of the function 

//arrays areb spl object in js
//constructor funcgtion and also other one is array literals 

let arr = new Array(); //arr constrauctor 
let arr1 = []; //arr literals 

let array = ["apple", 23,  false, "bbanaan"] 
console.log(array[1]); //23 

array[1] = 45; 
console.log(array) //["apple",45, false, "bbanaan"]

console.log(array.length) //4 
console.log(array[-1]); //undefined 
console.log(array.at(-1)) ; //bbanaan 

console.log(array[array.length -1]); //bbanaan 

//pop,push,  shift, unshift 
//ds queue is one of the most commo uses of an array 
//push => appends an element to the end 
//shift => it gets an element from the begaining of the array 
//pop => takes an elemnt from the end 
console.log(array.push(23)) //5
console.log(array) //["apple",45, false, "bbanaan", 23]
array.pop(23); 
console.log(array) //["apple",45, false, "bbanaan"] 
console.log(array.shift()); // apple  
console.log(array) //[45, false, "bbanaan"] 
console.log(array.unshift("apple")) //4
console.log(array) //["apple",45, false, "bbanaan"]  
array.unshift("Nothing") //5
console.log(array) //  ["Nothimg,apple",45, false, "bbanaan"]
//push and unshift can add multiple element at once. 
//push/pop run fast, while shit/unshift are slow . don't compare arr with == 
console.log([]==[]); //false 

//pop push sift unshift are used to add/remove the element 
//splice, slice, concat, forEach, indeOf, find, filter, map, reduce , sort, reverse 

//days 6 


//function in js 
function sum(a,b){
    return a+b;
}//in this syntax we use functiion keyword to define a function => function expression 

let mul = function(a,b){ //function defination 
    return a*b;
}

//arrow functions are used as shorthand notation forwriting a function , => (arrow symbol) 
let div = (a,b) => {
    return a/b 
}

sum(5,6);
mul(2,3);
div(4,2);

//let obj = new Object() /let arr =new Array()
//construction function are function that are used for  specific purpose, these are spl function any 
//constructor function will have their starting as capital letter 
function Kiran(){} //to use a constrauctor function we do need "new" keyword 
let sub = new Function(); 

//js was initially created for web browsers, it evolved into a language with many uses and plateforms 
//js specification calls that as a host environment. 
//a host environment provides its own objects and function in addition to the language core. 
//web browser is one such a host where it provides features to control web pages 
//node,.js provides server-side fetures and so on. 
//the root object is calls window object ,it has two roles, 
// 1. it is a globalobj for js code, 2. it represent browser window and methods to control it .

function sayHi(){
    console.log("hello"); 
}

window.sayHi();
console.log(window.innerHeight);

//DOM => Document object model, represents all page  contant as objects that can be modified.
document.body.style.background = "red"; // red   

//document object is main "entry point" to the page 
//we can anything on the page using document obj; 
//dom specification explains the structure of a document and provides objects to manipulate it. there are non-browser 
//instruments that uses DOM too. 
//CSSOM => css object model for css rules   

//BOM, represented additional objects provided by browser for working with everything except the document. 
//navigator objects , background information about the browser and operating system 
console.log(navigator.userAgent);
console.log(navigator.plateform); 
console.log(location.href); 


//location, allow to read the current url & can redirect the browser to a new one.
if(confirm("Go to Netflix?")){
    location.href="https://www,netflix.com";
}

//alert, confirm, prompt are part of BOM , as these are browser related method. 
confirm("Are you 18+?");

//backbone of html documnent is tags 
//acc to DOM, every html tag is an object . 
//everything that is present on the screen ifself is js object 
//everything that will be rendered on to the screen itself is js objects 
//we canapply object methods and also araay methods onto html element.
//all these js obj's are accesible using js 

document.body.style.color = "red"; 
//style.color to change the text color of document.body
//DOM reperesents html as a tree structure of ptags. 
//every tree nodes is object, tags are element node, <html> is root element , <head>, <body> are children of <html> element ifself.
//all operations on DOM start with document object, as it is entry point to the DOM
//document => document.head/document.body 
//document.documentElement => document.html 

//days 7

//callbacks, promises, and async/await 
//asynchronous actions: actions that we initiate now, but they finish later 
//setTimeout.real world examples of asynchronous actions. 
//ex: loading scripts and modules
//every html element has attributes, these are properties  
//<script src="index.js"></script>

function loadScript(src){
    let script = document.createElement("script")
    script.src = src;
    document.head.append(script);//to include script tag with src into html code 
}
//it inserts into the document a new script tag with given src, the browser autometically starts loading and excutes when completes 

//when we pass a function as an argument into a function then it is callback 

function loadScript(src, callback){
    let script = document.createElement("script");
    script.src= src;
    script.onload = () => callback(script);
    document.head.append(script);
}

//onload event is basically excutes a function after script is loaded and executed. 
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", script=>{
    alert( `cool, the script $(script.src) is loaded`);
    console.log(_);
})

//a function that does something asynchronously should provide a callback argument where we put the function to run after its complete.

//promise , we tell to do something , that thing may me achieved or may not be? so this is what meant promises 
//kiramn;s brother promise kiran to bring an ice-cream .
//there are three possibilities 
//kiran brother bought ice cream-so here kiran;s wish has been completed 
//kiran's brother might forget it - so here kiran's wish is pending 
//kiran's brother told him no such ice cream in market - so here kiran's wish is dead 
//fronted and backend , to establish a communication have includes this promises 

//so here in any given promise we have resolve, reject, which are callbacks that are used to tell whether your promises is completed or not

let promises = new promise(function(resolve, reject){
    console.log("hello kiran, this is your ice-cream");
    resolve("promise resolved")
})
console.log(promises)

//there are no completing the promiseand not complete the promise happen at same time 
let promised = new promise(function(resolve, reject){
    console.log("no ice-cream");
    reject("promise not fulfilled");//reject(new Error("promie not fulfilled"))
})
console.log(promised)


console.log("start of the code")
let promised2 = new promise(function(resolve, reject){
    setTimeout(() => {console.log("printed this line after 5 seconds"), 5000})
    resolve("promises resolved")
})
console.log("end of the code")



let promised3 = new promise(function(resolve, reject){
    console.log("start of the code")
    setInterval(() => console.log("print this line for every 3 sec"), 3000);
    console.log("end of the code")
    resolve("promise fill successfully")
}).then(
    result => console.log(results),
    error => console.log(new Error("i am sorry")),
)

async function() {
    let promise4 = new promise((resolve, reject) => {
        setTimeout((() => resolve("done")))
    });
    let result = await promise4;
    console.log(result);
}






































































