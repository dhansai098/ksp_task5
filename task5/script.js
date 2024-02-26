//Operators
//Arithemetic Operators           + - * / % ** ++ --
let number1=8;
let number2=8;
console.log(number1-number2); 
console.log(number1 % number2); 
console.log(++number1); 
console.log(--number1); 
console.log(number1++);
let number3=8;
console.log(number3**3);
console.log(number3**10);
//Assignment Operators       = += -= *= /= %= **=
let number4=6;
let result=number4+4;
console.log(result);  //10
let number5=6;
number5*=2;
console.log(number5);
//Comparision Operator    == === != >< <= >=
let number6=5;
console.log(number6==5);
console.log(number6==7);
console.log(number6!=5);
console.log(number6<7);
console.log(number6>7);
console.log(number6<5);
console.log(number6>=2);
//Data Types     Intergers  String  float  Boolean
let number7=5;
console.log(number7); // integer
let number8=66.8;
console.log(number8); // float
let name="akshaya";
console.log("name"); //string
let sample=true;
console.log(sample); // boolean
// Logical Operators      && || !
let number9=6;
let number10=4;
console.log(number9<10 && number10<5); // true
console.log(number9<10 || number10<2); //true
console.log(!number9<10 ||number10<2); 

/*STRING METHODS
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()	String trim()*/
let name1 = 'dhan';
let name2 = 'sai';
let name3 = 'vaishu';
//String length
console.log(name1.length);  // 4
//String slice()
console.log(name1.slice(0,3));  //Man
//String substring()
console.log(name1.substring(0,2));
//String replace()
let text = "       Hello guys!        ";
let result1 = text.replace(/^\s+|\s+$/gm,'');
//String replaceAll()
// String toUpperCase()
console.log(name3.toUpperCase())
// String toLowerCase()
console.log(name3.toLowerCase())
// String concat()
console.log(name1.concat(name3));
console.log(name3.replace("hii"));

