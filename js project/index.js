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

