
// If you practise all these problems..
// you will be strong in JS objects manipulations.


// Problem 1 : Part A

// Playing with JSON object"s Values:
//1
// Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
// Write a code to get the below details of Fluffyy so that
// I can take him to the vet.

let cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat sandwich"],
    weight: 8,
    furcolor: "white"
    },
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    },]
    }
    console.log(cat);
    
    // 1. Add height and weight to Fluffy
    cat.height = "30 cm"; // Example height
    cat.weight = 5; // Example weight
    
    // 2. Update Fluffy's name to Fluffyy
    cat.name = "Fluffyy";
    
    // 3. List all the activities of Fluffyy's catFriends
    let catFriendsActivities = cat.catFriends.flatMap(friend => friend.activities);
    console.log("Cat Friends Activities:", catFriendsActivities.join(", "));
    
    // 4. Print the catFriends names
    let catFriendsNames = cat.catFriends.map(friend => friend.name);
    console.log("Cat Friends Names:", catFriendsNames.join(", "));
    
    // 5. Print the total weight of catFriends
    let totalWeight = cat.catFriends.reduce((sum, friend) => sum + friend.weight, 0);
    console.log("Total Weight of Cat Friends:", totalWeight, "kg");
    
    // 6. Print the total activities of all cats
    let totalActivities = cat.activities.length + catFriendsActivities.length;
    console.log("Total Activities of All Cats:", totalActivities);
    
    // 7. Add 2 more activities to bar & foo cats
    cat.catFriends[0].activities.push("play fetch", "chase laser"); // bar
    cat.catFriends[1].activities.push("jump", "explore boxes"); // foo
    
    // 8. Update the fur color of bar
    cat.catFriends[0].furcolor = "gray";
    
    // Final state of the cat object
    console.log(JSON.stringify(cat, null, 2));
    
    // Problem 1 : Part B :
    
    // Iterating with JSON object"s Values
    
    // Below is some information about my car. As you can see, I am not the best driver.
    // I have caused a few accidents.
    // Please update this driving record so that I can feel better about my driving skills.
    
    
    let myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    },
    ]
    } 
    // 1. Loop over the accidents array and change atFaultForAccident from true to false
    myCar.accidents.forEach(accident => {
        accident.atFaultForAccident = false;
    });
    
    // 2. Print the dates of my accidents
    console.log("Accident Dates:");
    myCar.accidents.forEach(accident => {
        console.log(accident.date);
    });
    
    // Real challenges starts here:bowtie:
    
    // Problem 2 :
    
    // Parsing an JSON object"s Values:
    
    // 1.Write a function called "printAllValues" which returns an newArray of all the input object"s values.
    // Input (Object):
    
    // let object1 = {name: "RajiniKanth", age: 33, hasPets : false};
    // Output:
    // ["RajiniKanth", 33, false]
    
    // Sample Function proto:
    function printAllValues(obj) {
        // Use Object.values to get an array of the object's values
        return Object.values(obj);
    }
    
    // Example input object
    let object1 = { name: "RajiniKanth", age: 33, hasPets: false };
    
    // Call the function and store the result
    let result6 = printAllValues(object1);
    
    // Print the output
    console.log(result6); // Output: ["RajiniKanth", 33, false]
    
    
    // Problem 3:
    
    // Parsing an JSON object"s Keys:
    // Write a function called "printAllKeys" which returns an newArray of all the input object"s keys.
    // Example Input:
    // {name : "RajiniKanth", age : 25, hasPets : true}
    // Example Output:
    // ["name", "age", "hasPets"]
    // Sample Function proto:
    
    function printAllKeys(obj) {
        // Use Object.keys to get an array of the object's keys
        return Object.keys(obj);
    }
    
    // Example input object
    let inputObject = { name: "RajiniKanth", age: 25, hasPets: true };
    
    // Call the function and store the result
    let result7 = printAllKeys(inputObject);
    
    // Print the output
    console.log(result7); // Output: ["name", "age", "hasPets"]
    
    
    // Problem 4 :
    
    // Parsing an JSON object and convert it to a list:
    
    // Write a function called "convertObjectToList" which converts an object literal into an array of arrays.
    // Input (Object):
    // let object = {name: "ISRO", age: 35, role: "Scientist"};
    // Output:
    // [["name", "ISRO"], ["age", 35], ["role", "Scientist"]]
    // Sample Function proto:
    // let obj = {name: "ISRO", age: 35, role: "Scientist"};
    function convertObjectToList(obj) {
        // Use Object.entries to convert the object into an array of key-value pairs
        return Object.entries(obj);
    }
    
    // Example input object
    let inpuObject = { name: "ISRO", age: 35, role: "Scientist" };
    
    // Call the function and store the result
    let result8 = convertObjectToList(inpuObject);
    
    // Print the output
    console.log(result8); // Output: [["name", "ISRO"], ["age", 35], ["role", "Scientist"]]
    
    
    // Problem 5: ( 5 mins):
    
    // Parsing a list and transform the first and last elements of it:
    // Write a function "transformFirstAndLast" that takes in an array, and returns an object with:
    // 1) the first element of the array as the object"s key, and
    // 2) the last element of the array as that key"s value.
    
    // Input (Array):
    // let array = ["Hi", "I", "am", "Geek"];
    // Output:
    // let object = {
    // HI : "Geek"
    // }
    // Sample Function proto:
    // let arr = ["HI", "I", "am", "a geek"];
    
    function transformFirstAndLast(array) {
        // Check if the array has at least two elements
        if (array.length < 2) {
            return {}; // Return an empty object if there aren't enough elements
        }
        
        // Get the first and last elements
        const firstElement = array[0];
        const lastElement = array[array.length - 1];
        
        // Create an object with the first element as the key and the last as the value
        return { [firstElement]: lastElement };
    }
    
    // Example input array
    let array = ["Hi", "I", "am", "Geek"];
    
    // Call the function and store the result
    let result9 = transformFirstAndLast(array);
    
    // Print the output
    console.log(result9); // Output: { Hi: "Geek" }
    
    
    // Problem 6 :
    
    // Parsing a list of lists and convert into a JSON object:
    // Write a function "fromListToObject" which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
    // Input (Array):
    // let array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
    // Output:
    // let object = {
    // make : "Ford"
    // model : "Mustang",
    // year : 1964
    // }
    // Sample Function proto:
    // let arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
    function fromListToObject(array) {
        // Create an empty object to hold the key-value pairs
        let result = {};
        
        // Loop through each sub-array in the input array
        array.forEach(pair => {
            // Assign the first element as the key and the second as the value
            result[pair[0]] = pair[1];
        });
        
        return result;
    }
    
    // Example input array
    let array8 = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
    
    // Call the function and store the result
    let result10 = fromListToObject(array8);
    
    // Print the output
    console.log(result10); 
    // Output: { make: "Ford", model: "Mustang", year: 1964 }
    
    // Problem 7 :
    
    // Parsing a list of lists and convert into a JSON object:
    // Write a function called "transformGeekData" that transforms some set of data from one format to another.
    // Input (Array):
    // let array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
    
    // Output:
    // [
    // {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
    // {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
    // ]
    
    // Sample Function proto:
    // let arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
    function transformGeekData(array) {
        // Use map to transform each inner array of key-value pairs into an object
        return array.map(innerArray => {
            // Create an empty object for each person's data
            let personObject = {};
            
            // Loop through each key-value pair in the inner array
            innerArray.forEach(pair => {
                personObject[pair[0]] = pair[1]; // Assign key-value pair to the object
            });
            
            return personObject; // Return the created object
        });
    }
    
    // Example input array
    let array10 = [
        [["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
        [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]
    ];
    
    // Call the function and store the result
    let result11 = transformGeekData(array10);
    
    // Print the output
    console.log(result11);
    /*
    Output:
    [
        { firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard" },
        { firstName: "Sri", lastName: "Devi", age: 28, role: "Coder" }
    ]
    */
    
    
    // Problem 8: (10 — 20 mins):
    
    // Parsing two JSON objects and Compare:
    
    // Read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    
    // Write an "assertObjectsEqual" function from scratch.
    // Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
    // It is OK to use JSON.stringify().
    
    // Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
    
    // Success Case:
    // Input:
    // let expected = {foo: 5, bar: 6};
    // let actual = {foo: 5, bar: 6}
    // assertObjectsEqual(actual, expected, "detects that two objects are equal");
    // Output:
    // Passed
    
    // Failure Case:
    // Input:
    // let expected = {foo: 6, bar: 5};
    // let actual = {foo: 5, bar: 6}
    // assertObjectsEqual(actual, expected, "detects that two objects are equal");
    // Output:
    // FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}
    
    // let expected = {foo: 5, bar: 6};
    // let actual = {foo: 5, bar: 6}
    function assertObjectsEqual(actual, expected, testName) {
        // Convert both objects to JSON strings
        const actualString = JSON.stringify(actual);
        const expectedString = JSON.stringify(expected);
        
        // Check if they are equal
        if (actualString === expectedString) {
            console.log(`Passed: ${testName}`);
        } else {
            console.log(`FAILED [${testName}] Expected ${expectedString}, but got ${actualString}`);
        }
    }
    
    // Success Case
    let expected1 = { foo: 5, bar: 6 };
    let actual1 = { foo: 5, bar: 6 };
    assertObjectsEqual(actual1, expected1, "detects that two objects are equal");
    
    // Failure Case
    let expected2 = { foo: 6, bar: 5 };
    let actual2 = { foo: 5, bar: 6 };
    assertObjectsEqual(actual2, expected2, "detects that two objects are equal");
    
    
    // Problem 9 :
    
    // Parsing JSON objects and Compare:
    
    // I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer
    // let securityQuestions = [
    // {
    // question: "What was your first pet"s name?",
    // expectedAnswer: "FlufferNutter"
    // },
    // {
    // question: "What was the model year of your first car?",
    // expectedAnswer: "1985"
    // },
    // {
    // question: "What city were you born in?",
    // expectedAnswer: "NYC"
    // }
    // ]
    function chksecurityQuestions(securityQuestions, question, answer) {
        // Loop through the securityQuestions array
        for (let i = 0; i < securityQuestions.length; i++) {
            // Check if the question matches
            if (securityQuestions[i].question === question) {
                // Return true if the answer matches the expected answer
                return securityQuestions[i].expectedAnswer === answer;
            }
        }
        // If the question is not found, return false
        return false;
    }
    
    // Example security questions data
    let securityQuestions = [
        {
            question: "What was your first pet's name?",
            expectedAnswer: "FlufferNutter"
        },
        {
            question: "What was the model year of your first car?",
            expectedAnswer: "1985"
        },
        {
            question: "What city were you born in?",
            expectedAnswer: "NYC"
        }
    ];
    
    // Test case 1
    let ques1 = "What was your first pet's name?";
    let ans1 = "FlufferNutter";
    let status1 = chksecurityQuestions(securityQuestions, ques1, ans1);
    console.log(status1); // true
    
    // Test case 2
    let ques2 = "What was your first pet's name?";
    let ans2 = "DufferNutter";
    let status2 = chksecurityQuestions(securityQuestions, ques2, ans2);
    console.log(status2); // false
    
    // Problem 10 :
    
    // Parsing JSON objects and Compare:
    // Write a function to return the list of characters below 20 age
    
    function getStudentsUnder20(students) {
        return students.filter(student => student.age < 20);
    }
    
    // Example students data
    let students = [
        { name: "Siddharth Abhimanyu", age: 21 },
        { name: "Malar", age: 25 },
        { name: "Maari", age: 18 },
        { name: "Bhallala Deva", age: 17 },
        { name: "Baahubali", age: 16 },
        { name: "AAK chandran", age: 23 },
        { name: "Gabbar Singh", age: 33 },
        { name: "Mogambo", age: 53 },
        { name: "Munnabhai", age: 40 },
        { name: "Sher Khan", age: 20 },
        { name: "Chulbul Pandey", age: 19 },
        { name: "Anthony", age: 28 },
        { name: "Devdas", age: 56 }
    ];
    
    // Call the function and store the result
    let result12 = getStudentsUnder20(students);
    
    // Print the output
    console.log(result12);

  
    