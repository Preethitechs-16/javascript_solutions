// JavaScript Functions - Warmup Problems

// Problem: 1

// Write a function called “addFive".
// Given a number, “addFive" returns 5 added to that number.
// Input:
// addFive(5);
// addFive(0);
// addFive(-5);
// Output:
// 10
// 5
// 0

// let num = 10;
    function addFive(number) {
        return number + 5;
    }
    
    let firstNumber = addFive(1);
    console.log(firstNumber);
    
    // let result = addFive(num)
    // console.log(result); 
    
    
    // Problem:2
    
    // Write a function called “getOpposite".
    // Given a number, return its opposite
    
    // Input:
    // getOpposite(5);
    // getOpposite(0);
    // getOpposite(-5);
    // getOpposite(“5a");
    // getOpposite(5.5);
    
    // Output:
    // -5
    // 0
    // 5
    // -1
    // -1
    
    let num = 5;
    function getOpposite(num) 
    {
    if (typeof num === 'number')
     { 
        return -num; 
    } 
    else 
    { return -1; 
    }
    }
    let result = getOpposite(num)
    console.log(result);
    
    // Problem:3
    
    // Fill in your code that takes an number minutes and converts it to seconds.
    
    // Examples
    // toSeconds(5) ➞ 300
    // toSeconds(3) ➞ 180
    // toSeconds(2) ➞ 120
    
    let min = 5;
    function toSeconds(min) {
        return min*60
    }
    let secs = toSeconds(min)
    console.log(secs);
    // Problem:4
    
    // Create a function that takes a string and returns it as an integer.
    
    // Examples
    // toInteger(“6") ➞ 6
    // toInteger(“1000") ➞ 1000
    // toInteger(“12") ➞ 12
    
    let mystr = "5";
    function toInteger(mystr) 
    {
    if(typeof mystr==="String")
    {
        return mystr;
    }
    else{
        return Number(mystr);
    }
    }
    let myint = toInteger(mystr)
    console.log(myint); 
    
    
    // Problem:5
    
    // Create a function that takes a number as an argument, increments the number by +1 and returns the result.
    
    // Examples
    // nextNumber(0) ➞ 1
    // nextNumber(9) ➞ 10
    // nextNumber(-3) ➞ -2
    
    let int1 = 2;
    function nextNumber(int1) 
    {
    return int1+1;
    }
    
    let myNextint = nextNumber(int1)
    console.log(myNextint); 
    
    
    // Problem:6
    
    // Create a function that takes an array and returns the first element.
    
    // Examples
    // getFirstElement([1, 2, 3]) ➞ 1
    // getFirstElement([80, 5, 100]) ➞ 80
    // getFirstElement([-500, 0, 50]) ➞ -500
    
    let arr = [1, 2, 3];
    function getFirstElement(arr) 
    {
    return arr[0];
    }
    let data = getFirstElement(arr)
    console.log(data); 
    
    // Problem:7
    
    // Convert Hours into Seconds
    
    // Write a function that converts hours into seconds.
    
    // Examples
    // hourToSeconds(2) ➞ 7200
    // hourToSeconds(10) ➞ 36000
    // hourToSeconds(24) ➞ 86400
    
    let hours=5
    function Hourstosec(hours){
        return hours*3600;
    }
    let convert=Hourstosec(hours) 
    console.log(convert);

    // Problem:8
    
    // Find the Perimeter of a Rectangle
    // Create a function that takes height and width and finds the perimeter of a rectangle.
    
    // Examples
    // findPerimeter(6, 7) ➞ 26
    // findPerimeter(20, 10) ➞ 60
    // findPerimeter(2, 9) ➞ 22

    let height=30,width=40;
    function findPerimeter(height,width) {
    return 2*(height+width);
    }
    let peri = findPerimeter(height,width)
    console.log(peri);
    
    // Problem:9
    
    // Less Than 100?
    // Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
    
    // Examples
    // lessThan100(22, 15) ➞ true
    // // 22 + 15 = 37
    // lessThan100(83, 34) ➞ false
    // 83 + 34 = 117

    let num3=96,num4=150
    function lessThan100(num3,num4) {
    return num3+num4<100;
    }
    let res = lessThan100(num3,num4)
    console.log(res);
    
    // Problem:10
    
    // There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
    
    // Examples
    // remainder(1, 3) ➞ 1
    // remainder(3, 4) ➞ 3
    // remainder(-9, 45) ➞ -9
    // remainder(5, 5) ➞ 0,

    let div1=40,div2=60
    function remainder(div1,div2) {
     return div1%div2
    }
    let res1 = remainder(div1,div2)
    console.log(res1);
    
    // Problem:11
    
    // Old macdonald had a farm:
    // MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
    // turkey = 2 legs
    // horse = 4 legs
    // pigs = 4 legs
    
    // The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
    
    // Examples
    // CountAnimals(2, 3, 5) ➞ 36
    // CountAnimals(1, 2, 3) ➞ 22
    // CountAnimals(5, 2, 8) ➞ 50

    let tur=3,horse=4,pigs=4
    function CountAnimals(tur,horse,pigs) {
        return tur*5+horse*4+pigs*3;
    }
    let legs = CountAnimals(tur,horse,pigs)
    console.log(legs);
    // Problem:12
    
    // Frames Per Second
    // Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
    
    // Examples
    // frames(1, 1) ➞ 60
    // frames(10, 1) ➞ 600
    // frames(10, 25) ➞ 15000

    let f1=8,f2=10
    function frames(f1,f2) {
        return (f1*60)*f2
    }
    let fps = frames(f1,f2)
    console.log(fps);
    // Problem:13
    
    // Check if an Integer is Divisible By Five
    // Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
    
    // Examples
    // divisibleByFive(5) ➞ true
    // divisibleByFive(-55) ➞ true
    // divisibleByFive(37) ➞ false

    function divisibleByFive(num) {
        let res=num%5;
        if(res==0){
            return true;
        }
        else{
            return false;
        }
    }
    let divisible = divisibleByFive(num)
    console.log(divisible);
    // Problem :14
    
    // Write a function called “isEven".
    // Given a number, “isEven" returns whether it is even.
    
    // Input:
    // isEven(12);
    // isEven(0);
    // isEven(11);
    // isEven(“11h");
    
    // Output:
    // true
    // true
    // false
    // -1
    
    function isEven(num8){
        let res1=num8%2;
        if(res1==0){
            return true
        }
        else{
            return false
        }
    }
    let even = isEven(9)
    console.log(even);
    // Problem:15
    
    // Write a function called “areBothOdd".
    // Given 2 numbers, “areBothOdd" returns whether or not both of the given numbers are odd.
    
    // Input:
    // areBothOdd(1, 3);
    // areBothOdd(1, 4);
    // areBothOdd(2, 3);
    // areBothOdd(0, 0);
    
    // Output:
    // true
    // flase
    // flase
    // flase
    
    function areBothOdd(num1, num2){
    return num1 % 2 !==0 && num2 % 2 !==0;
        }
        let odd=areBothOdd(5,3)
        console.log(odd);
    
    // Problem:16
    
    // Write a function called “getFullName".
    // Given a first and a last name, “getFullName" returns a single string with the given first and last names separated by a single space.
    
    // Input:
    // getFullName(“GUVI", “GEEK");
    // getFullName(“GUVI", );
    // getFullName(, “GEEK");
    // getFullName(“", “");
    
    // Output:
    // “GUVI GEEK"
    // “GUVI"
    // “GEEK"
    // “"
    
    function getFullName(firstName, lastName){
        return firstName+" "+lastName  
    }
    let data1=getFullName("john","doe")
    console.log(data1);
    // Problem:17
    
    // Write a function called “getLengthOfWord".
    // Given a word, “getLengthOfWord" returns the length of the given word.
    
    // Input:
    // getLengthOfWord(“GUVI");
    // getLengthOfWord(“");
    // getLengthOfWord();
    // getLengthOfWord(9);
    
    // Output:
    // 4
    // 0
    // -1
    // -1
    function getLengthOfWord(str){
        return str.length;
    }
    console.log(getLengthOfWord("Examlple")); 
    console.log(getLengthOfWord("")); 
    
    // Problem:18
    
    // Write a fufunction getLengthOfWord(word1){
    // Given two words, “isSameLength" returns whether the given words have the same length.
    
    // Input:
    // isSameLength(“GUVI", “GEEK");
    
    // Output:
    // true;
    function isSameLength(str1,str2){
        return str1.length==str2.length;
    }
    console.log(isSameLength("AI","ML")); 
   
    
    // Problem:19
    
    // Create a function to calculate the distance between two points defined by their x, y coordinates
    // console.log(getDistance(100, 100, 400, 300));
    function getDistance(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }
    console.log(getDistance(100, 100, 400, 300));
    // Problem:20
    
    // Write a function called “getNthElement".
    // Given an array and an integer, “getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
    
    // Input:
    // getNthElement([1, 3, 5], 1);
    
    // Output:
    // 3
    function getNthElement(array,n){
        if(arr.length==0){
            console.log("Undefined");
        }
        else{
            return arr[n];
        }
    }
    console.log([9,3,4],1);
    
    // Problem:21
    
    // Write a function called “getLastElement".
    // Given an array, “getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
    
    // Input:
    // getLastElement([1, 2, 3, 4]);
    
    // Output:
    // 4
    
    function getLastElement(array){
            if(arr.length==0){
                console.log("Undefined");
            }
                return arr[arr.length-1];
    }
    console.log(getLastElement([9,5,8,2,12,75]));
    
    // Problem:22
    
    // Write a function called “getProperty".
    // Given an object and a key, “getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
    
    // let obj = {
    // mykey: “value"
    // };
    
    // Input:
    // getProperty(obj,’mykey’);
    // getProperty(obj,’dummykey’);
    
    // Output:
    // value
    // NA
    // let obj = {
    // mykey: “value"
    // };
    function getProperty(obj, key) {
    if(key in obj){
        return obj[key];
    }
    else{
        return indefined;
    }
    }
    let obj={
        name:'john',
        address:'USA'
    }
    console.log(getProperty(obj,'name'));
    // Problem:23
    
    // Write a function called “addProperty".
    // Given an object and a key, “addProperty" adds a new property on the given object with a value of true.
    
    // let obj = {
    // }
    
    // Input:
    // addProperty(obj, “mykey");
    
    // Output:
    // {
    // mykey: true
    // }
    // let obj = {
    // mykey: “value"
    // };
  
    const addProperty = (function() {
        return function(obj, key) {
            obj[key] = true;
        };
    })();
    
    // Example usage:
    const myObject = {};
    addProperty(myObject, 'newKey');
    console.log(myObject);
    
    // Problem:24
    
    // Write a function called “removeProperty".
    // Given an object and a key, “removeProperty" removes the given key from the given object.
    
    // Input:
    // removeProperty(obj, “name");
    
    // Output:
    // undefined
    
        function removeProperty(obj, key) {
            if (key in obj) {
                delete obj[key]; 
            }
        }
        
        const myObject1 = {
            name: "Alice",
            age: 25,
            city: "Wonderland"
        };
        
        removeProperty(myObject1, "age");
        console.log(myObject1); 
    // Problem:25
    
    // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
    // let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
    
        function countPositivesSumNegatives(arr1) {
            let countPositive = 0;
            let sumNegative = 0;
        
            for (const num of arr1) {
                if (num > 0) {
                    countPositive++;
                } else if (num < 0) {
                    sumNegative += num;
                }
            }
        
            return [countPositive, sumNegative];
        }
        
        // Example usage:
        let arr1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
        let result2 = countPositivesSumNegatives(arr1);
        console.log(result2); // Output: [4, -17]
        
    // console.log(ar22);
    
    // Problem:26
    
    // Create a function that receives an array of numbers and returns an array containing only the positive numbers
    function filterPositiveNumbers(arr) {
            return arr.filter(num => num > 0);
        }
        
        // Example usage:
        let numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
        let positiveNumbers = filterPositiveNumbers(numbers);
        console.log(positiveNumbers); 

    // let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
    // let ar222 = getPositives(ar);
    // console.log(ar222);
    
    // Problem:27
    
    // Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
    // n = 0 -> 2⁰ -> [1]
    // n = 1 -> 2⁰, 2¹ -> [1,2]
    // n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
    
    // Input:
    // powersOfTwo(0)
    // powersOfTwo(1)
    // powersOfTwo(2)
    
    // Output:
    // 1
    // 1,2
    // 1,2,4
    function powersOfTwo(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i); // Calculate 2 to the power of i and add to the array
    }
    return result;
}

console.log(powersOfTwo(0)); // Output: [1]
console.log(powersOfTwo(1)); // Output: [1, 2]
console.log(powersOfTwo(2)); // Output: [1, 2, 4]
console.log(powersOfTwo(3)); // Output: [1, 2, 4, 8]

    // Problem:28
    
    // Find the maximum number in an array of numbers
    function findMaxNumber(arr) {
        return Math.max(...arr);
    }
    
    let numbers1 = [5, 10, 3, 12, 9, 25];
    let maxNumber = findMaxNumber(numbers);
    console.log(maxNumber); // Output: 25    
    
    // Problem:29
    
    // Print the first 100 prime numbers
    // printPrimes(100);
    
    // Function prints the first nPrimes numbers
    function printPrimes(n) {
        const primes = [];
        let num = 2; // Start from the first prime number
    
        while (primes.length < n) {
            if (isPrime(num)) {
                primes.push(num);
            }
            num++;
        }
    
        console.log(primes.join(', ')); // Print the primes as a comma-separated string
    }
    
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // Example usage
    printPrimes(10); // Prints the first 10 prime numbers
    
    

    // Problem:30
    
    // Create a function that will return in an array the first “nPrimes" prime numbers greater than a particular number “startAt"
    // console.log(getPrimes(10, 100));
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    function getPrimes(nPrimes, startAt) {
        const primes = [];
        let num = startAt + 1; // Start checking from the next number after startAt
    
        while (primes.length < nPrimes) {
            if (isPrime(num)) {
                primes.push(num);
            }
            num++;
        }
    
        return primes;
    }
    
    // Example usage
    console.log(getPrimes(10, 100)); // Prints the first 10 prime numbers greater than 100
    
   
    
    // Problem:31
    
    // Reverse a string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    
    // Example usage
    const originalString = "Javascript";
    const reversedString = reverseString(originalString);
    console.log(reversedString); // Output: !dlroW ,olleH
    
    
    // Problem:32
    
    // Create a function that will merge two arrays and return the result as a new array
    // let ar1 = [1, 2, 3];
    // let ar2 = [4, 5, 6];
    // let ar = mergeArrays(ar1, ar2);
    // console.log(ar);
    function mergeArrays(arr1, arr2) {
        return arr1.concat(arr2);
    }
    // Example usage
    let ar1 = [1, 2, 3];
    let ar2 = [4, 5, 6];
    let mergedArray = mergeArrays(ar1, ar2);
    console.log(mergedArray); 
    
    // Problem:33
    
    // Calculate the sum of numbers received in a comma delimited string
    // console.log(sumCSV(“1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
    
    function sumOfNumbers(commaDelimitedString) {
        // Split the string into an array using the comma as a delimiter
        const numbersArray = commaDelimitedString.split(',');
        
        // Convert each element to a number and calculate the sum
        const sum = numbersArray.reduce((accumulator, current) => {
            return accumulator + Number(current.trim());
        }, 0);
        
        return sum;
    }
    
    // Example usage
    const inputString = "1, 2, 3, 4, 5";
    const result4 = sumOfNumbers(inputString);
    console.log(result4); // Output: 15
    